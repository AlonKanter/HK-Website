import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { ShowcaseSlider } from "@/components/showcase-slider";
import { businessLines, getBusinessLine } from "@/lib/site-data";

type BusinessLinePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return businessLines.map((line) => ({
    slug: line.slug
  }));
}

export async function generateMetadata({
  params
}: BusinessLinePageProps): Promise<Metadata> {
  const { slug } = await params;
  const line = getBusinessLine(slug);

  if (!line) {
    return {
      title: "Linea no encontrada"
    };
  }

  return {
    title: line.label,
    description: line.summary
  };
}

export default async function BusinessLineDetailPage({
  params
}: BusinessLinePageProps) {
  const { slug } = await params;
  const line = getBusinessLine(slug);

  if (!line) {
    notFound();
  }

  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <Link
              href="/lineas-de-negocio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:text-brand"
            >
              <span aria-hidden="true">&larr;</span>
              Volver a lineas de negocio
            </Link>

            <div className="mt-6">
              <SectionEyebrow>{line.kicker}</SectionEyebrow>
            </div>

            <h1 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5rem]">
              {line.label}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">{line.summary}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{line.introduction}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">{line.detail}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
              >
                Consultar esta linea
              </Link>
              <Link
                href="/empresa"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-6 text-base font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand-deep"
              >
                Ver empresa
              </Link>
            </div>
          </div>

          <div className="surface-card overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <Image
              src={line.heroAsset}
              alt={line.heroAlt}
              width={1160}
              height={960}
              sizes="(max-width: 1024px) 100vw, 42rem"
              className="h-auto w-full rounded-[1.5rem]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line/70">
        <div className="shell section-gap">
          <div className="max-w-3xl">
            <SectionEyebrow>Escenarios operativos</SectionEyebrow>
            <h2 className="mt-6 max-w-[15ch] font-display text-4xl leading-[0.95] tracking-[-0.045em] text-ink [text-wrap:balance] sm:text-5xl lg:text-6xl">
              Escenarios donde esta linea aporta control, visibilidad y respuesta.
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              Una seleccion de escenas que ayuda a dimensionar su alcance operativo, sus usos y su
              integracion con procesos reales.
            </p>
          </div>

          <div className="mt-10">
            <ShowcaseSlider
              slides={line.slides}
              variant={line.sliderVariant}
              ariaLabel={`Slider de ${line.label}`}
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="surface-card rounded-[2rem] p-6 sm:p-8">
            <SectionEyebrow>Capacidades clave</SectionEyebrow>
            <ul className="mt-6 space-y-4">
              {line.applications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-7 text-ink-soft">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="grid gap-4">
            <article className="surface-card rounded-[2rem] p-6 sm:p-8">
              <SectionEyebrow>Alcance del servicio</SectionEyebrow>
              <ul className="mt-6 space-y-4">
                {line.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base leading-7 text-ink-soft">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="surface-card rounded-[2rem] p-6 sm:p-8">
              <SectionEyebrow>Entornos de aplicacion</SectionEyebrow>
              <div className="mt-6 flex flex-wrap gap-3">
                {line.markets.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand/12 bg-white/80 px-4 py-2 text-sm font-medium text-ink-soft shadow-[0_8px_24px_rgba(12,50,63,0.05)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
