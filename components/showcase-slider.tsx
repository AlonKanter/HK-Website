"use client";

import Image from "next/image";
import { startTransition, useEffect, useEffectEvent, useState } from "react";

import type { ProductSlide, SliderVariant } from "@/lib/site-data";

type ShowcaseSliderProps = {
  slides: ProductSlide[];
  variant?: SliderVariant;
  ariaLabel: string;
};

type SlideMediaProps = {
  slide: ProductSlide;
  priority?: boolean;
  className: string;
};

function SlideMedia({ slide, priority = false, className }: SlideMediaProps) {
  if (slide.image) {
    return (
      <div className={`relative overflow-hidden rounded-[1.75rem] ${className}`}>
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 60rem"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a33]/50 via-[#0e2a33]/10 to-transparent" />
        <div className="absolute left-5 top-5 flex items-start gap-4">
          <span className="rounded-full bg-white/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-brand-deep backdrop-blur">
            {slide.eyebrow}
          </span>
        </div>
      </div>
    );
  }

  const toneClass =
    slide.tone === "ink"
      ? "bg-[#103541] text-white"
      : slide.tone === "brand"
        ? "bg-brand text-white"
        : "bg-brand-soft text-ink";

  const chipClass =
    slide.tone === "ink" || slide.tone === "brand"
      ? "bg-white/14 text-white/85"
      : "bg-white/70 text-brand-deep";

  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] ${className} ${toneClass}`}>
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:2.8rem_2.8rem]" />
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/12 blur-2xl" />
      <div className="absolute left-5 top-5 flex max-w-[80%] items-start gap-3">
        <span className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] ${chipClass}`}>
          {slide.eyebrow}
        </span>
      </div>
      <span className="absolute right-5 top-5 rounded-full bg-white/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-ink-soft">
        Aplicacion
      </span>
      <div className="absolute inset-x-5 bottom-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-80">
          {slide.placeholder}
        </p>
        <h3 className="mt-3 max-w-[16ch] font-display text-3xl leading-tight tracking-[-0.04em]">
          {slide.title}
        </h3>
      </div>
    </div>
  );
}

export function ShowcaseSlider({
  slides,
  variant = "spotlight",
  ariaLabel
}: ShowcaseSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const cycle = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    });
  });

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      cycle();
    }, 5200);

    return () => {
      window.clearInterval(timer);
    };
  }, [slides.length]);

  const activeSlide = slides[activeIndex];
  const previewSlides = slides
    .map((slide, index) => ({ slide, index }))
    .filter(({ index }) => index !== activeIndex);

  const goTo = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  };

  const goBy = (offset: number) => {
    startTransition(() => {
      setActiveIndex((current) => (current + offset + slides.length) % slides.length);
    });
  };

  if (variant === "sidebar") {
    return (
      <section aria-label={ariaLabel} className="surface-card rounded-[2rem] p-4 sm:p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_20rem]">
          <div>
            <SlideMedia slide={activeSlide} priority className="aspect-[16/10]" />
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goBy(-1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
                aria-label="Anterior"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => goBy(1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
                aria-label="Siguiente"
              >
                &rarr;
              </button>
              <span className="text-sm font-medium text-ink-soft">
                {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="grid gap-3">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`rounded-[1.5rem] border p-4 text-left transition-all duration-300 ease-out ${
                    isActive
                      ? "border-brand/35 bg-brand-soft/60 shadow-[0_20px_45px_rgba(0,185,209,0.08)]"
                      : "border-line bg-white hover:border-brand/25 hover:bg-brand-soft/35"
                  }`}
                  aria-pressed={isActive}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                    {slide.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-xl leading-tight tracking-[-0.03em] text-ink">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{slide.note}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 max-w-3xl">
          <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
            {activeSlide.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-ink-soft">{activeSlide.description}</p>
        </div>
      </section>
    );
  }

  if (variant === "mosaic") {
    return (
      <section aria-label={ariaLabel} className="surface-card rounded-[2rem] p-4 sm:p-5">
        <SlideMedia slide={activeSlide} priority className="aspect-[16/10]" />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
              {activeSlide.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft">
              {activeSlide.description}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goBy(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
              aria-label="Anterior"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => goBy(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
              aria-label="Siguiente"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {previewSlides.slice(0, 3).map(({ slide, index }) => (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className="rounded-[1.5rem] border border-line bg-white p-4 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/25 hover:bg-brand-soft/35"
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                {slide.eyebrow}
              </p>
              <h4 className="mt-2 font-display text-xl leading-tight tracking-[-0.03em] text-ink">
                {slide.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{slide.note}</p>
            </button>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section aria-label={ariaLabel} className="surface-card rounded-[2rem] p-4 sm:p-5">
      <SlideMedia slide={activeSlide} priority className="aspect-[16/10]" />
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <h3 className="font-display text-3xl leading-tight tracking-[-0.04em] text-ink">
            {activeSlide.title}
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft">{activeSlide.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => goBy(-1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
            aria-label="Anterior"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => goBy(1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-lg text-ink transition-colors duration-200 hover:border-brand/35 hover:text-brand-deep"
            aria-label="Siguiente"
          >
            &rarr;
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${slide.title}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={`rounded-[1.5rem] border p-4 text-left transition-all duration-300 ease-out ${
                isActive
                  ? "border-brand/35 bg-brand-soft/60 shadow-[0_20px_45px_rgba(0,185,209,0.08)]"
                  : "border-line bg-white hover:border-brand/25 hover:bg-brand-soft/35"
              }`}
              aria-pressed={isActive}
            >
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep/80">
                {slide.eyebrow}
              </p>
              <h4 className="mt-2 font-display text-xl leading-tight tracking-[-0.03em] text-ink">
                {slide.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{slide.note}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
