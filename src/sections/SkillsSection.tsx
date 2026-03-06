import { siteData } from "../data/siteData"

export default function SkillsSection() {
  const { skills } = siteData

  const groups = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Tools", items: skills.tools },
  ]

  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
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