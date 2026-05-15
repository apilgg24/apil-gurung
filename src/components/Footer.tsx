import { siteData } from "../data/siteData"
import { LinkedInIcon, GitHubIcon, UpworkIcon, ArrowUpIcon } from "./Icons"

export default function Footer() {
  const { profile, links } = siteData
  const year = new Date().getFullYear()

  const socials = [
    { href: links.linkedin, label: "LinkedIn", icon: <LinkedInIcon size={16} /> },
    { href: links.github, label: "GitHub", icon: <GitHubIcon size={16} /> },
    { href: links.upwork, label: "Upwork", icon: <UpworkIcon size={16} /> },
  ]

  return (
    <footer
      className="border-t border-white/10"
      style={{ backgroundColor: "var(--color-contact-bg-deep)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-marine-accent to-marine-primary-dark text-sm font-bold text-white shadow-sm ring-1 ring-white/15">
            A
          </span>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold" style={{ color: "var(--color-contact-text)" }}>
              {profile.name}
            </p>
            <p className="text-xs" style={{ color: "var(--color-contact-muted)" }}>
              {profile.headline}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 transition-colors hover:bg-white/10"
              style={{ color: "var(--color-contact-muted)" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-5 text-xs sm:flex-row sm:justify-between">
          <p style={{ color: "var(--color-contact-muted)" }}>
            © {year} {profile.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            style={{ color: "var(--color-contact-muted)" }}
          >
            Back to top
            <ArrowUpIcon size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
