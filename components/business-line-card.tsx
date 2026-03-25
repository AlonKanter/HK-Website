import Image from "next/image";
import Link from "next/link";

import type { BusinessLine } from "@/lib/site-data";

type BusinessLineCardProps = {
  line: BusinessLine;
};

export function BusinessLineCard({ line }: BusinessLineCardProps) {
  return (
    <article className="surface-card rounded-[2rem] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_60px_rgba(9,37,49,0.12)] sm:p-7">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem]">
        <Image
          src={line.heroAsset}
          alt={line.heroAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 34rem"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d37]/40 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep backdrop-blur">
          {line.kicker}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
        Solucion
      </p>
      <h3 className="mt-4 max-w-[14ch] font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
        {line.label}
      </h3>
      <p className="mt-4 text-base leading-7 text-ink-soft">{line.summary}</p>

      <ul className="mt-6 space-y-3">
        {line.applications.slice(0, 3).map((application) => (
          <li key={application} className="flex items-start gap-3 text-sm leading-6 text-ink-soft">
            <span className="mt-2 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
            <span>{application}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/lineas-de-negocio/${line.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-deep transition-colors duration-200 hover:text-brand"
      >
        Ver solucion
        <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
