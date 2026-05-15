import { useState } from "react"
import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"
import {
  LinkedInIcon,
  GitHubIcon,
  UpworkIcon,
  MailIcon,
  CopyIcon,
  CheckIcon,
} from "../components/Icons"

export default function ContactSection() {
  const { profile, links } = siteData
  const ref = useReveal<HTMLDivElement>()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    if (!links.email) return
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API can be blocked (e.g. insecure context). Silently
      // ignore — the mailto link still works as a fallback.
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(160deg, var(--color-contact-bg-deep) 0%, var(--color-contact-bg) 100%)",
      }}
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #7AAEC8 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #A8C8DF 0%, transparent 70%)" }}
      />

      <div ref={ref} className="reveal relative mx-auto max-w-3xl px-6 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-[0.25em]"
          style={{ color: "var(--color-contact-muted)" }}
        >
          Get in touch
        </p>
        <h2
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "var(--color-contact-text)" }}
        >
          Let's build something together
        </h2>
        <p
          className="mx-auto mt-4 max-w-xl leading-relaxed"
          style={{ color: "var(--color-contact-muted)" }}
        >
          I'm open to frontend, full-stack, and product-focused opportunities.
          {profile.location ? ` Based in ${profile.location}.` : ""}
        </p>

        {/* Email row with copy */}
        {links.email && (
          <div className="mx-auto mt-8 flex w-full max-w-md items-stretch overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm">
            <a
              href={`mailto:${links.email}`}
              className="flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              style={{ color: "var(--color-contact-text)" }}
            >
              <MailIcon size={16} />
              <span className="truncate">{links.email}</span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email to clipboard"}
              className="flex shrink-0 items-center gap-1.5 border-l border-white/15 px-4 py-3 text-xs font-medium transition-colors hover:bg-white/10"
              style={{ color: copied ? "#86efac" : "var(--color-contact-muted)" }}
            >
              {copied ? (
                <>
                  <CheckIcon size={14} />
                  Copied
                </>
              ) : (
                <>
                  <CopyIcon size={14} />
                  Copy
                </>
              )}
            </button>
          </div>
        )}

        <span aria-live="polite" className="sr-only">
          {copied ? "Email address copied to clipboard" : ""}
        </span>

        {/* Social buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors"
            style={{
              backgroundColor: "var(--color-contact-text)",
              color: "var(--color-primary)",
            }}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-[1.5px] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
            style={{
              borderColor: "var(--color-contact-muted)",
              color: "var(--color-contact-text)",
            }}
          >
            <GitHubIcon size={16} />
            GitHub
          </a>

          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-[1.5px] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
            style={{
              borderColor: "var(--color-contact-muted)",
              color: "var(--color-contact-text)",
            }}
          >
            <UpworkIcon size={16} />
            Upwork
          </a>
        </div>
      </div>
    </section>
  )
}
