"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="shell pt-4">
        <div className="surface-card flex flex-col gap-4 rounded-[2rem] px-4 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full">
          <Link href="/" aria-label="Ir al inicio" className="inline-flex shrink-0">
            <Image
              src="/logo-hk-systems.png"
              alt="HK Systems"
              width={946}
              height={562}
              sizes="(max-width: 640px) 5.75rem, (max-width: 1024px) 6.5rem, 7rem"
              priority
              className="h-auto w-[5.75rem] sm:w-[6.5rem] lg:w-[7rem]"
            />
          </Link>

          <nav
            aria-label="Navegacion principal"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-ink-soft"
          >
            {primaryNavigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "text-brand-deep"
                      : "transition-colors duration-200 hover:text-ink"
                  }
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Hablemos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
