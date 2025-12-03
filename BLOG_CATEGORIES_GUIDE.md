# Guía de Categorías del Blog

## Categorías disponibles

El blog de Cakely utiliza **7 categorías** para organizar el contenido:

| Categoría | Descripción | Ejemplos de artículos |
|-----------|-------------|----------------------|
| **Gestión** | Gestión de pedidos, clientes y operaciones diarias | "Cómo organizar pedidos en temporada alta", "Sistema de gestión de clientes para pastelerías" |
| **Finanzas** | Control de costes, rentabilidad y precios | "Cómo calcular el coste real de tus recetas", "5 estrategias para reducir costes" |
| **Recetas** | Recetas y técnicas de repostería artesanal | "Receta perfecta de macarons franceses", "Técnicas avanzadas de decoración" |
| **Marketing** | Estrategias de marketing y captación de clientes | "Cómo usar Instagram para captar clientes", "Email marketing para pastelerías" |
| **Productividad** | Organización del obrador y mejora de procesos | "7 pasos para optimizar tu obrador", "Cómo reducir tiempos de producción" |
| **Tendencias** | Novedades del sector y tendencias del mercado | "Tendencias de repostería para 2025", "Pasteles veganos: ¿moda o tendencia?" |
| **Casos de Estudio** | Casos de éxito y testimonios de pastelerías | "Cómo duplicamos ventas con Cakely", "Historia de éxito: Pastelería Luna" |

## Valores en la base de datos

Los valores en Prisma son enums con nombres en mayúsculas:

```typescript
enum BlogCategory {
  GESTION          // "Gestión"
  FINANZAS         // "Finanzas"
  RECETAS          // "Recetas"
  MARKETING        // "Marketing"
  PRODUCTIVIDAD    // "Productividad"
  TENDENCIAS       // "Tendencias"
  CASOS_ESTUDIO    // "Casos de Estudio"
}
```

## URLs de categorías

Las URLs usan slugs en minúsculas con guiones:

- `/blog/categoria/gestion`
- `/blog/categoria/finanzas`
- `/blog/categoria/recetas`
- `/blog/categoria/marketing`
- `/blog/categoria/productividad`
- `/blog/categoria/tendencias`
- `/blog/categoria/casos-estudio`

## Cómo funciona

### 1. IA asigna la categoría automáticamente

Cuando n8n ejecuta el workflow, Claude Sonnet lee el `SEO_GUIDE_FOR_AI.json` que contiene las instrucciones de categorías y genera el artículo con el campo `category`:

```json
{
  "title": "Cómo reducir costes en tu pastelería",
  "excerpt": "Descubre 7 estrategias probadas...",
  "content": "<h2>Introducción</h2>...",
  "category": "FINANZAS"  // <- IA elige la categoría más apropiada
}
```

### 2. Workflow envía la categoría a la API

El nodo "Publish to Blog" envía todos los campos, incluyendo `category`:

```javascript
{
  title: "...",
  excerpt: "...",
  content: "...",
  coverImage: "...",
  category: "FINANZAS",  // <- Se envía a la API
  published: true
}
```

### 3. API guarda en la base de datos

La API en `src/app/api/blog/posts/route.ts` recibe el campo y lo guarda:

```typescript
const post = await prisma.blogPost.create({
  data: {
    title,
    slug,
    content,
    excerpt,
    coverImage,
    category,  // <- Se guarda en PostgreSQL
    published: true,
    publishedAt: new Date(),
  },
});
```

### 4. Frontend filtra por categoría

Los usuarios pueden:
- Ver todas las categorías en `/blog` (pills debajo del título)
- Filtrar por categoría en `/blog/categoria/[slug]`
- Ver la categoría de cada post en las cards

## Estructura de archivos

```
src/
├── lib/
│   └── categories.ts              # Utilidades de categorías
├── app/
│   ├── api/blog/posts/
│   │   ├── route.ts              # GET con ?category=FINANZAS
│   │   └── [slug]/route.ts       # PATCH con category
│   └── blog/
│       ├── page.tsx              # Lista todos + pills de categorías
│       ├── [slug]/page.tsx       # Post individual
│       └── categoria/
│           └── [category]/page.tsx  # Filtra por categoría

prisma/
└── schema.prisma                 # Enum BlogCategory + campo category
```

## API Endpoints

### GET /api/blog/posts

Obtener todos los posts (opcionalmente filtrados por categoría):

```bash
# Todos los posts
curl https://cakely.es/api/blog/posts

# Posts de finanzas
curl https://cakely.es/api/blog/posts?category=finanzas

# Posts de marketing
curl https://cakely.es/api/blog/posts?category=marketing
```

### POST /api/blog/posts

Crear un post con categoría:

```bash
curl -X POST https://cakely.es/api/blog/posts \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Cómo reducir costes",
    "excerpt": "Estrategias probadas...",
    "content": "<h2>Introducción</h2>...",
    "coverImage": "https://...",
    "category": "FINANZAS",
    "published": true
  }'
```

### PATCH /api/blog/posts/[slug]

Actualizar la categoría de un post:

```bash
curl -X PATCH https://cakely.es/api/blog/posts/como-reducir-costes \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "PRODUCTIVIDAD"
  }'
```

## SEO Benefits

### 1. Mejor estructura de URLs

Antes:
```
/blog/como-reducir-costes
/blog/organizar-pedidos
/blog/receta-macarons
```

Ahora también:
```
/blog/categoria/finanzas           <- Categoría completa
/blog/categoria/finanzas?page=2    <- Paginación futura
```

### 2. Internal linking automático

Los pills de categorías crean enlaces internos automáticos:
- Cada post enlaza a su categoría
- Cada categoría enlaza a todos sus posts
- Google indexa mejor la relación entre contenidos

### 3. Sitemap organizado

```xml
<url>
  <loc>https://cakely.es/blog/categoria/finanzas</loc>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://cakely.es/blog/categoria/marketing</loc>
  <priority>0.8</priority>
</url>
```

### 4. Breadcrumbs (futuro)

```
Inicio > Blog > Finanzas > Cómo reducir costes
```

## Utilidades disponibles

El archivo `src/lib/categories.ts` proporciona funciones útiles:

```typescript
import {
  getAllCategories,
  getCategoryLabel,
  getCategoryDescription,
  getCategorySlug,
  getCategoryFromSlug,
} from "@/lib/categories";

// Obtener todas las categorías
const categories = getAllCategories();
// [{ value: "GESTION", label: "Gestión", slug: "gestion", ... }, ...]

// Convertir enum a label
getCategoryLabel(BlogCategory.FINANZAS);  // "Finanzas"

// Convertir enum a slug
getCategorySlug(BlogCategory.FINANZAS);  // "finanzas"

// Convertir slug a enum
getCategoryFromSlug("finanzas");  // BlogCategory.FINANZAS

// Obtener descripción
getCategoryDescription(BlogCategory.FINANZAS);
// "Control de costes, rentabilidad y precios"
```

## Estadísticas por categoría

Puedes consultar cuántos posts hay por categoría:

```typescript
import { prisma } from "@/lib/prisma";

const stats = await prisma.blogPost.groupBy({
  by: ['category'],
  where: { published: true },
  _count: { id: true },
});

// Resultado:
// [
//   { category: "FINANZAS", _count: { id: 12 } },
//   { category: "GESTION", _count: { id: 8 } },
//   { category: "MARKETING", _count: { id: 15 } },
//   ...
// ]
```

## Migración de posts existentes

Si tienes posts sin categoría (`category: null`), puedes asignarlas manualmente:

```sql
-- Ver posts sin categoría
SELECT id, title, category FROM "BlogPost" WHERE category IS NULL;

-- Asignar categoría manualmente
UPDATE "BlogPost"
SET category = 'FINANZAS'
WHERE slug = 'como-reducir-costes';

UPDATE "BlogPost"
SET category = 'GESTION'
WHERE slug = 'organizar-pedidos';
```

O puedes usar la API:

```bash
curl -X PATCH https://cakely.es/api/blog/posts/como-reducir-costes \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"category": "FINANZAS"}'
```

## Mejores prácticas

### 1. Una categoría por post
Cada artículo debe tener **exactamente UNA** categoría. Si un tema abarca múltiples áreas, elige la más relevante.

**Ejemplo:**
- "Cómo usar redes sociales para vender más" → **MARKETING** (aunque también podría ser Finanzas, el enfoque principal es marketing)

### 2. Categorías balanceadas
Intenta tener variedad de contenido en todas las categorías:

**Objetivo:** 20-30% de posts por categoría
- ✅ Finanzas: 25%
- ✅ Gestión: 22%
- ✅ Marketing: 20%
- ❌ Recetas: 2% (muy poco)
- ❌ Tendencias: 1% (muy poco)

### 3. Consistencia en categorización
La IA es consistente, pero si asignas categorías manualmente, sigue estos criterios:

- **Gestión**: ¿Habla de procesos diarios, pedidos, clientes?
- **Finanzas**: ¿Habla de dinero, costes, precios, rentabilidad?
- **Recetas**: ¿Es una receta o técnica de repostería?
- **Marketing**: ¿Habla de captar clientes, redes sociales, branding?
- **Productividad**: ¿Habla de optimizar, organizar, eficiencia?
- **Tendencias**: ¿Habla de novedades, futuro, cambios en el sector?
- **Casos de Estudio**: ¿Es un testimonio, caso de éxito, historia real?

## Futuras mejoras

### 1. Tags (después de 100+ posts)
Cuando tengas muchos artículos, puedes agregar tags para filtrado más granular:

```typescript
model BlogPost {
  // ... campos existentes
  tags  String[]  // ["san-valentin", "chocolate", "sin-gluten"]
}
```

### 2. Categorías relacionadas
Mostrar "Artículos relacionados" del mismo categoría al final de cada post.

### 3. Analytics
Trackear qué categorías son más populares:
- Vistas por categoría
- CTR en pills de categorías
- Tiempo de lectura promedio por categoría

### 4. Newsletter por categoría
Permitir a usuarios suscribirse a categorías específicas:
- "Solo quiero recibir artículos de Recetas"
- "Solo Finanzas y Gestión"

## Solución de problemas

### Error: "category: Expected enum value"

**Problema**: Estás enviando un valor que no es uno de los enums válidos.

**Solución**: Asegúrate de usar exactamente estos valores:
```
GESTION, FINANZAS, RECETAS, MARKETING, PRODUCTIVIDAD, TENDENCIAS, CASOS_ESTUDIO
```

### Posts no aparecen en la página de categoría

**Problema**: El post tiene `category: null` o una categoría diferente.

**Solución**: Verifica en la base de datos:
```sql
SELECT slug, category FROM "BlogPost" WHERE slug = 'tu-post';
```

### La IA no está asignando categorías

**Problema**: El `SEO_GUIDE_FOR_AI.json` no se actualizó correctamente.

**Solución**:
1. Verifica que el archivo tenga la sección "categorias"
2. Ejecuta el workflow manualmente
3. Revisa el output del nodo "Parse Article JSON"
4. Si el JSON no tiene `category`, el problema está en la generación de Claude

## Conclusión

El sistema de categorías proporciona:
- ✅ Mejor organización del contenido
- ✅ Mejor SEO (URLs estructuradas, internal linking)
- ✅ Mejor UX (navegación fácil, filtrado)
- ✅ 100% automático (la IA categoriza)
- ✅ Escalable (fácil agregar tags después)

**Próximo paso:** Después de tener 50+ artículos, revisa las estadísticas por categoría y ajusta la frecuencia de publicación para balancear el contenido.
