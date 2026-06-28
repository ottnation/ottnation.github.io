import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts({ includeDrafts: true }).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        type: "article",
        title: post.title,
        description: post.excerpt,
        images: post.image ? [post.image] : undefined,
        publishedTime: post.date,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (post.draft) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        &larr; Back to all posts
      </Link>

      <header className="mt-8 mb-10">
        <time className="text-sm text-muted">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="font-serif text-3xl sm:text-4xl tracking-tight mt-2">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg text-muted mt-4 leading-relaxed">
            {post.excerpt}
          </p>
        )}
      </header>

      {post.image && (
        <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden rounded-md bg-border">
          <Image src={post.image} alt="" fill className="object-cover" />
        </div>
      )}

      <div
        className="prose-ottn prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
