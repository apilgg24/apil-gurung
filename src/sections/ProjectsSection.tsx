import { siteData } from "../data/siteData"

export default function ProjectsSection() {
  const { projects } = siteData

  return (
    <section
      id="projects"
      className="py-20"
      style={{ backgroundColor: "var(--color-bg-projects)" }}
    >
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Projects
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl p-6 flex flex-col shadow-md"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-text)" }}>
                {project.name}
              </h3>
              <p className="mt-3" style={{ color: "var(--color-text-muted)" }}>
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
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

              <a
                href={project.link}
                className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                style={{ color: "var(--color-primary)" }}
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
