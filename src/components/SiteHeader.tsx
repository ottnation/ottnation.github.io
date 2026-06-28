import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Avatar size={32} />
          <span className="font-serif text-lg tracking-tight">OTT Nation</span>
        </Link>
        <nav className="flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
