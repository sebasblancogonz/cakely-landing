# Cakely Landing Page

Landing page para Cakely, la plataforma de gestión para pastelerías artesanales.

## Características

- Landing page moderna con Next.js 15
- Sistema de blog integrado con PostgreSQL
- API REST para publicación automática de contenido
- Diseño responsive con Tailwind CSS
- Componentes UI con shadcn/ui

## Estructura del Proyecto

```
cakely-landing/
├── src/
│   ├── app/
│   │   ├── api/blog/          # Endpoints de la API del blog
│   │   ├── blog/              # Páginas del blog
│   │   └── page.tsx           # Landing page principal
│   ├── components/ui/         # Componentes UI
│   └── lib/
│       └── prisma.ts          # Cliente de Prisma
├── prisma/
│   └── schema.prisma          # Esquema de la base de datos
├── scripts/                   # Scripts para publicar en el blog
└── docs/
    ├── BLOG_SETUP.md         # Configuración del blog
    └── BLOG_DEPLOYMENT.md    # Guía de despliegue
```

## Comenzando

### Requisitos previos

- Node.js 18+
- PostgreSQL 14+
- pnpm (recomendado)

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/cakely-landing.git
cd cakely-landing
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.local.example .env.local
# Edita .env.local con tu configuración
```

4. Configura la base de datos:
```bash
# Genera el cliente de Prisma
npx prisma generate

# Ejecuta las migraciones
npx prisma db push
```

5. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

Abre [http://localhost:3001](http://localhost:3001) en tu navegador.

## Blog

El proyecto incluye un sistema de blog completo con:

- ✅ API REST para crear y obtener posts
- ✅ Autenticación mediante API Key
- ✅ Generación automática de slugs
- ✅ Soporte para imágenes de portada
- ✅ Páginas dinámicas para posts
- ✅ Paginación
- ✅ Filtrado por estado de publicación

### SEO Optimizado

El blog está completamente optimizado para SEO:

- ✅ **Metadatos completos**: Title, description, keywords
- ✅ **Open Graph**: Optimizado para compartir en redes sociales
- ✅ **Twitter Cards**: Vista previa rica en Twitter
- ✅ **JSON-LD**: Schema.org para rich snippets en Google
- ✅ **Sitemap dinámico**: Generado automáticamente con todos los posts
- ✅ **Canonical URLs**: Evita contenido duplicado
- ✅ **Robots meta tags**: Configuración SEO-friendly
- ✅ **Estructura semántica**: HTML optimizado para crawlers

Para guía completa de SEO, consulta [SEO_GUIDE_FOR_AI.md](./SEO_GUIDE_FOR_AI.md)

### Configuración del Blog

Para configurar el blog, consulta [BLOG_SETUP.md](./BLOG_SETUP.md)

### Publicar contenido

#### Opción 1: Scripts manuales

```bash
# Python
python scripts/publish-blog-post.py

# Node.js
node scripts/publish-blog-post.js
```

#### Opción 2: Workflow n8n (Recomendado para automatización)

Importa el workflow de n8n para publicación automática con IA:

1. Importa `n8n-workflow-cakely-blog.json` en tu instancia de n8n
2. Configura las credenciales (OpenAI, Unsplash, Cakely API)
3. Ajusta la frecuencia de publicación
4. ¡Listo! El agente publicará automáticamente

**Workflows disponibles:**
- `n8n-workflow-cakely-blog.json` - Completo con imágenes y notificaciones
- `n8n-workflow-cakely-blog-simple.json` - Versión simplificada para empezar
- `n8n-workflow-cakely-blog-with-seo-context.json` - ⭐ **Recomendado** - Incluye contexto SEO completo

**Guías:**
- [N8N_WORKFLOW_GUIDE.md](./N8N_WORKFLOW_GUIDE.md) - Configuración completa
- [N8N_SEO_CONTEXT_GUIDE.md](./N8N_SEO_CONTEXT_GUIDE.md) - Cómo pasar contexto SEO al agente

Para más información sobre el despliegue en producción, consulta [BLOG_DEPLOYMENT.md](./BLOG_DEPLOYMENT.md)

## API del Blog

### Crear un post

```bash
POST /api/blog/posts
Headers:
  Content-Type: application/json
  x-api-key: tu-api-key

Body:
{
  "title": "Título del post",
  "content": "<p>Contenido HTML</p>",
  "excerpt": "Resumen breve",
  "coverImage": "https://ejemplo.com/imagen.jpg",
  "published": true
}
```

### Obtener posts

```bash
GET /api/blog/posts?published=true&limit=10&offset=0
```

### Obtener un post específico

```bash
GET /api/blog/posts/[slug]
```

## Tecnologías

- [Next.js 15](https://nextjs.org/) - Framework React
- [Prisma](https://www.prisma.io/) - ORM para PostgreSQL
- [Tailwind CSS](https://tailwindcss.com/) - Estilos
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [PostgreSQL](https://www.postgresql.org/) - Base de datos

## Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega

Para más detalles, consulta [BLOG_DEPLOYMENT.md](./BLOG_DEPLOYMENT.md)

## Licencia

© 2025 Cakely. Todos los derechos reservados.
