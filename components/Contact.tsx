import Image from 'next/image'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/team1.png"
              alt="Tite Manzi — Academy Director"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>

          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Work With Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Ready to Take Your Football Journey to the Next Level?
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Whether you are a parent looking to enroll your child, a coach seeking certified education, or an organizer planning a tournament — we are here to help.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Reach us directly at{' '}
              <span className="text-amber-400 font-medium">titemanzi1@gmail.com</span>
            </p>
            <a
              href="mailto:titemanzi1@gmail.com"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
