import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'
import { getAllCategories, MIN_POSTS_TO_INDEX } from '@/lib/categories'

type BlogPostForSitemap = {
  slug: string;
  updatedAt: Date;
  publishedAt: Date | null;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es'

  // Obtener todos los posts publicados
  const posts: BlogPostForSitemap[] = await prisma.blogPost.findMany({
    where: { published: true },
    select: {
      slug: true,
      updatedAt: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: 'desc' },
  })

  // Conteo y última modificación por categoría
  const categoryStats = await prisma.blogPost.groupBy({
    by: ['category'],
    where: { published: true },
    _count: { id: true },
    _max: { updatedAt: true },
  })

  // La fecha más reciente de todo el blog, para /blog
  const latestPostDate = posts.reduce<Date | undefined>(
    (latest, p) => (!latest || p.updatedAt > latest ? p.updatedAt : latest),
    undefined
  )

  // URLs estáticas — sin lastModified: no sabemos cuándo cambiaron de verdad,
  // y un lastmod siempre-actual hace que Google ignore el campo en todo el sitemap.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/software-para-pastelerias`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software-para-panaderias`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pagina-web-para-pastelerias`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: latestPostDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/precio-real`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad/cookies`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Solo categorías con suficientes posts; el resto va con noindex y no se anuncia
  const categoryPages: MetadataRoute.Sitemap = getAllCategories()
    .map((cat) => {
      const stats = categoryStats.find((s) => s.category === cat.value)
      return { cat, count: stats?._count.id ?? 0, lastModified: stats?._max.updatedAt ?? undefined }
    })
    .filter(({ count }) => count >= MIN_POSTS_TO_INDEX)
    .map(({ cat, lastModified }) => ({
      url: `${baseUrl}/blog/categoria/${cat.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  // URLs dinámicas de los posts del blog
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...blogPages]
}
