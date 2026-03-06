import { siteData } from "../data/siteData"

export default function ProjectsSection() {
  const { projects } = siteData

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-6 inline-block text-sm font-medium text-white underline underline-offset-4"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}