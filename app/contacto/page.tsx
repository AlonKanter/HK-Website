import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { businessLines, contactDetails, siteImagery } from "@/lib/site-data";

const contactSteps = [
  {
    step: "01",
    title: "Relevamiento inicial",
    description:
      "Entendemos el contexto, el nivel de riesgo, el flujo operativo y los objetivos del proyecto."
  },
  {
    step: "02",
    title: "Definicion de alcance",
    description:
      "Traducimos necesidades en una propuesta tecnica, comercial y operativa ajustada al entorno."
  },
  {
    step: "03",
    title: "Implementacion y seguimiento",
    description:
      "Acompanamos la ejecucion, la integracion y la continuidad del sistema en el tiempo."
  }
];

export const metadata: Metadata = {
  title: "Contacto",
  description: "Canales de contacto y punto de entrada comercial para HK Systems."
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionEyebrow>Contacto</SectionEyebrow>
            <h1 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5rem]">
              Conversemos sobre una solucion de seguridad integral.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              HK Systems acompana diagnostico, diseno, implementacion y soporte para proyectos con
              exigencia tecnica, institucional y operativa.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${contactDetails.email}`}
                className="rounded-[1.5rem] border border-line bg-white px-5 py-4 font-display text-xl leading-tight text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand-deep sm:text-2xl"
              >
                {contactDetails.email}
              </a>
              <a
                href={contactDetails.phoneHref}
                className="rounded-[1.5rem] border border-line bg-white px-5 py-4 font-display text-xl leading-tight text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand-deep sm:text-2xl"
              >
                {contactDetails.phone}
              </a>
              <a
                href={contactDetails.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-line bg-brand-soft/45 px-5 py-4 text-base leading-7 text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35"
              >
                {contactDetails.address}
              </a>
            </div>
          </div>

          <div className="surface-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <Image
              src={siteImagery.contactHero.image}
              alt={siteImagery.contactHero.alt}
              width={640}
              height={480}
              sizes="(max-width: 1024px) 100vw, 42rem"
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="shell section-gap">
          <div className="max-w-3xl">
            <SectionEyebrow>Como iniciar</SectionEyebrow>
            <h2 className="mt-6 max-w-[16ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Un proceso claro para convertir una necesidad en una solucion implementable.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {contactSteps.map((step) => (
              <article key={step.step} className="surface-card rounded-[2rem] p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">
                  {step.step}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-ink-soft">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap">
          <div className="surface-card rounded-[2.25rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-2xl">
                <SectionEyebrow>Consultas</SectionEyebrow>
                <h2 className="mt-6 max-w-[15ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
                  Podemos empezar desde una necesidad puntual o desde un proyecto integral.
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-soft">
                  Trabajamos primero sobre Rayos X e inspeccion no intrusiva, y luego sobre
                  accesos, monitoreo, auditorias y despliegues operativos en sistemas nuevos o ya
                  existentes.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {businessLines.map((line) => (
                  <Link
                    key={line.slug}
                    href={`/lineas-de-negocio/${line.slug}`}
                    className="rounded-[1.5rem] border border-line bg-white px-5 py-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25 hover:bg-brand-soft/35"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                      {line.kicker}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                      {line.label}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
