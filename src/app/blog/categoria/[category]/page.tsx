import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { MobileMenu } from "@/components/MobileMenu";
import {
  getCategoryFromSlug,
  getCategoryLabel,
  getCategoryDescription,
  getAllCategories,
} from "@/lib/categories";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = getAllCategories();

  return categories.map((category) => ({
    category: category.slug,
  }));
}

async function getCategoryPosts(categorySlug: string) {
  const category = getCategoryFromSlug(categorySlug);

  if (!category) {
    return null;
  }

  const posts = await prisma.blogPost.findMany({
    where: {
      published: true,
      category: category,
    },
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

  return { posts, category };
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryFromSlug(categorySlug);
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || "https://cakely.es";

  if (!category) {
    return {
      title: "Categoría no encontrada - Cakely Blog",
    };
  }

  const label = getCategoryLabel(category);
  const description = getCategoryDescription(category);

  return {
    title: `${label} - Cakely Blog`,
    description,
    openGraph: {
      title: `${label} - Cakely Blog`,
      description,
      url: `${baseUrl}/blog/categoria/${categorySlug}`,
      siteName: "Cakely",
      locale: "es_ES",
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}/blog/categoria/${categorySlug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const result = await getCategoryPosts(categorySlug);
  const categoriesWithCounts = await getCategoriesWithCounts();

  if (!result) {
    notFound();
  }

  const { posts, category } = result;
  const categoryLabel = getCategoryLabel(category);
  const categoryDescription = getCategoryDescription(category);

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
              href="/blog"
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Blog
            </Link>
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
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {categoryLabel}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {categoryDescription}
              </p>

              {/* Navegación entre categorías */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-300 pb-1"
                >
                  Todos los artículos
                </Link>
                {categoriesWithCounts.map((cat) => {
                  const isActive = cat.value === category;
                  return (
                    <Link
                      key={cat.value}
                      href={`/blog/categoria/${cat.slug}`}
                      className={`transition-colors border-b-2 pb-1 ${
                        isActive
                          ? "text-emerald-600 font-medium border-emerald-600"
                          : "text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300"
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center py-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Aún no hay artículos en esta categoría
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  ¡Vuelve pronto para descubrir nuevo contenido!
                </p>
                <Link
                  href="/blog"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  Ver todos los artículos
                </Link>
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

                      <div className="text-sm text-gray-500 mb-2">
                        <time dateTime={post.publishedAt?.toISOString()}>
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                            : "Sin fecha"}
                        </time>
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
