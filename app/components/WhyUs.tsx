const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Certificirani stručnjaci",
    desc: "Svi naši projekti izrađeni su od strane certificiranih elektrotehničkih inženjera s dugogodišnjim iskustvom u terenu.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Brza izvedba",
    desc: "Poštujemo dogovorene rokove. Od idejnog projekta do puštanja u pogon u najkraćem mogućem roku bez kompromisa na kvaliteti.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.55 2 2 0 0 1 3.59 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
      </svg>
    ),
    title: "Podrška 24/7",
    desc: "Naš tim dostupan je za sva vaša pitanja i tehničku podršku. Pratimo instalacije i nakon završetka projekta.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparentne cijene",
    desc: "Jasna i detaljna ponuda bez skrivenih troškova. Znate točno što dobivate i za koji iznos prije nego što potpišete ugovor.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Kompletna usluga",
    desc: "Brinemo o svemu — od projektiranja, ishođenja dozvola, ugradnje, do spajanja na mrežu i nadzora sustava.",
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Zadovoljni klijenti",
    desc: "Naš uspjeh mjeri se zadovoljstvom klijenata. Više od 30 projekata i svaki završen prema očekivanjima i dogovorenim uvjetima.",
  },
];

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-widest">
            Naše prednosti
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Zašto odabrati{" "}
            <span className="text-gradient">ELDING projekt</span>?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Više od desetljeća iskustva u elektrotehnici i energetici.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center">
                {reason.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
