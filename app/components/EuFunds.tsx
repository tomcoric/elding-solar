export default function EuFunds() {
  return (
    <section id="eu-fondovi" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* EU Flag + Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-14 mb-6">
              <EuFlag />
            </div>
            <span className="block text-amber-500 font-semibold text-sm uppercase tracking-widest mb-3">
              EU financiranje
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Iskoristite{" "}
              <span className="text-gradient">EU fondove</span>{" "}
              za solarnu elektranu
            </h2>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
              Hrvatska nudi izvrsne mogućnosti sufinanciranja ugradnje solarnih
              elektrana putem europskih fondova. Mi vam pomažemo u cijelom
              procesu prijave.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Besplatna konzultacija",
                desc: "Analiziramo vaše potrebe i procjenjujemo prihvatljivost za EU sufinanciranje.",
              },
              {
                step: "02",
                title: "Priprema prijave",
                desc: "Izrađujemo svu potrebnu dokumentaciju i projektnu prijavu za natječaj.",
              },
              {
                step: "03",
                title: "Ugradnja i naplata",
                desc: "Nakon odobrenja ugradnja solarne elektrane uz povrat dijela troškova.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-xl p-6 relative"
              >
                <div className="text-5xl font-bold text-amber-500/20 absolute top-4 right-4 select-none">
                  {item.step}
                </div>
                <div className="text-amber-400 font-bold text-sm mb-3">
                  Korak {item.step}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-amber-900 font-semibold text-sm mb-1">
                Ograničena mjesta na natječaju
              </div>
              <h3 className="text-white text-2xl font-bold">
                Do 45% povrata investicije
              </h3>
              <p className="text-amber-100 mt-1 text-sm">
                Prijavite se na besplatnu konzultaciju i saznajte više.
              </p>
            </div>
            <a
              href="#kontakt"
              className="flex-shrink-0 bg-white text-amber-600 font-bold px-7 py-4 rounded-full hover:bg-amber-50 transition-colors shadow-lg whitespace-nowrap"
            >
              Prijavite se →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EuFlag() {
  return (
    <svg viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" className="w-full h-full rounded-sm shadow-md">
      <rect width="60" height="40" fill="#003399" />
      {/* 12 stars arranged in a circle */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const cx = 30 + 12 * Math.cos(angle);
        const cy = 20 + 12 * Math.sin(angle);
        return (
          <text
            key={i}
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="5"
            fill="#FFCC00"
          >
            ★
          </text>
        );
      })}
    </svg>
  );
}
