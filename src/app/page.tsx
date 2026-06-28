import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import Avatar from "@/components/Avatar";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <header className="mb-12 pb-8 border-b border-border text-center">
        <h1 className="font-serif text-5xl tracking-tight mb-3">OTT Nation</h1>
        <p className="text-muted text-lg">
          Exploring Our Brave New Connected World
        </p>
      </header>

      <div className="divide-y divide-border">
        {posts.map((post) => (
          <article key={post.slug} className="py-8 first:pt-0">
            <Link href={`/blog/${post.slug}`} className="group block">
              {post.image && (
                <div className="relative w-full aspect-[1.91/1] mb-4 overflow-hidden rounded-md bg-border">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="font-serif font-semibold text-2xl leading-snug mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-muted leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center gap-2 text-sm text-muted">
                <Avatar size={20} />
                <span>OTT Nation</span>
                <span aria-hidden="true">&middot;</span>
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
