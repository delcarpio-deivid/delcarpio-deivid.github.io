import type { ProjectStatus } from "../../content/sections";

const STATUS_LABELS: Record<ProjectStatus, string> = {
  production: "En producción",
  demo: "Demo",
  development: "En desarrollo",
  paused: "Pausado",
};

interface ProjectStatusChipProps {
  status: ProjectStatus;
}

export function ProjectStatusChip({ status }: ProjectStatusChipProps) {
  return (
    <span className="inline-flex items-center border border-line-subtle bg-bg-alt px-12 py-4 font-mono text-[11px] text-ink-secondary">
      {STATUS_LABELS[status]}
    </span>
  );
}
