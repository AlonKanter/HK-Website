import type { Metadata } from "next";

import { ClientLogoCard } from "@/components/client-logo-card";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { clientCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Clientes institucionales y corporativos que confian en HK Systems."
};

export default function ClientsPage() {
  return (
    <main>
      <section>
        <div className="shell section-gap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Clientes</SectionEyebrow>
            <h1 className="mt-6 max-w-[13ch] font-display text-5xl leading-[0.92] tracking-[-0.05em] text-ink [text-wrap:balance] sm:text-6xl lg:text-[5rem]">
              Clientes que confian en HK Systems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink-soft">
              Experiencia junto a fuerzas federales, organismos publicos, municipios, servicios
              penitenciarios y companias privadas de distintos sectores.
            </p>
          </div>

          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
              Alcance
            </p>
            <p className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
              Organismos federales, entes gubernamentales, servicios penitenciarios, clientes
              privados, depositos fiscales y entes municipales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/35">
        <div className="shell section-gap space-y-6">
          {clientCategories.map((category) => (
            <section
              key={category.slug}
              id={category.slug}
              className="scroll-mt-28 rounded-[2.25rem] border border-line/70 bg-white/70 p-5 shadow-[0_24px_72px_rgba(9,37,49,0.06)] backdrop-blur sm:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                <div className="max-w-xl">
                  <SectionEyebrow>{category.label}</SectionEyebrow>
                  <h2 className="mt-6 font-display text-3xl leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
                    {category.label}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-ink-soft">{category.description}</p>
                </div>

                {category.clients.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {category.clients.map((client) => (
                      <ClientLogoCard key={client.name} client={client} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-[2rem] border border-dashed border-brand/20 bg-brand-soft/45 p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                      Categoria
                    </p>
                    <h3 className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em] text-ink">
                      Esta categoria todavia no muestra logos publicados.
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                      La categoria puede ampliarse con nuevas referencias institucionales y
                      corporativas manteniendo la misma presentacion.
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
