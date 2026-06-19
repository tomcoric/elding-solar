const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.55 2 2 0 0 1 3.59 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
      </svg>
    ),
    label: "Telefon",
    value: "+385 97 788 51 58",
    href: "tel:+385977885158",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "elding.projekt@gmail.com",
    href: "mailto:elding.projekt@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresa",
    value: "Božidara Adžije 8, 31400 Đakovo",
    href: "https://maps.google.com/?q=Božidara+Adžije+8,+Đakovo",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Radno vrijeme",
    value: "Po dogovoru",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-widest">
              Kontaktirajte nas
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Razgovarajmo o vašem{" "}
              <span className="text-gradient">projektu</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Javite nam se za besplatnu konzultaciju. Analizirat ćemo vaše
              potrebe i predložiti optimalno rješenje — bez ikakvih obveza.
            </p>

            <div className="space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-slate-500 text-sm">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 font-semibold hover:text-amber-600 transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-900 font-semibold">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-4">
              <span className="text-slate-500 text-sm">Pratite nas:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61572996150902"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-blue-600 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-pink-500 text-slate-600 hover:text-white rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-6">
        Pošaljite upit
      </h3>
      <form
        action="mailto:elding.projekt@gmail.com"
        method="get"
        encType="text/plain"
        className="space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Ime i prezime *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Vaše ime"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+385 xx xxx xxxx"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="vas@email.com"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Vrsta usluge
          </label>
          <select
            name="service"
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          >
            <option value="">Odaberite uslugu...</option>
            <option>Solarna elektrana</option>
            <option>Elektroprojektiranje</option>
            <option>EU fondovi</option>
            <option>Energetski audit</option>
            <option>Javna rasvjeta</option>
            <option>Nadzor i certificiranje</option>
            <option>Ostalo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Poruka *
          </label>
          <textarea
            name="body"
            required
            rows={4}
            placeholder="Opišite vaš projekt ili postavljajte pitanja..."
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full text-white font-semibold py-4 rounded-xl text-base"
        >
          Pošaljite upit
        </button>
        <p className="text-slate-500 text-xs text-center">
          Odgovaramo u roku od 24 sata radnim danom.
        </p>
      </form>
    </div>
  );
}
