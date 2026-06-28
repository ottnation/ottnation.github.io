const social = [
  { href: "https://twitter.com/ottnation", label: "Twitter" },
  { href: "https://github.com/ottnation", label: "GitHub" },
  { href: "https://youtube.com/UC7GLlnhxU8YXuyXOaa-dl-Q", label: "YouTube" },
  { href: "mailto:ottnation@gmail.com", label: "Email" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} OTT Nation</p>
        <nav className="flex items-center gap-5">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              rel="nofollow noopener"
              className="hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
