import Link from "next/link";
import { prisma } from "@/lib/prisma";

// Enlaza los últimos posts desde la home: la página con más autoridad del
// sitio pasa a apuntar directamente a los posts, no solo al índice /blog.
export async function LatestPostsSection() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
    select: { slug: true, title: true, excerpt: true },
  });

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Último del blog
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Ver todos los artículos →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
