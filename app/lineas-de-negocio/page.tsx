import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { businessLines } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Lineas de negocio",
  description:
    "Biometria, inspeccion no intrusiva, seguridad electronica y servicios especializados de HK Systems."
};

export default function BusinessLinesPage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Lineas de negocio</SectionEyebrow>
            <h1 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5rem]">
              Soluciones especializadas para riesgos, accesos, monitoreo y continuidad operativa.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-soft">
              Cada linea responde a necesidades concretas de organismos publicos, infraestructura
              critica, industria, logistica y companias privadas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Alcance
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-ink">
                Diseno, implementacion, integracion y soporte continuo
              </p>
            </div>
            <div className="surface-card rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Entornos
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-ink">
                Sector publico, industria, logistica y activos estrategicos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="shell section-gap space-y-6">
          {businessLines.map((line, index) => (
            <article
              key={line.slug}
              className="surface-card overflow-hidden rounded-[2.25rem] p-4 sm:p-5"
            >
              <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={line.heroAsset}
                      alt={line.heroAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42rem"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10242f]/45 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep backdrop-blur">
                      Solucion {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  <SectionEyebrow>{line.kicker}</SectionEyebrow>
                  <h2 className="mt-6 max-w-[12ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
                    {line.label}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-ink-soft">{line.summary}</p>
                  <p className="mt-4 text-base leading-7 text-ink-soft">{line.introduction}</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {line.markets.slice(0, 4).map((market) => (
                      <span
                        key={market}
                        className="rounded-full border border-brand/12 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-[0_8px_24px_rgba(12,50,63,0.05)]"
                      >
                        {market}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/lineas-de-negocio/${line.slug}`}
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
                  >
                    Ver solucion completa
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="shell section-gap pt-0">
          <div className="surface-card rounded-[2.25rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <SectionEyebrow>Enfoque operativo</SectionEyebrow>
                <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
                  Tecnologia, criterio operativo y acompanamiento continuo en una misma propuesta.
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-soft">
                  HK Systems adapta el alcance a cada contexto sin perder integracion, trazabilidad
                  ni continuidad del servicio.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
                >
                  Solicitar una reunion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
