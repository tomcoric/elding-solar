const footerLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#o-nama", label: "O nama" },
  { href: "#zasto-mi", label: "Zašto mi" },
  { href: "#eu-fondovi", label: "EU fondovi" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid sm:grid-cols-3 gap-10 py-16 border-b border-white/10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ELDING<span className="text-blue-400 font-light"> projekt</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs">
              Stručnost, pouzdanost i preciznost u elektrotehnici i
              energetskoj učinkovitosti. Đakovo i šira okolica.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61572996150902"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+385977885158"
                  className="hover:text-blue-400 transition-colors"
                >
                  +385 97 788 51 58
                </a>
              </li>
              <li>
                <a
                  href="mailto:elding.projekt@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  elding.projekt@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                Božidara Adžije 8<br />
                31400 Đakovo, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>
            © {year} ELDING projekt d.o.o. Sva prava pridržana.
          </span>
          <span>
            OIB: 57840288345 · Direktor: Zvonimir Puljić
          </span>
        </div>
      </div>
    </footer>
  );
}
