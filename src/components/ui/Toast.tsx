import { useEffect } from "react";

export type ToastKind = "success" | "error";

interface ToastProps {
  kind: ToastKind;
  title: string;
  body: string;
  onClose: () => void;
}

export function Toast({ kind, title, body, onClose }: ToastProps) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, 7000);
    return () => window.clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role={kind === "error" ? "alert" : "status"}
      aria-live="polite"
      className="fixed right-24 bottom-24 z-50 w-[min(100%-48px,360px)] border border-line-subtle bg-bg p-24 shadow-[0_8px_24px_#1A1A1A14]"
    >
      <p className="font-mono text-[11px] tracking-[1.2px] text-accent">
        {kind === "success" ? "ENVIADO" : "ERROR"}
      </p>
      <p className="mt-8 font-heading text-[16px] font-semibold text-ink">{title}</p>
      <p className="mt-8 font-body text-[14px] leading-[1.45] text-ink-secondary">{body}</p>
    </div>
  );
}
