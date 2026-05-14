import Image from 'next/image'

const services = [
  {
    title: 'Youth Academy Development',
    icon: '⚽',
    description:
      'Structured training programs designed to identify and develop talented young players, preparing them for professional academy trials and elite-level competition.'
  },
  {
    title: 'Coach Education',
    icon: '📋',
    description:
      'Certified coaching courses built on UEFA and CAF methodologies. Elevate your coaching license, refine your tactics, and build a career in football management.'
  },
  {
    title: 'Tournament Management',
    icon: '🏆',
    description:
      'End-to-end organization and execution of youth and amateur tournaments nationwide — from fixture planning to match-day operations and prize ceremonies.'
  }
]

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to grow as a player, coach, or football organizer.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-16 h-64 sm:h-80">
          <Image
            src="/team2.png"
            alt="Academy training session"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-200"
            >
              <span className="text-4xl mb-4 block" role="img" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
