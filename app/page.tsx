import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { businessLines, contactDetails, sectors, siteImagery } from "@/lib/site-data";

const valuePoints = [
  {
    title: "Diagnostico y diseno",
    description:
      "Analisis de riesgo, planificacion tecnica y definicion de alcance segun cada entorno."
  },
  {
    title: "Integracion de soluciones",
    description:
      "Biometria, inspeccion, CCTV y servicios especializados conectados en una sola arquitectura."
  },
  {
    title: "Continuidad operativa",
    description:
      "Implementacion, mantenimiento y acompanamiento para sostener el sistema en el tiempo."
  }
];

const marketTags = [
  "Sector publico",
  "Infraestructura critica",
  "Industria y logistica",
  "Entornos institucionales"
];

export const metadata: Metadata = {
  title: "Inicio"
};

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="animate-gentle-rise">
            <SectionEyebrow>Seguridad tecnologica integral</SectionEyebrow>

            <h1 className="mt-6 max-w-[10ch] font-display text-5xl leading-[0.9] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5.6rem]">
              Tecnologia clara para entornos donde la seguridad no puede fallar.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              HK Systems integra consultoria, tecnologia e implementacion para proteger personas,
              activos criticos y continuidad operativa en organizaciones publicas y privadas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_20px_45px_rgba(0,185,209,0.22)]"
              >
                Hablar con HK Systems
              </Link>
              <Link
                href="/lineas-de-negocio"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-deep"
              >
                Ver soluciones
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {marketTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand/12 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-[0_8px_24px_rgba(12,50,63,0.05)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[40rem] animate-gentle-rise lg:justify-self-end">
            <div
              className="pointer-events-none absolute -top-12 left-8 -z-10 h-48 w-48 rounded-full bg-brand/18 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-4 right-0 -z-10 h-52 w-52 rounded-full bg-brand-soft blur-3xl"
              aria-hidden="true"
            />

            <div className="surface-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
              <Image
                src={siteImagery.homeHero.image}
                alt={siteImagery.homeHero.alt}
                width={1160}
                height={960}
                priority
                sizes="(max-width: 1024px) 100vw, 42rem"
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>

            <div className="surface-card absolute inset-x-5 -bottom-6 rounded-[1.6rem] px-5 py-4 sm:inset-x-auto sm:bottom-5 sm:right-5 sm:w-[18rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                Cobertura
              </p>
              <div className="mt-3 grid gap-2 text-sm leading-6 text-ink-soft">
                <p>Biometria y control de identidad</p>
                <p>Inspeccion de equipajes, personas y cargas</p>
                <p>Video vigilancia y monitoreo</p>
                <p>Consultoria y ejecucion integral</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap">
          <div className="max-w-3xl">
            <SectionEyebrow>Propuesta de valor</SectionEyebrow>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Una propuesta completa desde el analisis inicial hasta la operacion sostenida.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {valuePoints.map((point) => (
              <article key={point.title} className="surface-card rounded-[2rem] p-6 sm:p-7">
                <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-ink-soft">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell section-gap">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionEyebrow>Soluciones</SectionEyebrow>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
                Cuatro lineas para resolver accesos, amenazas, monitoreo y operaciones complejas.
              </h2>
            </div>

            <Link
              href="/lineas-de-negocio"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand-deep"
            >
              Ver todas las lineas
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {businessLines.map((line) => (
              <article key={line.slug} className="surface-card overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={line.heroAsset}
                    alt={line.heroAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 38rem"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d37]/45 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep backdrop-blur">
                    {line.kicker}
                  </span>
                </div>

                <div className="px-3 pb-3 pt-5">
                  <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
                    {line.label}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-ink-soft">{line.summary}</p>

                  <ul className="mt-5 space-y-3">
                    {line.applications.slice(0, 2).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/lineas-de-negocio/${line.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:text-brand"
                  >
                    Ver solucion
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <SectionEyebrow>Sectores atendidos</SectionEyebrow>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
              Presencia en entornos donde la exigencia tecnica y normativa es alta.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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

          <div className="surface-card rounded-[2.25rem] p-6 sm:p-8">
            <SectionEyebrow>Contacto</SectionEyebrow>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl">
              Una conversacion tecnica puede ordenar el proyecto desde el inicio.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              Si necesitas evaluar una necesidad de seguridad, definir alcance o integrar una
              solucion, podemos avanzar desde aqui.
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
                className="rounded-[1.5rem] border border-line bg-white px-5 py-4 text-base leading-7 text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-ink"
              >
                {contactDetails.address}
              </a>
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-[1.5rem] bg-brand px-6 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
