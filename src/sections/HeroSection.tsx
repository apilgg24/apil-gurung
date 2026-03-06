import { siteData } from "../data/siteData"

export default function HeroSection() {
  const { profile, links } = siteData

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center max-w-xl px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          {profile.headline}
        </p>

        <h1 className="mt-4 text-4xl font-bold">{profile.name}</h1>

        <p className="mt-4 text-slate-300">{profile.summary}</p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            LinkedIn
          </a>

          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-slate-600 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}