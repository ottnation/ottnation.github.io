import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-3">
          OTT Nation
        </h1>
        <p className="text-muted text-lg">
          Exploring Our Brave New Connected World
        </p>
      </header>

      <div className="space-y-14">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              {post.image && (
                <div className="relative w-full aspect-[16/9] mb-5 overflow-hidden rounded-md bg-border">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <time className="text-sm text-muted">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="font-serif text-2xl mt-1 mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
