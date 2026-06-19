export default function Hero() {
  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Đakovo i šira okolica
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Energija sunca{" "}
              <span className="text-gradient block">za vašu kuću</span>
              i tvrtku
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              ELDING projekt d.o.o. projektira i instalira solarne elektrane,
              nudi energetske audite i pruža stručnu podršku za EU fondove.
              Pouzdanost i preciznost u svakom projektu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="btn-primary text-white font-semibold px-8 py-4 rounded-full text-center text-base"
              >
                Zatražite besplatnu ponudu
              </a>
              <a
                href="#usluge"
                className="border border-white/20 hover:border-blue-400/50 text-white hover:text-blue-400 font-semibold px-8 py-4 rounded-full text-center text-base transition-all duration-300 hover:bg-blue-400/5"
              >
                Naše usluge →
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { label: "Certificirani stručnjaci", icon: "✓" },
                { label: "EU fondovi", icon: "✓" },
                { label: "Garancija kvalitete", icon: "✓" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-slate-400 text-sm"
                >
                  <span className="text-blue-400 font-bold">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-full space-y-4">
              {/* Logo showcase — clean, no overlays */}
              <div className="relative animate-float">
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 animate-pulse-ring scale-105" />
                <div className="logo-frame relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/elding_projekti.jpeg"
                    alt="ELDING projekt d.o.o. logo"
                    className="w-full h-auto block"
                  />
                  <div className="logo-flicker absolute inset-0" />
                </div>
              </div>

              {/* Stats ispod loga */}
              <div className="flex justify-center gap-3">
                <div className="bg-slate-800/90 backdrop-blur border border-white/10 rounded-xl p-3 text-center shadow-xl">
                  <div className="text-blue-400 font-bold text-xl">30+</div>
                  <div className="text-slate-400 text-xs">Projekata</div>
                </div>
                <div className="bg-slate-800/90 backdrop-blur border border-white/10 rounded-xl p-3 text-center shadow-xl">
                  <div className="text-blue-400 font-bold text-xl">100%</div>
                  <div className="text-slate-400 text-xs">Zadovoljstvo</div>
                </div>
                <div className="bg-slate-800/90 backdrop-blur border border-blue-400/30 rounded-xl p-3 text-center shadow-xl">
                  <div className="text-blue-400 font-bold text-lg">⚡ 8.5 kW</div>
                  <div className="text-slate-400 text-xs">Prosj. instalacija</div>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3 shadow-xl">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Skrolaj</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  );
}
