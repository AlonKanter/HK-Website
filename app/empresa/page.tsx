import type { Metadata } from "next";
import Image from "next/image";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { companyPillars, companyPrinciples, contactDetails, sectors, siteImagery } from "@/lib/site-data";

const operatingStages = [
  {
    step: "01",
    title: "Analisis y diagnostico",
    description:
      "Relevamiento de riesgo, vulnerabilidades, flujos operativos y requerimientos de cada organizacion."
  },
  {
    step: "02",
    title: "Diseno e integracion",
    description:
      "Arquitecturas que combinan deteccion, control de accesos, monitoreo y criterios de operacion."
  },
  {
    step: "03",
    title: "Implementacion y continuidad",
    description:
      "Puesta en marcha, mantenimiento y acompanamiento para sostener el sistema en el tiempo."
  }
];

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "Posicionamiento, enfoque operativo, cumplimiento y capacidades institucionales de HK Systems."
};

export default function CompanyPage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionEyebrow>Empresa</SectionEyebrow>
            <h1 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5rem]">
              Seguridad avanzada con criterio tecnico e impronta institucional.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              HK Systems integra consultoria, ingenieria, implementacion y mantenimiento para
              proteger personas, infraestructuras criticas y continuidad operativa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {companyPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded-full border border-brand/12 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-[0_8px_24px_rgba(12,50,63,0.05)]"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <Image
              src={siteImagery.companyHero.image}
              alt={siteImagery.companyHero.alt}
              width={1160}
              height={960}
              sizes="(max-width: 1024px) 100vw, 42rem"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="shell section-gap grid gap-4 lg:grid-cols-3">
          <article className="surface-card rounded-[2rem] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Mision
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
              Hacer del mundo un lugar mas seguro.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Soluciones de alto nivel adaptadas a la realidad operativa y normativa de cada
              cliente.
            </p>
          </article>

          <article className="surface-card rounded-[2rem] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Vision
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
              Seguridad como base de libertad operativa.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              La tecnologia debe proteger y, al mismo tiempo, facilitar la actividad cotidiana y la
              continuidad del negocio.
            </p>
          </article>

          <article className="surface-card rounded-[2rem] p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Posicionamiento
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
              Integrador y consultor, no solo proveedor.
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-soft">
              Una propuesta orientada a clientes institucionales, infraestructura critica y
              organizaciones de alta exigencia.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap">
          <div className="max-w-3xl">
            <SectionEyebrow>Como trabajamos</SectionEyebrow>
            <h2 className="mt-6 max-w-[15ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Un recorrido claro desde el analisis inicial hasta la continuidad operativa.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {operatingStages.map((stage) => (
              <article key={stage.step} className="surface-card rounded-[2rem] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                  {stage.step}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
                  {stage.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-ink-soft">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <SectionEyebrow>Principios de trabajo</SectionEyebrow>
            <h2 className="mt-6 max-w-[15ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
              Transparencia, criterio operativo y cumplimiento en entornos sensibles.
            </h2>

            <ul className="mt-8 space-y-4">
              {companyPrinciples.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-ink-soft">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionEyebrow>Sectores atendidos</SectionEyebrow>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sectors.map((sector) => (
                <article key={sector.title} className="surface-card rounded-[2rem] p-6">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink-soft">{sector.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell section-gap pt-0">
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href={`mailto:${contactDetails.email}`}
              className="surface-card rounded-[2rem] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Email
              </p>
              <p className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                {contactDetails.email}
              </p>
            </a>

            <a
              href={contactDetails.phoneHref}
              className="surface-card rounded-[2rem] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Telefono
              </p>
              <p className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                {contactDetails.phone}
              </p>
            </a>

            <a
              href={contactDetails.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="surface-card rounded-[2rem] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Ubicacion
              </p>
              <p className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                {contactDetails.address}
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
