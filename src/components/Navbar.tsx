import { useEffect, useRef, useState } from "react"

const SECTIONS = ["experience", "projects", "skills", "contact"] as const
type SectionId = (typeof SECTIONS)[number]
const NAV_OFFSET = 64

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("")

  // Section locked by a recent nav click. Cleared on user-initiated scroll
  // (wheel / touch / keyboard) — programmatic smooth-scroll does NOT fire
  // these, so the lock survives until the user takes over.
  const lockedRef = useRef<SectionId | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const computeActive = () => {
      if (lockedRef.current) {
        setActive(lockedRef.current)
        return
      }

      const scrollY = window.scrollY
      const viewportH = window.innerHeight
      const docH = document.documentElement.scrollHeight

      // Hard bottom: the last section is what the user is looking at, even
      // if it's too short to win via the anchor below.
      if (scrollY + viewportH >= docH - 4) {
        setActive(SECTIONS[SECTIONS.length - 1])
        return
      }

      // Anchor sits 40% of the way down the viewport. This is far enough
      // below the navbar that short sections still get a turn on pages
      // where the user can't scroll far enough to bring their top to the
      // navbar line.
      const anchor = scrollY + viewportH * 0.4
      let current = ""
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop - NAV_OFFSET <= anchor) current = id
      }
      setActive(current)
    }

    const releaseLock = () => {
      lockedRef.current = null
      computeActive()
    }

    computeActive()
    window.addEventListener("scroll", computeActive, { passive: true })
    window.addEventListener("resize", computeActive)
    window.addEventListener("wheel", releaseLock, { passive: true })
    window.addEventListener("touchmove", releaseLock, { passive: true })
    window.addEventListener("keydown", releaseLock)
    return () => {
      window.removeEventListener("scroll", computeActive)
      window.removeEventListener("resize", computeActive)
      window.removeEventListener("wheel", releaseLock)
      window.removeEventListener("touchmove", releaseLock)
      window.removeEventListener("keydown", releaseLock)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const handleNavClick = (section: SectionId) => {
    lockedRef.current = section
    setActive(section)
    setOpen(false)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-marine-surface/85 backdrop-blur-md shadow-sm border-b border-marine-border/70"
          : "bg-marine-surface/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2 font-semibold text-marine-primary"
          onClick={() => {
            lockedRef.current = null
            setActive("")
            setOpen(false)
          }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-marine-accent to-marine-primary-dark text-sm font-bold text-marine-surface shadow-sm">
            A
          </span>
          <span className="hidden sm:inline">Apil Gurung</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 text-sm md:flex">
          {SECTIONS.map((section) => {
            const isActive = active === section
            return (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleNavClick(section)}
                className={`relative rounded-md px-3 py-2 capitalize transition-colors ${
                  isActive
                    ? "text-marine-primary"
                    : "text-marine-muted hover:text-marine-primary"
                }`}
              >
                {section}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-marine-primary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-marine-primary hover:bg-marine-bg-alt/60 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-full rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`overflow-hidden border-t border-marine-border/60 bg-marine-surface/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-5xl flex-col px-6 py-3">
          {SECTIONS.map((section) => {
            const isActive = active === section
            return (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleNavClick(section)}
                className={`rounded-md px-2 py-3 text-base capitalize transition-colors ${
                  isActive
                    ? "bg-marine-bg-alt/70 text-marine-primary font-medium"
                    : "text-marine-muted hover:bg-marine-bg-alt/40 hover:text-marine-primary"
                }`}
              >
                {section}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
