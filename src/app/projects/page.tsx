import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "OTT Nation Projects",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl tracking-tight mb-6">Projects</h1>
      <p className="text-muted text-lg italic">Coming soon.</p>
    </div>
  );
}
