"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { primaryNavigation } from "@/lib/site-data";

function normalizePathname(pathname: string) {
  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function isNavigationItemActive(itemHref: string, pathname: string) {
  const currentPath = normalizePathname(pathname);

  if (itemHref === "/") {
    return currentPath === "/";
  }

  if (itemHref === "/lineas-de-negocio") {
    return currentPath === itemHref || currentPath.startsWith(`${itemHref}/`);
  }

  return currentPath === itemHref;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frameId = 0;

    const updateVisibility = () => {
      const isDesktop = window.innerWidth >= 1024;
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      const shouldShow = isDesktop || currentScrollY < 24 || scrollDelta <= -6;
      const shouldHide = !isDesktop && currentScrollY > 96 && scrollDelta >= 6;

      setIsVisible((current) => {
        if (shouldShow && !current) {
          return true;
        }

        if (shouldHide && current) {
          return false;
        }

        return current;
      });

      lastScrollY = currentScrollY;
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateVisibility);
    };

    const handleResize = () => {
      lastScrollY = window.scrollY;

      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-transform duration-300 ease-out will-change-transform lg:translate-y-0 lg:opacity-100 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-[calc(100%+1rem)] opacity-0"
      }`}
    >
      <div className="shell pt-4">
        <div className="surface-card flex flex-col gap-4 rounded-[2rem] px-4 py-3 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full">
          <Link href="/" aria-label="Ir al inicio" className="inline-flex shrink-0">
            <Image
              src="/logo-hk-systems.png"
              alt="HK Systems"
              width={749}
              height={391}
              sizes="(max-width: 640px) 5.75rem, (max-width: 1024px) 6.5rem, 7rem"
              priority
              className="h-auto w-[5.75rem] sm:w-[6.5rem] lg:w-[7rem]"
            />
          </Link>

          <nav
            aria-label="Navegacion principal"
            className="flex flex-wrap items-center gap-2 text-sm font-medium text-ink-soft lg:justify-end"
          >
            {primaryNavigation.map((item) => {
              const isActive = isNavigationItemActive(item.href, pathname);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex min-h-10 items-center rounded-full px-3.5 py-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/25 [-webkit-tap-highlight-color:transparent] ${
                    isActive
                      ? "bg-brand-soft text-brand-deep shadow-[inset_0_0_0_1px_rgba(0,185,209,0.14)]"
                      : "text-ink-soft hover:bg-white/75 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
