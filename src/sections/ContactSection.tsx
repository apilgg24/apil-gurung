import { siteData } from "../data/siteData"

export default function ContactSection() {
  const { profile, links } = siteData

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: `linear-gradient(160deg, var(--color-contact-bg-deep) 0%, var(--color-contact-bg) 100%)`,
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-contact-text)" }}>
          Contact
        </h2>

        <p className="mt-4" style={{ color: "var(--color-contact-muted)" }}>
          I'm open to frontend, full-stack, and product-focused opportunities.
        </p>

        {profile.location && (
          <p className="mt-2 text-sm" style={{ color: "var(--color-contact-muted)" }}>
            {profile.location}
          </p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Primary — white fill on dark bg */}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-6 py-3 font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-contact-text)",
              color: "var(--color-primary)",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.backgroundColor = "#ffffff"
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLAnchorElement
              el.style.backgroundColor = "var(--color-contact-text)"
            }}
          >
            LinkedIn
          </a>

          {/* Secondary — ghost */}
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-6 py-3 font-medium transition-colors"
            style={{
              border: "1.5px solid var(--color-contact-muted)",
              color: "var(--color-contact-text)",
              backgroundColor: "transparent",
            }}
          >
            GitHub
          </a>

          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-6 py-3 font-medium transition-colors"
            style={{
              border: "1.5px solid var(--color-contact-muted)",
              color: "var(--color-contact-text)",
              backgroundColor: "transparent",
            }}
          >
            Upwork
          </a>
        </div>
      </div>
    </section>
  )
}
