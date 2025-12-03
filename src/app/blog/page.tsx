import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { MobileMenu } from "@/components/MobileMenu";

type BlogPostPreview = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: Date | null;
  tags: string[];
};

async function getBlogPosts(tag?: string): Promise<BlogPostPreview[]> {
  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
      ...(tag && { tags: { has: tag } })
    },
    orderBy: { publishedAt: 'desc' },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      publishedAt: true,
      tags: true,
    },
  });
  return posts;
}

export const metadata: Metadata = {
  title: 'Blog - Consejos y novedades para pastelerías | Cakely',
  description: 'Descubre consejos profesionales, mejores prácticas y novedades para gestionar tu pastelería de forma eficiente. Artículos sobre pedidos, clientes y crecimiento.',
  keywords: ['blog pastelería', 'consejos repostería', 'gestión pastelería', 'CRM pastelería', 'pedidos pastelería'],
  openGraph: {
    title: 'Blog Cakely - Consejos para pastelerías',
    description: 'Consejos, novedades y mejores prácticas para gestionar tu pastelería artesanal',
    url: `${process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es'}/blog`,
    siteName: 'Cakely',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Cakely - Consejos para pastelerías',
    description: 'Consejos, novedades y mejores prácticas para gestionar tu pastelería artesanal',
    creator: '@cakely_app',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es'}/blog`,
  },
};

// Revalidar cada 60 segundos (ISR - Incremental Static Regeneration)
export const revalidate = 60;

async function getAllTags(): Promise<string[]> {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    select: { tags: true },
  });

  const allTags = posts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags));
  return uniqueTags.sort();
}

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ tag?: string }>
}) {
  const params = await searchParams;
  const selectedTag = params.tag;
  const posts = await getBlogPosts(selectedTag);
  const allTags = await getAllTags();
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

  // JSON-LD para la página del blog
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Cakely',
    description: 'Consejos y novedades para gestionar tu pastelería',
    url: `${baseUrl}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Cakely',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo.png`,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* JSON-LD para Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl">
            <Image
              src="/img/logo.webp"
              alt="Logo Cakely"
              width={80}
              height={80}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Inicio
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow pt-20">
        <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
                <span className="text-gray-900">Blog de</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Cakely
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
                Consejos, novedades y mejores prácticas para gestionar tu pastelería
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {allTags.length > 0 && (
              <div className="max-w-7xl mx-auto mb-12">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-gray-600 font-medium">Filtrar por categoría:</span>
                  <Link href="/blog">
                    <Badge
                      variant={!selectedTag ? "default" : "outline"}
                      className="cursor-pointer"
                    >
                      Todas
                    </Badge>
                  </Link>
                  {allTags.map((tag) => (
                    <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <Badge
                        variant={selectedTag === tag ? "default" : "outline"}
                        className="cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">
                  {selectedTag
                    ? `No hay artículos con la categoría "${selectedTag}"`
                    : 'Aún no hay artículos publicados. ¡Pronto habrá contenido nuevo!'
                  }
                </p>
                {selectedTag && (
                  <Link href="/blog" className="text-emerald-600 hover:text-emerald-700 font-semibold mt-4 inline-block">
                    Ver todos los artículos
                  </Link>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 rounded-2xl overflow-hidden h-full">
                      {post.coverImage && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })
                            : 'Sin fecha'}
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {post.title}
                        </CardTitle>
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        {post.excerpt && (
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="flex items-center text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Image
                src="/img/logo-white.webp"
                alt="Logo Cakely"
                width={80}
                height={80}
              />
            </div>
            <p className="text-gray-400 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
              La revolución digital que tu pastelería necesitaba.
            </p>
            <p className="text-gray-500">
              © {new Date().getFullYear()} Cakely. Hecho con ❤️ para
              profesionales de la repostería.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
