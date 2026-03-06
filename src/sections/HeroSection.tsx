export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center max-w-xl px-6">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Software Developer
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Apil Gurung
        </h1>

        <p className="mt-4 text-slate-300">
          Angular frontend developer building clean enterprise user interfaces.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            View Resume
          </a>

          <a
            href="#"
            className="px-6 py-3 border border-slate-600 rounded-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}