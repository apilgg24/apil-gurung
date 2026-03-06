export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between text-white">
        <span className="font-semibold">Apil Gurung</span>

        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  )
}