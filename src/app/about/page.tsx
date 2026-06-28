import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About OTT Nation",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl tracking-tight mb-10">About</h1>

      <div className="relative w-full sm:w-64 aspect-square float-none sm:float-left sm:mr-8 mb-6 overflow-hidden rounded-md bg-border">
        <Image src="/images/blog_cover_small.jpg" alt="" fill className="object-cover" />
      </div>

      <p className="text-lg leading-relaxed mb-6">
        <a
          href="https://www.ottnation.com"
          className="text-accent hover:underline"
        >
          OTT Nation
        </a>{" "}
        is dedicated to exploring how ubiquitous connectivity, low cost
        computing power, and exponential growth in data collection is
        changing the world we live in &mdash; including the way we interact
        with others, consume and create content, and shape and perceive the
        world around us.
      </p>

      <div className="border-t border-border pt-8 mt-10">
        <h2 className="font-serif text-2xl mb-4">
          Why &ldquo;OTT Nation&rdquo;?
        </h2>
        <p className="text-muted leading-relaxed">
          The &ldquo;OTT&rdquo; in <em>OTT Nation</em>{" "}
          refers to the &ldquo;over the top&rdquo; delivery of data and
          content via the Internet (be it audiovisual content, sensor data,
          or personal communications), free from the control or interference
          of the institutions that provide the communications infrastructure.
          We like to think of the &ldquo;Nation&rdquo; in{" "}
          <em>OTT Nation</em>{" "}
          as referring to a global audience, since we believe that the vast
          majority of people in the world will be &ldquo;online&rdquo; in the
          not-so-distant future.
        </p>
      </div>
    </div>
  );
}
