import { siteData } from "../data/siteData"

export default function SkillsSection() {
  const { skills } = siteData

  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tools", items: skills.tools },
  ]

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: "var(--color-bg-alt)" }}>
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Skills
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl p-6 shadow-md"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-text)" }}>
                {group.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-accent)",
                      backgroundColor: "var(--color-bg-alt)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
