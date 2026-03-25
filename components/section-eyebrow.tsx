type SectionEyebrowProps = {
  children: React.ReactNode;
};

export function SectionEyebrow({ children }: SectionEyebrowProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-deep">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}

