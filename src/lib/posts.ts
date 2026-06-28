import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  draft: boolean;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function readSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function readPostMeta(slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    image: data.image ?? "",
    draft: Boolean(data.draft),
  };
}

export function getAllPosts({ includeDrafts = false } = {}): PostMeta[] {
  const posts = readSlugs().map(readPostMeta);
  return posts
    .filter((p) => includeDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return readSlugs();
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "1970-01-01",
    excerpt: data.excerpt ?? "",
    image: data.image ?? "",
    draft: Boolean(data.draft),
    contentHtml: processed.toString(),
  };
}
