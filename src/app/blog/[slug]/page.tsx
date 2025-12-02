import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

async function getBlogPost(slug: string) {
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
  });

  if (!post) {
    return null;
  }

  return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

  if (!post) {
    return {
      title: 'Post no encontrado - Cakely Blog',
    };
  }

  const description = post.excerpt || post.title;
  const publishedTime = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  const modifiedTime = new Date(post.updatedAt).toISOString();

  return {
    title: `${post.title} - Cakely Blog`,
    description,
    authors: [{ name: 'Cakely', url: baseUrl }],
    keywords: ['pastelería', 'repostería', 'gestión de pedidos', 'CRM pastelería', 'cakely'],
    openGraph: {
      title: post.title,
      description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Cakely',
      locale: 'es_ES',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Cakely'],
      images: post.coverImage ? [{
        url: post.coverImage,
        width: 1200,
        height: 630,
        alt: post.title,
      }] : [{
        url: `${baseUrl}/img/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Cakely - Gestión para pastelerías',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : [`${baseUrl}/img/logo.png`],
      creator: '@cakely_app',
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  const baseUrl = process.env.NEXT_PUBLIC_LANDING_DOMAIN || 'https://cakely.es';

  if (!post) {
    notFound();
  }

  // JSON-LD para SEO (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.coverImage || `${baseUrl}/img/logo.png`,
    datePublished: post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Cakely',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo.png`,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cakely',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${slug}`,
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
          <nav className="flex items-center gap-8">
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
        </div>
      </header>

      <main className="flex-grow pt-20">
        <article className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link href="/blog">
                <Button
                  variant="ghost"
                  className="mb-8 text-gray-600 hover:text-emerald-600"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver al blog
                </Button>
              </Link>

              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : 'Sin fecha'}
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
              </div>

              {post.coverImage && (
                <div className="relative w-full h-96 mb-12 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-16 pt-8 border-t border-gray-200">
                <Link href="/blog">
                  <Button
                    variant="ghost"
                    className="text-gray-600 hover:text-emerald-600"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver al blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
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
