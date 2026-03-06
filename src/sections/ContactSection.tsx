import { siteData } from "../data/siteData"

export default function ContactSection() {
  const { profile, links } = siteData

  return (
    <section id="contact" className="bg-slate-950 text-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-slate-300">
          I’m open to frontend, full-stack, and product-focused opportunities.
        </p>

        {profile.location && (
        <p className="mt-2 text-slate-400">{profile.location}</p>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white px-6 py-3 font-medium text-black"
          >
            LinkedIn
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-6 py-3"
          >
            GitHub
          </a>

          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-600 px-6 py-3"
          >
            Upwork
          </a>
        </div>
      </div>
    </section>
  )
}