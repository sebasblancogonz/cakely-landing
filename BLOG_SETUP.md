# Configuración del Blog de Cakely

Este documento describe cómo configurar y usar el blog de Cakely.

## Configuración de la Base de Datos

### 1. Configurar PostgreSQL

Actualiza el archivo `.env.local` con tu conexión a PostgreSQL:

```env
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/cakely_blog?schema=public"
BLOG_API_KEY="tu-api-key-secreta-aqui"
```

### 2. Ejecutar las migraciones de Prisma

```bash
# Generar el cliente de Prisma
npx prisma generate

# Crear la base de datos y ejecutar las migraciones
npx prisma db push

# O si prefieres usar migraciones
npx prisma migrate dev --name init
```

## Uso de la API

### Crear un Post (POST)

Tu agente de IA puede publicar contenido usando este endpoint:

**Endpoint:** `POST /api/blog/posts`

**Headers:**
```
Content-Type: application/json
x-api-key: tu-api-key-secreta-aqui
```

**Body:**
```json
{
  "title": "Título del Post",
  "content": "<p>Contenido HTML del post</p>",
  "excerpt": "Breve descripción del post (opcional)",
  "coverImage": "https://ejemplo.com/imagen.jpg (opcional)",
  "published": true
}
```

**Ejemplo con curl:**
```bash
curl -X POST http://localhost:3001/api/blog/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: tu-api-key-secreta-aqui" \
  -d '{
    "title": "Mi primer post",
    "content": "<p>Este es el contenido de mi post en HTML</p>",
    "excerpt": "Una breve descripción",
    "published": true
  }'
```

**Respuesta exitosa (201):**
```json
{
  "success": true,
  "post": {
    "id": "clxxx...",
    "title": "Mi primer post",
    "slug": "mi-primer-post",
    "published": true,
    "publishedAt": "2025-12-01T...",
    "url": "http://localhost:3001/blog/mi-primer-post"
  }
}
```

### Obtener Posts (GET)

**Endpoint:** `GET /api/blog/posts`

**Parámetros opcionales:**
- `published=true|false` - Filtrar por estado de publicación
- `limit=10` - Número de posts por página (default: 10)
- `offset=0` - Offset para paginación (default: 0)

**Ejemplo:**
```bash
curl http://localhost:3001/api/blog/posts?published=true&limit=5
```

### Obtener un Post específico (GET)

**Endpoint:** `GET /api/blog/posts/[slug]`

**Ejemplo:**
```bash
curl http://localhost:3001/api/blog/posts/mi-primer-post
```

## Ejemplo de integración con Agente de IA

```python
import requests
import os

API_URL = "http://localhost:3001/api/blog/posts"
API_KEY = os.getenv("BLOG_API_KEY")

def publish_blog_post(title, content, excerpt=None, cover_image=None):
    headers = {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
    }

    data = {
        "title": title,
        "content": content,
        "excerpt": excerpt,
        "coverImage": cover_image,
        "published": True
    }

    response = requests.post(API_URL, json=data, headers=headers)

    if response.status_code == 201:
        result = response.json()
        print(f"Post publicado exitosamente: {result['post']['url']}")
        return result
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None

# Ejemplo de uso
publish_blog_post(
    title="Cómo gestionar pedidos eficientemente",
    content="<h2>Introducción</h2><p>En este artículo...</p>",
    excerpt="Aprende las mejores prácticas para gestionar pedidos"
)
```

## Estructura del Blog

- **Página principal del blog:** `/blog`
- **Posts individuales:** `/blog/[slug]`
- **API endpoints:** `/api/blog/posts`

## Modelo de Datos

```prisma
model BlogPost {
  id          String   @id @default(cuid())
  title       String                    // Título del post
  slug        String   @unique          // URL amigable (generada automáticamente)
  content     String   @db.Text         // Contenido HTML
  excerpt     String?  @db.Text         // Resumen opcional
  coverImage  String?                   // URL de imagen de portada
  published   Boolean  @default(false)  // Estado de publicación
  publishedAt DateTime?                 // Fecha de publicación
  createdAt   DateTime @default(now())  // Fecha de creación
  updatedAt   DateTime @updatedAt       // Última actualización
}
```

## Notas de Seguridad

1. **API Key:** Mantén tu `BLOG_API_KEY` en secreto y nunca la compartas en repositorios públicos
2. **HTTPS:** En producción, usa siempre HTTPS para las llamadas a la API
3. **Validación:** El endpoint valida automáticamente que el título y contenido estén presentes
4. **Slugs únicos:** El sistema genera automáticamente slugs únicos basados en el título

## Troubleshooting

### Error: "Unauthorized - Invalid API Key"
Verifica que el header `x-api-key` esté configurado correctamente y coincida con `BLOG_API_KEY` en `.env.local`

### Error: "A post with this title already exists"
El slug generado del título ya existe. Cambia el título ligeramente para generar un slug único.

### Error de conexión a la base de datos
Verifica que:
1. PostgreSQL esté ejecutándose
2. `DATABASE_URL` en `.env.local` sea correcta
3. La base de datos exista y sea accesible
