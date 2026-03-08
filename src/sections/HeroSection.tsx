import { siteData } from "../data/siteData"
import apilPhoto from "../assets/apilpropic.jpg"

export default function HeroSection() {
  const { profile, links } = siteData

  return (
    <section
      className="min-h-screen flex items-center pt-16"
      style={{ background: "var(--color-hero-gradient)" }}
    >
      <div className="mx-auto max-w-5xl w-full px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">

          {/* ── Left: text content ──────────────────────────────────── */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--color-accent)" }}
            >
              {profile.headline}
            </p>

            <h1
              className="mt-3 text-4xl font-bold leading-tight sm:text-5xl"
              style={{ color: "var(--color-primary)" }}
            >
              {profile.name}
            </h1>

            <p
              className="mt-5 text-base leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ color: "var(--color-text-muted)" }}
            >
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              {/* Primary CTA */}
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-lg font-medium text-sm text-white transition-colors"
                style={{ backgroundColor: "var(--color-primary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = "var(--color-primary-dark)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.backgroundColor = "var(--color-primary)")
                }
              >
                LinkedIn
              </a>

              {/* Secondary outlined */}
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-lg font-medium text-sm transition-colors"
                style={{
                  border: "1.5px solid var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.backgroundColor = "rgba(31, 78, 121, 0.08)"
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement
                  el.style.backgroundColor = "transparent"
                }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* ── Right: photo placeholder ─────────────────────────────── */}
          <div className="shrink-0">
            <div
              className="w-44 h-52 rounded-2xl shadow-lg overflow-hidden flex items-end justify-center sm:w-52 sm:h-60"
              style={{
                background: "linear-gradient(175deg, #A8C8DF 0%, #7AAEC8 100%)",
                border: "1px solid var(--color-border)",
              }}
            >
              <img
                src={apilPhoto}
                alt="Apil Gurung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
