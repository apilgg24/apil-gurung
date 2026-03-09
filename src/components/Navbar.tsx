export default function Navbar() {
  return (
    <header
      className="fixed top-0 w-full border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold" style={{ color: "var(--color-primary)" }}>
          Apil Gurung
        </a>

        <nav className="flex gap-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
          {["experience", "projects", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize transition-colors"
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--color-primary)")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "var(--color-text-muted)")}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
