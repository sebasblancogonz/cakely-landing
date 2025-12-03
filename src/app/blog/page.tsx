import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { MobileMenu } from "@/components/MobileMenu";
import { getAllCategories, getCategorySlug } from "@/lib/categories";
import { BlogCategory } from "@prisma/client";

type BlogPostPreview = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  category: BlogCategory | null;
  publishedAt: Date | null;
};

async function getBlogPosts(): Promise<BlogPostPreview[]> {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      category: true,
      publishedAt: true,
    },
  });
  return posts;
}

async function getCategoriesWithCounts() {
  const categories = getAllCategories();

  const counts = await prisma.blogPost.groupBy({
    by: ['category'],
    where: { published: true },
    _count: { id: true },
  });

  return categories.map((cat) => ({
    ...cat,
    count: counts.find((c) => c.category === cat.value)?._count.id || 0,
  }));
}

export const metadata: Metadata = {
  title: "Blog - Consejos y novedades para pastelerías | Cakely",
  description:
    "Descubre consejos profesionales, mejores prácticas y novedades para gestionar tu pastelería de forma eficiente. Artículos sobre pedidos, clientes y crecimiento.",
  keywords: [
    "blog pastelería",
    "consejos repostería",
    "gestión pastelería",
    "CRM pastelería",
    "pedidos pastelería",
  ],
  openGraph: {
    title: "Blog Cakely - Consejos para pastelerías",
    description:
      "Consejos, novedades y mejores prácticas para gestionar tu pastelería artesanal",
    url: `${process.env.NEXT_PUBLIC_LANDING_DOMAIN || "https://cakely.es"}/blog`,
    siteName: "Cakely",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Cakely - Consejos para pastelerías",
    description:
      "Consejos, novedades y mejores prácticas para gestionar tu pastelería artesanal",
    creator: "@cakely_app",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_LANDING_DOMAIN || "https://cakely.es"}/blog`,
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categoriesWithCounts = await getCategoriesWithCounts();
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || "https://cakely.es";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Cakely",
    description: "Consejos y novedades para gestionar tu pastelería",
    url: `${baseUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Cakely",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/img/logo.png`,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 font-bold text-2xl">
            <Image src="/img/logo.webp" alt="Logo Cakely" width={80} height={80} />
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
        {/* Hero Section - Simplificado */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Consejos y recursos para gestionar tu pastelería
              </p>

              {/* Categorías como links simples */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/blog"
                  className="text-emerald-600 font-medium border-b-2 border-emerald-600 pb-1"
                >
                  Todos los artículos
                </Link>
                {categoriesWithCounts.map((cat) => (
                  <Link
                    key={cat.value}
                    href={`/blog/categoria/${cat.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-300 pb-1"
                  >
                    {cat.label} ({cat.count})
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid - Sin categorías visibles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-20 max-w-2xl mx-auto">
                <p className="text-xl text-gray-600">
                  Aún no hay artículos publicados. ¡Pronto habrá contenido nuevo!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
                {posts.map((post) => (
                  <article key={post.id} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      {post.coverImage && (
                        <div className="relative h-56 w-full overflow-hidden rounded-lg mb-4">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:opacity-90 transition-opacity"
                          />
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <time dateTime={post.publishedAt?.toISOString()}>
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "Sin fecha"}
                        </time>
                        {post.category && (
                          <>
                            <span>·</span>
                            <span className="text-emerald-600">
                              {getAllCategories().find((c) => c.value === post.category)?.label}
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </Link>
                  </article>
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
              © {new Date().getFullYear()} Cakely. Hecho con ❤️ para profesionales
              de la repostería.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
