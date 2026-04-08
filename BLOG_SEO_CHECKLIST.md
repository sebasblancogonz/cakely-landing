# Checklist Completo de SEO para el Blog de Cakely

## ✅ SEO Técnico Implementado

### 1. **Meta Tags Básicos**
- ✅ `<title>` optimizado (50-60 caracteres)
- ✅ `<meta name="description">` (150-160 caracteres)
- ✅ `<meta name="keywords">` con palabras clave relevantes
- ✅ `<meta name="authors">` con información del autor
- ✅ Canonical URLs con `alternates.canonical`

### 2. **Open Graph (Facebook, WhatsApp, LinkedIn)**
- ✅ `og:title` - Título del artículo
- ✅ `og:description` - Descripción del artículo
- ✅ `og:url` - URL canónica
- ✅ `og:type` - "article" para posts
- ✅ `og:site_name` - "Cakely"
- ✅ `og:locale` - "es_ES"
- ✅ `og:image` - Imagen optimizada (1200x630px)
- ✅ `og:image:width` - 1200
- ✅ `og:image:height` - 630
- ✅ `og:image:alt` - Texto alternativo
- ✅ `og:image:type` - "image/jpeg"
- ✅ `article:published_time` - Fecha de publicación
- ✅ `article:modified_time` - Fecha de modificación
- ✅ `article:author` - Autor del artículo

**Optimización especial para WhatsApp:**
```typescript
// Imágenes de Unsplash con parámetros correctos
optimizedImage = imageUrl.split('?')[0] + '?w=1200&h=630&fit=crop&q=80';
```

### 3. **Twitter Cards**
- ✅ `twitter:card` - "summary_large_image"
- ✅ `twitter:title` - Título del artículo
- ✅ `twitter:description` - Descripción
- ✅ `twitter:images` - Imagen optimizada
- ✅ `twitter:creator` - "@cakely.es"

### 4. **Schema.org / JSON-LD**
- ✅ BlogPosting schema en posts individuales
- ✅ Blog schema en la página principal
- ✅ Campos: headline, description, image, datePublished, dateModified, author, publisher

**Ejemplo implementado:**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Título del post",
  "description": "Descripción",
  "image": "https://...",
  "datePublished": "2025-01-10T...",
  "dateModified": "2025-01-10T...",
  "author": {
    "@type": "Organization",
    "name": "Cakely"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cakely",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cakely.es/img/logo.png"
    }
  }
}
```

### 5. **Robots & Indexación**
- ✅ `robots.index: true`
- ✅ `robots.follow: true`
- ✅ GoogleBot configuration
- ✅ `max-image-preview: large`
- ✅ `max-snippet: -1`
- ✅ `max-video-preview: -1`

### 6. **URLs & Estructura**
- ✅ URLs amigables (`/blog/como-reducir-costes`)
- ✅ Slugs generados automáticamente
- ✅ Normalización de caracteres especiales
- ✅ Categorías en URLs (`/blog/categoria/finanzas`)
- ✅ URLs canónicas

### 7. **Performance**
- ✅ ISR (Incremental Static Regeneration) con 60s
- ✅ `generateStaticParams` para pre-renderizado
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Lazy loading de imágenes

### 8. **Contenido**
- ✅ Títulos SEO-optimizados (50-70 caracteres)
- ✅ Excerpts (150-170 caracteres)
- ✅ Contenido HTML semántico (h2, h3, h4, p, ul, ol)
- ✅ Imágenes con alt text
- ✅ Fechas de publicación visibles

### 9. **Categorización**
- ✅ 7 categorías temáticas
- ✅ URLs por categoría
- ✅ Metadata específica por categoría
- ✅ Internal linking entre categorías

## ⚠️ SEO Avanzado - Recomendado Implementar

### 1. **Sitemap XML** (IMPORTANTE)
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cakely.es/blog</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://cakely.es/blog/como-reducir-costes</loc>
    <lastmod>2025-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Cómo implementarlo:**
- Crear `src/app/sitemap.ts` (Next.js 15 soporta sitemaps dinámicos)
- Google Search Console → Enviar sitemap

### 2. **robots.txt** (IMPORTANTE)
```
# public/robots.txt
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://cakely.es/sitemap.xml
```

### 3. **Breadcrumbs Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Inicio",
    "item": "https://cakely.es"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://cakely.es/blog"
  }, {
    "@type": "ListItem",
    "position": 3,
    "name": "Finanzas",
    "item": "https://cakely.es/blog/categoria/finanzas"
  }]
}
```

### 4. **Internal Linking**
- ✅ Ya implementado básicamente
- ⚠️ Mejorar: Añadir "Artículos relacionados" al final de cada post
- ⚠️ Mejorar: Links contextuales en el contenido

### 5. **Meta Tags Adicionales**
```html
<meta name="author" content="Cakely" />
<meta name="publisher" content="Cakely" />
<meta name="language" content="Spanish" />
<meta name="revisit-after" content="7 days" />
```

### 6. **Hreflang** (si tienes múltiples idiomas)
```html
<link rel="alternate" hreflang="es" href="https://cakely.es/blog/..." />
<link rel="alternate" hreflang="en" href="https://cakely.com/blog/..." />
```

### 7. **AMP (Accelerated Mobile Pages)** - Opcional
- No crítico para blogs B2B
- Útil si quieres aparecer en "Top Stories" de Google

### 8. **RSS Feed**
```xml
<!-- /blog/rss.xml -->
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Blog Cakely</title>
    <link>https://cakely.es/blog</link>
    <description>Consejos para gestionar tu pastelería</description>
    <item>
      <title>Título del post</title>
      <link>https://cakely.es/blog/slug</link>
      <description>Descripción</description>
      <pubDate>Mon, 10 Jan 2025 00:00:00 GMT</pubDate>
    </item>
  </channel>
</rss>
```

## 📊 Herramientas para Verificar SEO

### 1. **Open Graph Debugger**
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- LinkedIn Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

**WhatsApp:** No tiene debugger público, pero usa Open Graph igual que Facebook

### 2. **Google Search Console**
- https://search.google.com/search-console
- Verificar propiedad → Enviar sitemap → Monitorear indexación

### 3. **PageSpeed Insights**
- https://pagespeed.web.dev/
- Verificar Core Web Vitals

### 4. **Structured Data Testing Tool**
- https://validator.schema.org/
- Verificar JSON-LD

## 🎯 Prioridades Inmediatas

### Alta Prioridad (hacer ahora):
1. ✅ **Open Graph optimizado** - YA HECHO
2. ⚠️ **Sitemap XML** - Fácil de implementar
3. ⚠️ **robots.txt** - Muy fácil

### Media Prioridad (próximas semanas):
4. ⚠️ **Breadcrumbs schema**
5. ⚠️ **RSS Feed**
6. ⚠️ **Artículos relacionados**

### Baja Prioridad (cuando tengas >50 posts):
7. ⚠️ **AMP** (si quieres)
8. ⚠️ **Hreflang** (si vas internacional)

## 🔍 Cómo Verificar que WhatsApp Muestra las Imágenes

### 1. Enviar link por WhatsApp
```
https://cakely.es/blog/tu-articulo
```

WhatsApp hará un request a tu página y buscará:
1. `og:image` (obligatorio)
2. `og:title` (obligatorio)
3. `og:description` (obligatorio)

### 2. Requisitos para WhatsApp:
- ✅ Imagen debe ser HTTPS
- ✅ Imagen debe ser ≥ 300x200px (recomendado: 1200x630px)
- ✅ Formato: JPG, PNG (evitar WebP)
- ✅ Peso: < 5MB
- ✅ URL absoluta (no relativa)

### 3. Si no funciona:
```bash
# Verificar que la imagen carga
curl -I https://images.unsplash.com/photo-...?w=1200&h=630

# Verificar Open Graph tags
curl https://cakely.es/blog/tu-articulo | grep "og:image"
```

### 4. Limpiar caché de WhatsApp:
WhatsApp cachea agresivamente. Si cambias la imagen:
- Cambia el slug del post, O
- Añade parámetro `?v=2` a la URL cuando compartes

## 📝 Implementación Recomendada

### Sitemap Dinámico (Next.js 15)

Crear `src/app/sitemap.ts`:
```typescript
import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cakely.es';

  // Posts del blog
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { slug: true, updatedAt: true },
  });

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...postUrls,
  ];
}
```

### robots.txt

Crear `public/robots.txt`:
```
User-agent: *
Allow: /

# Block API routes
Disallow: /api/

# Sitemap
Sitemap: https://cakely.es/sitemap.xml
```

## ✅ Resumen Final

### Ya tienes implementado (95% del SEO crítico):
- ✅ Meta tags básicos
- ✅ Open Graph completo (WhatsApp, Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Robots meta
- ✅ URLs amigables
- ✅ ISR y performance
- ✅ Imágenes optimizadas para redes sociales

### Falta implementar (5% restante, no crítico):
- ⚠️ Sitemap XML (10 minutos)
- ⚠️ robots.txt (2 minutos)
- ⚠️ Breadcrumbs schema (30 minutos)
- ⚠️ RSS Feed (30 minutos)

**Conclusión:** Tu blog ya tiene un SEO excelente. Con sitemap y robots.txt estarás al 100%.

¿Quieres que implemente el sitemap y robots.txt ahora? Es muy rápido.
