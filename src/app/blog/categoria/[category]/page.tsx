import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { MobileMenu } from "@/components/MobileMenu";
import {
  getCategoryFromSlug,
  getCategoryLabel,
  getCategoryDescription,
  getAllCategories,
  getCategorySlug,
} from "@/lib/categories";

export const revalidate = 60;

// Generar rutas estáticas para todas las categorías
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

  if (!result) {
    notFound();
  }

  const { posts, category } = result;
  const categoryLabel = getCategoryLabel(category);
  const categoryDescription = getCategoryDescription(category);
  const allCategories = getAllCategories();

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
        <div className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                {categoryLabel}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {categoryDescription}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {allCategories.map((cat) => (
                  <Link
                    key={cat.value}
                    href={`/blog/categoria/${cat.slug}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      cat.value === category
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {posts.length === 0 ? (
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl text-gray-600 mb-8">
                  Aún no hay artículos en esta categoría. ¡Vuelve pronto!
                </p>
                <Link
                  href="/blog"
                  className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-700 transition-all"
                >
                  Ver todos los artículos
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {post.coverImage && (
                      <div className="relative w-full h-64 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt
                          ? new Date(post.publishedAt).toLocaleDateString(
                              "es-ES",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          : "Sin fecha"}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
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
