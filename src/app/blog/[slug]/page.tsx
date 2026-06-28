import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import Avatar from "@/components/Avatar";

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
    <article className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-muted hover:text-foreground transition-colors"
      >
        &larr; OTT Nation
      </Link>

      <header className="mt-8 mb-8">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl tracking-tight leading-tight">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="font-serif text-xl text-muted mt-4 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center gap-3 mt-8 pb-8 border-b border-border">
          <Avatar size={40} />
          <div>
            <p className="font-medium text-sm">OTT Nation</p>
            <time className="text-sm text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </header>

      {post.image && (
        <div className="relative w-full aspect-[1.91/1] mb-10 overflow-hidden rounded-md bg-border">
          <Image src={post.image} alt="" fill className="object-cover" />
        </div>
      )}

      <div
        className="prose-ottn prose prose-lg font-serif max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
