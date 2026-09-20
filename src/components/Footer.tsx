import { Logo } from "./Logo";
import { navItems, whatsappUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Jasa pembuatan website dan sistem kustom untuk bisnis yang ingin
              tumbuh di dunia digital.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-16">
            <div>
              <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                Navigasi
              </p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-slate-300 transition-colors hover:text-sky"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest text-slate-500 uppercase">
                Kontak
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 transition-colors hover:text-sky"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="text-sm text-slate-300 transition-colors hover:text-sky"
                  >
                    Formulir
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Pilar Sistem. Seluruh hak cipta dilindungi.</p>
          <p>utas prasojo</p>
        </div>
      </div>
    </footer>
  );
}
