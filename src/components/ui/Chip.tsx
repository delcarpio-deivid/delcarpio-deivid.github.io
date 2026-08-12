interface ChipProps {
  children: string;
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-flex items-center bg-accent-soft px-12 py-4 font-mono text-[12px] text-ink">
      {children}
    </span>
  );
}
