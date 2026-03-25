import Link from "next/link";

import { contactDetails, primaryNavigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="shell section-gap grid gap-10 py-12 lg:grid-cols-[1fr_0.8fr] lg:py-14">
        <div>
          <p className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
            HK Systems integra tecnologia, consultoria y ejecucion para proteger operaciones
            criticas.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
            Seguridad avanzada para sector publico, infraestructura critica, industria y
            organizaciones que necesitan continuidad operativa.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Navegacion
            </p>
            <ul className="mt-4 space-y-3 text-sm font-medium text-ink-soft">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors duration-200 hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Contacto
            </p>
            <div className="mt-4 grid gap-3 text-sm text-ink-soft">
              <a className="transition-colors duration-200 hover:text-ink" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
              <a className="transition-colors duration-200 hover:text-ink" href={contactDetails.phoneHref}>
                {contactDetails.phone}
              </a>
              <a
                className="transition-colors duration-200 hover:text-ink"
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                {contactDetails.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
