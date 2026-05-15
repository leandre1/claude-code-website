export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Tite Manzi Sports Academy
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg">
          Developing the Next Generation of Football Stars
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Professional youth development, elite coach education, and world-class tournament management — all under one roof.
        </p>
        <a
          href="#contact"
          className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
