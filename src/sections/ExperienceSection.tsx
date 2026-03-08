import { siteData } from "../data/siteData"

export default function ExperienceSection() {
  const { experience } = siteData

  return (
    <section id="experience" className="py-20" style={{ backgroundColor: "var(--color-bg-alt)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Experience
        </h2>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="rounded-xl p-6 shadow-md"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                    {item.role}
                  </h3>
                  <p style={{ color: "var(--color-accent)" }}>{item.company}</p>
                </div>

                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2" style={{ color: "var(--color-text-muted)" }}>
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="list-disc ml-5">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
