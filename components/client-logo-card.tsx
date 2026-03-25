import Image from "next/image";

import type { ClientItem } from "@/lib/site-data";

type ClientLogoCardProps = {
  client: ClientItem;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function ClientLogoCard({ client }: ClientLogoCardProps) {
  const content = client.logo ? (
    <div className="relative h-14 w-full grayscale transition duration-300 ease-out group-hover:grayscale-0">
      <Image
        src={client.logo}
        alt={client.alt ?? `Logo de ${client.name}`}
        fill
        sizes="(max-width: 768px) 50vw, 16rem"
        className="object-contain"
      />
    </div>
  ) : (
    <div className="flex w-full items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-lg font-display font-semibold tracking-[-0.04em] text-brand-deep">
        {getInitials(client.name)}
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-deep/70">
          Cliente
        </p>
        <p className="mt-1 text-sm leading-6 text-ink-soft">{client.name}</p>
      </div>
    </div>
  );

  const card = (
    <div className="group flex min-h-[9.5rem] items-center rounded-[1.5rem] border border-line bg-white px-5 py-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_50px_rgba(9,37,49,0.08)]">
      {content}
    </div>
  );

  if (client.href) {
    return (
      <a href={client.href} target="_blank" rel="noreferrer" aria-label={client.name}>
        {card}
      </a>
    );
  }

  return card;
}
