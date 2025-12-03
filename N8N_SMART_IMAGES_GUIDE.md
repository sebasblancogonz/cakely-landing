# Guía: Sistema de Imágenes Inteligentes para el Blog

## Problema que resuelve

El workflow original tenía dos problemas:

1. **Imágenes repetidas**: Podía usar la misma imagen en múltiples artículos
2. **Imágenes genéricas**: Siempre buscaba "bakery pastry cake shop" sin importar el tema del artículo

## Solución: Smart Images System

El nuevo workflow `n8n-workflow-cakely-blog-ai-topics-smart-images.json` implementa un sistema inteligente de selección de imágenes.

### Cómo funciona

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. Get Cakely Blog Posts                                       │
│    ↓ Obtiene todos los posts existentes                        │
├─────────────────────────────────────────────────────────────────┤
│ 2. Extract Published Data                                       │
│    ↓ Extrae:                                                    │
│      - Títulos de artículos (para evitar temas repetidos)      │
│      - URLs de imágenes usadas (coverImage)                    │
├─────────────────────────────────────────────────────────────────┤
│ 3. AI Generate Topic                                            │
│    ↓ Genera tema evitando títulos ya publicados                │
├─────────────────────────────────────────────────────────────────┤
│ 4. Generate Article                                             │
│    ↓ Claude Sonnet crea el artículo completo                   │
├─────────────────────────────────────────────────────────────────┤
│ 5. Generate Image Keywords (NUEVO)                             │
│    ↓ Claude Haiku analiza el título y genera keywords          │
│      Ejemplo: "Cómo reducir costes" → ["cost", "budget",       │
│                "bakery expenses"]                               │
├─────────────────────────────────────────────────────────────────┤
│ 6. Search Unsplash                                              │
│    ↓ Busca con keywords específicos + "bakery pastry"          │
│      Trae 30 resultados para tener más opciones                │
├─────────────────────────────────────────────────────────────────┤
│ 7. Select Unused Image (NUEVO)                                 │
│    ↓ Filtra imágenes ya usadas comparando IDs                  │
│    ↓ Selecciona aleatoriamente de las disponibles              │
│    ↓ Si no hay disponibles, usa una genérica con warning       │
├─────────────────────────────────────────────────────────────────┤
│ 8. Publish to Blog                                              │
│    ✓ Publica con imagen única y relevante                      │
└─────────────────────────────────────────────────────────────────┘
```

## Nodos nuevos/modificados

### 1. Extract Published Data

**Antes:**
```javascript
const publishedArticles = posts
  .filter(post => post.published === true)
  .map(post => post.title);
```

**Ahora:**
```javascript
const publishedArticles = posts
  .filter(post => post.published === true)
  .map(post => post.title);

// NUEVO: También extraemos las imágenes usadas
const usedImages = posts
  .filter(post => post.coverImage)
  .map(post => post.coverImage);

return [{
  json: {
    publishedArticles,
    usedImages,        // <- Lista de URLs de imágenes ya usadas
    totalPosts: posts.length
  }
}];
```

### 2. Generate Image Keywords (NUEVO)

Este nodo usa Claude Haiku para generar keywords específicos del artículo:

```json
{
  "model": "claude-3-5-haiku-20241022",
  "max_tokens": 200,
  "system": "Eres un experto en búsqueda de imágenes. Genera términos en INGLÉS...",
  "messages": [{
    "role": "user",
    "content": "Título: {{ $('Parse Article JSON').item.json.title }}\n\nGenera 2-3 términos..."
  }]
}
```

**Ejemplos de output:**

| Título del artículo | Keywords generados |
|---------------------|-------------------|
| "Cómo reducir costes en tu pastelería" | `["cost", "budget", "bakery expenses"]` |
| "5 recetas para San Valentín" | `["valentine", "heart cake", "romantic dessert"]` |
| "Organiza tu obrador en 7 pasos" | `["bakery kitchen", "organization", "workspace"]` |

**Costo:** ~$0.001 por generación (muy económico)

### 3. Search Unsplash

**Antes:**
```javascript
query: "bakery pastry cake shop"  // Siempre lo mismo
per_page: 10
```

**Ahora:**
```javascript
query: keywords.join(' ') + ' bakery pastry'  // Keywords específicos + genéricos
// Ejemplo: "valentine heart cake romantic dessert bakery pastry"
per_page: 30  // Más resultados para tener opciones después del filtrado
```

### 4. Select Unused Image (NUEVO)

Este es el nodo más importante. Filtra y selecciona:

```javascript
const results = $input.first().json.results || [];
const usedImages = $node['Extract Published Data'].json.usedImages || [];

// Filtrar imágenes que NO han sido usadas
const availableImages = results.filter(img => {
  const imageId = img.id;  // ID de Unsplash (ej: "a1b2c3d4e5f")
  // Verificar que el ID no esté en ninguna URL usada
  return !usedImages.some(used => used.includes(imageId));
});

// Si no hay imágenes disponibles, usar fallback
if (availableImages.length === 0) {
  return [{
    json: {
      coverImage: results[0]?.urls.raw + '&w=1200&h=630&fit=crop',
      warning: 'No unused images found, using fallback'
    }
  }];
}

// Seleccionar aleatoriamente de las disponibles
const selectedImage = availableImages[Math.floor(Math.random() * availableImages.length)];

return [{
  json: {
    coverImage: selectedImage.urls.raw + '&w=1200&h=630&fit=crop',
    imageId: selectedImage.id,
    imageDescription: selectedImage.description,
    photographer: selectedImage.user.name,
    photographerUrl: selectedImage.user.links.html,
    totalResults: results.length,
    availableImages: availableImages.length,
    usedImagesCount: usedImages.length
  }
}];
```

**Qué hace:**
1. Compara el ID de Unsplash de cada imagen con las URLs ya usadas
2. Filtra las imágenes que ya aparecen en artículos anteriores
3. Selecciona aleatoriamente entre las disponibles
4. Si no hay disponibles, usa una imagen genérica y añade un warning
5. Añade parámetros de optimización: `w=1200&h=630&fit=crop` (tamaño ideal para SEO)

## Comparación de costos

### Workflow original
- **Claude Haiku (topic)**: $0.003
- **Claude Sonnet (article)**: $0.015
- **Unsplash**: Gratis
- **Total**: ~$0.018 por post

### Workflow con Smart Images
- **Claude Haiku (topic)**: $0.003
- **Claude Sonnet (article)**: $0.015
- **Claude Haiku (keywords)**: $0.001 ← NUEVO
- **Unsplash**: Gratis
- **Total**: ~$0.019 por post

**Incremento**: +$0.001 (~5% más caro) pero con **imágenes únicas y relevantes**

## Ventajas

### ✅ Imágenes únicas
- Nunca repite la misma imagen
- Trackea todas las imágenes usadas desde el inicio
- Si se queda sin imágenes disponibles, muestra un warning

### ✅ Imágenes relevantes
- Keywords generados específicamente para cada artículo
- Mejor coincidencia con el tema del post
- Mejora la experiencia visual del blog

### ✅ Estadísticas útiles
El nodo devuelve información valiosa:
```json
{
  "coverImage": "https://images.unsplash.com/photo-...",
  "imageId": "a1b2c3d4e5f",
  "totalResults": 30,
  "availableImages": 28,
  "usedImagesCount": 15
}
```

Puedes ver:
- Cuántas imágenes ya has usado
- Cuántas están disponibles para este tema
- Si se está quedando sin opciones

### ✅ Optimización automática
- Imágenes con dimensiones ideales para SEO (1200x630)
- Formato landscape
- Crop automático centrado

## Limitaciones y soluciones

### ⚠️ Limitación 1: Agotamiento de imágenes

**Problema:** Si tienes 100 artículos y solo hay 30 imágenes disponibles en Unsplash para un tema, eventualmente se repetirán.

**Solución implementada:**
1. El workflow muestra un warning cuando no hay imágenes disponibles
2. Busca con 30 resultados (más que el workflow original)
3. Usa keywords específicos para encontrar imágenes variadas

**Solución adicional (manual):**
- Revisar el campo `usedImagesCount` periódicamente
- Si es alto (>80% de las imágenes disponibles), puedes:
  - Cambiar los temas para tener más variedad
  - Usar otras fuentes (Pexels, Pixabay)
  - Subir imágenes propias

### ⚠️ Limitación 2: API rate limits

**Unsplash Free Tier:**
- 50 requests/hora
- 5000 requests/mes

**Si publicas cada 3 días:**
- ~10 publicaciones/mes
- Muy por debajo del límite

## Configuración

### 1. Credenciales necesarias

Mismo setup que el workflow original:

```env
# .env o n8n credentials
ANTHROPIC_API_KEY=sk-ant-...
UNSPLASH_ACCESS_KEY=your_unsplash_key
BLOG_API_KEY=your_blog_api_key
GITHUB_TOKEN=ghp_...
```

### 2. Importar workflow

1. En n8n: **Workflows → Import from File**
2. Selecciona `n8n-workflow-cakely-blog-ai-topics-smart-images.json`
3. Actualiza los IDs de credenciales:
   - `YOUR_ANTHROPIC_API_CREDENTIAL_ID`
   - `YOUR_UNSPLASH_API_KEY_CREDENTIAL_ID`
   - `YOUR_BLOG_API_KEY_CREDENTIAL_ID`
   - `YOUR_GITHUB_API_CREDENTIAL_ID`

### 3. Testing

Antes de activar el schedule, prueba manualmente:

1. Click en "Execute Workflow"
2. Revisa el output de cada nodo
3. Verifica especialmente:
   - `Extract Published Data`: ¿Detecta las imágenes usadas?
   - `Generate Image Keywords`: ¿Los keywords tienen sentido?
   - `Select Unused Image`: ¿Filtra correctamente?

## Monitoreo

### Métricas clave

1. **Tasa de imágenes únicas**
   ```
   availableImages / totalResults
   ```
   - Si es <30%: Considera cambiar keywords o fuentes

2. **Imágenes usadas totales**
   ```
   usedImagesCount
   ```
   - Si es >100: Excelente, el sistema está funcionando
   - Si es <10: Aún hay margen amplio

3. **Warnings**
   - Si ves `"warning": "No unused images found"`, revisa la variedad de temas

## Migración desde workflow original

Si ya tienes el workflow `n8n-workflow-cakely-blog-ai-topics.json`:

1. **Exporta tu configuración actual** (por si acaso)
2. **Importa el nuevo workflow**
3. **Actualiza credenciales**
4. **Desactiva el workflow viejo**
5. **Activa el nuevo**

**No hay cambios en la estructura de datos del blog**, así que no necesitas migrar nada en la base de datos.

## Preguntas frecuentes

### ¿Qué pasa si Unsplash no tiene imágenes para un tema?

El nodo `Select Unused Image` usará la primera imagen disponible y añadirá un warning. Puedes revisar los logs y cambiar manualmente la imagen si es necesario.

### ¿Puedo usar otras fuentes de imágenes?

Sí, puedes reemplazar el nodo "Search Unsplash" por:
- Pexels API
- Pixabay API
- Tu propia CDN

Solo asegúrate de que el output tenga la estructura esperada por `Select Unused Image`.

### ¿Cómo reseteo las imágenes usadas?

Si quieres permitir que se reutilicen imágenes:

```sql
-- En tu base de datos PostgreSQL
UPDATE "BlogPost" SET "coverImage" = NULL;
```

⚠️ Esto eliminará todas las imágenes. Usa con cuidado.

### ¿Puedo ver qué imágenes están disponibles?

Sí, ejecuta el workflow manualmente y revisa el output del nodo `Search Unsplash`. Verás todas las imágenes encontradas antes del filtrado.

## Conclusión

El sistema de Smart Images añade:
- ✅ **Unicidad**: Nunca repite imágenes
- ✅ **Relevancia**: Keywords específicos del tema
- ✅ **Transparencia**: Estadísticas de uso
- ✅ **Bajo costo**: +$0.001 por post
- ✅ **Automático**: Sin intervención manual

**Recomendación:** Úsalo si publicas >10 artículos/mes y te preocupa la variedad visual del blog.
