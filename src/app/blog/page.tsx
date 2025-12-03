import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { MobileMenu } from "@/components/MobileMenu";
import { getAllCategories, getCategorySlug } from "@/lib/categories";
import { getCategoryIcon, getCategoryColors } from "@/lib/category-icons";
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

  // Últimos 3 posts destacados
  const featuredPosts = posts.slice(0, 3);

  // Posts por categoría (primeros 3 de cada una)
  const postsByCategory = categoriesWithCounts.map((cat) => ({
    ...cat,
    posts: posts.filter((p) => p.category === cat.value).slice(0, 3),
  }));

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
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                <span className="text-gray-900">Blog de</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Cakely
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Consejos profesionales para gestionar tu pastelería con éxito
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categoriesWithCounts.map((cat) => {
                  const Icon = getCategoryIcon(cat.value);
                  const colors = getCategoryColors(cat.value);
                  return (
                    <Link
                      key={cat.value}
                      href={`/blog/categoria/${cat.slug}`}
                      className={`flex items-center gap-2 px-5 py-2.5 ${colors.bg} ${colors.hover} ${colors.text} rounded-full transition-all hover:scale-105 border border-gray-200 shadow-sm`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{cat.label}</span>
                      <span className="text-sm opacity-75">({cat.count})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  Últimos Artículos
                </h2>
                <Link
                  href="#categorias"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Ver por categoría →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {post.coverImage && (
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Sin fecha"}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section id="categorias" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Explora por Categoría
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Encuentra exactamente lo que necesitas para tu pastelería
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {postsByCategory.map((cat) => {
                const Icon = getCategoryIcon(cat.value);
                const colors = getCategoryColors(cat.value);

                return (
                  <div
                    key={cat.value}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <Link href={`/blog/categoria/${cat.slug}`}>
                      <div className={`p-8 ${colors.bg} ${colors.hover} transition-colors`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-4 bg-white rounded-2xl shadow-md ${colors.text}`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <span className={`text-sm font-bold ${colors.text} bg-white px-3 py-1 rounded-full`}>
                            {cat.count} {cat.count === 1 ? 'artículo' : 'artículos'}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">
                          {cat.label}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {cat.description}
                        </p>
                      </div>
                    </Link>

                    {/* Preview de posts */}
                    <div className="p-6 space-y-4">
                      {cat.posts.length > 0 ? (
                        cat.posts.map((post) => (
                          <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="block group"
                          >
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                          </Link>
                        ))
                      ) : (
                        <p className="text-sm text-gray-400 italic">
                          Próximamente contenido nuevo
                        </p>
                      )}

                      {cat.posts.length > 0 && (
                        <Link
                          href={`/blog/categoria/${cat.slug}`}
                          className={`inline-flex items-center text-sm font-semibold ${colors.text} hover:underline mt-2`}
                        >
                          Ver todos →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Posts */}
        {posts.length > 3 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-10">
                Todos los Artículos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
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
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Sin fecha"}
                        {post.category && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className={getCategoryColors(post.category).text}>
                              {getAllCategories().find((c) => c.value === post.category)?.label}
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
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
