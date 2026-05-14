import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  rootMargin?: string
  once?: boolean
}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            if (options?.once !== false) observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options?.threshold ?? 0.12,
        rootMargin: options?.rootMargin ?? "0px 0px -40px 0px",
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options?.threshold, options?.rootMargin, options?.once])

  return ref
}
