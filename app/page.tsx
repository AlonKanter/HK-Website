import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BusinessLineCard } from "@/components/business-line-card";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { ShowcaseSlider } from "@/components/showcase-slider";
import {
  businessLinePreviewSlides,
  businessLines,
  companyModel,
  companyPillars,
  contactDetails,
  sectors,
  siteImagery
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Inicio"
};

export default function HomePage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="animate-gentle-rise">
            <SectionEyebrow>Seguridad tecnologica integral</SectionEyebrow>

            <h1 className="mt-6 max-w-[11ch] font-display text-5xl leading-[0.9] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5.8rem]">
              Tecnologia clara para entornos donde la seguridad no puede fallar.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
              HK Systems integra tecnologia, consultoria y ejecucion para proteger personas,
              infraestructuras criticas y continuidad operativa en organizaciones publicas y
              privadas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/lineas-de-negocio"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_20px_45px_rgba(0,185,209,0.22)]"
              >
                Ver lineas de negocio
              </Link>
              <Link
                href="/empresa"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-deep"
              >
                Conocer la empresa
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {companyPillars.map((pillar) => (
                <article key={pillar} className="surface-card rounded-3xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                    Pilar
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight text-ink">{pillar}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[38rem] animate-gentle-rise lg:justify-self-end">
            <div
              className="pointer-events-none absolute -top-12 left-10 -z-10 h-52 w-52 rounded-full bg-brand/18 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-24 -z-10 h-48 w-48 rounded-full bg-brand-soft blur-3xl"
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
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="shell section-gap">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-2xl">
              <SectionEyebrow>Lineas de negocio</SectionEyebrow>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-[3.8rem]">
                Soluciones especializadas para entornos donde el margen de error es minimo.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink-soft">
                Biometria, inspeccion no intrusiva, seguridad electronica y servicios
                especializados integrados en propuestas tecnicas y operativas a medida.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/lineas-de-negocio"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Explorar soluciones
              </Link>
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand-deep"
              >
                Solicitar presentacion comercial
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <ShowcaseSlider
              slides={businessLinePreviewSlides}
              variant="mosaic"
              ariaLabel="Preview de lineas de negocio"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {businessLines.map((line) => (
              <BusinessLineCard key={line.slug} line={line} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl">
            <SectionEyebrow>Empresa</SectionEyebrow>
            <h2 className="mt-6 max-w-[15ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-[3.6rem]">
              HK Systems no es solo un proveedor de equipos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              El posicionamiento de la empresa combina integracion de soluciones, provision
              tecnologica y consultoria para contextos institucionales y operativos complejos.
            </p>

            <Link
              href="/empresa"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35 hover:text-brand-deep"
            >
              Ver empresa completa
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {companyModel.map((item) => (
              <article key={item.title} className="surface-card rounded-[2rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                  Modelo
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-ink-soft">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell section-gap">
          <div className="max-w-3xl">
            <SectionEyebrow>Sectores</SectionEyebrow>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Experiencia en entornos donde la exigencia tecnica y normativa es alta.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector) => (
              <article key={sector.title} className="surface-card overflow-hidden rounded-[2rem] p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 24rem"
                    className="object-cover"
                  />
                </div>
                <div className="px-2 pb-2 pt-5">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-ink-soft">{sector.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell section-gap pt-0">
          <div className="surface-card rounded-[2.25rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-2xl">
                <SectionEyebrow>Contacto</SectionEyebrow>
                <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-[3.9rem]">
                  Seguridad estrategica para organizaciones que no pueden improvisar.
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-soft">
                  Si necesitas disenar, modernizar o integrar una solucion, HK Systems acompana el
                  proyecto desde el diagnostico hasta la puesta en marcha.
                </p>
              </div>

              <div className="grid gap-3">
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
                <Link
                  href="/contacto"
                  className="rounded-[1.5rem] border border-line bg-brand-soft/45 px-5 py-4 text-base font-semibold leading-7 text-ink-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/35"
                >
                  Ir a contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
