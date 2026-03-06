import { siteData } from "../data/siteData"

export default function ExperienceSection() {
  const { experience } = siteData

  return (
    <section id="experience" className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-slate-300">{item.company}</p>
                </div>

                <p className="text-sm text-slate-400">{item.period}</p>
              </div>

              <ul className="mt-4 space-y-2 text-slate-300">
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