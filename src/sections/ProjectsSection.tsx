import { siteData } from "../data/siteData"

export default function ProjectsSection() {
  const { projects } = siteData

  return (
    <section
      id="projects"
      className="py-24"
      style={{ backgroundColor: "var(--color-bg-projects)" }}
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
          Projects
        </h2>

        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex flex-col md:flex-row">

                {/* ── Left: content ─────────────────────────────────── */}
                <div className="flex flex-col justify-between gap-6 p-8 md:w-1/2">
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {project.name}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full px-3 py-1 text-xs font-medium"
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

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-colors"
                      style={{ backgroundColor: "var(--color-primary)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLAnchorElement).style.backgroundColor =
                          "var(--color-primary-dark)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLAnchorElement).style.backgroundColor =
                          "var(--color-primary)")
                      }
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* ── Right: preview ────────────────────────────────── */}
                <div
                  className="md:w-1/2 min-h-48 md:min-h-0 flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-alt)" }}
                >
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 p-8 text-center">
                      <div
                        className="w-12 h-9 rounded-md"
                        style={{ backgroundColor: "var(--color-border)" }}
                      />
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Screenshot coming soon
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
