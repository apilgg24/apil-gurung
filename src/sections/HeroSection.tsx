import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"
import apilPhoto from "../assets/apilpropic.jpg"

export default function HeroSection() {
  const { profile, links } = siteData
  const textRef = useReveal<HTMLDivElement>()
  const photoRef = useReveal<HTMLDivElement>({ rootMargin: "0px" })

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center pt-16"
      style={{ background: "var(--color-hero-gradient)" }}
    >
      {/* Decorative soft blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #7AAEC8 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #A8C8DF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-16">

          {/* ── Left: text content ──────────────────────────────────── */}
          <div ref={textRef} className="reveal flex-1 text-center md:text-left">
            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-marine-border bg-marine-surface/70 px-3 py-1 text-xs font-medium text-marine-muted backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
              {profile.headline}
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight text-marine-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-marine-muted mx-auto md:mx-0 md:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-marine-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-marine-primary-dark hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marine-primary"
              >
                Connect on LinkedIn
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-[1.5px] border-marine-primary bg-transparent px-6 py-2.5 text-sm font-medium text-marine-primary transition-colors hover:bg-marine-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marine-primary"
              >
                GitHub
              </a>

              {links.resume && (
                <a
                  href={links.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium text-marine-muted transition-colors hover:text-marine-primary"
                >
                  <svg
                    aria-hidden
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              )}
            </div>
          </div>

          {/* ── Right: photo with marine halo ───────────────────────── */}
          <div ref={photoRef} className="reveal relative shrink-0">
            {/* Outer glow halo */}
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(58,124,165,0.55) 0%, rgba(31,78,121,0.25) 50%, transparent 75%)",
              }}
            />
            {/* Gradient ring */}
            <div
              className="relative rounded-full p-1.5 shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #A8C8DF 0%, #3A7CA5 50%, #163A5C 100%)",
              }}
            >
              <div className="h-56 w-56 overflow-hidden rounded-full bg-marine-surface sm:h-64 sm:w-64 md:h-72 md:w-72">
                <img
                  src={apilPhoto}
                  alt="Apil Gurung"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
