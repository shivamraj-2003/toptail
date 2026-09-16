import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-magenta-100 bg-white p-5 shadow-card ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-magenta-600">
      {children}
    </p>
  );
}

export function StatCard({
  label,
  value,
  delta,
  deltaTone = "up",
  hint,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "flat";
  hint?: string;
}) {
  const toneClass =
    deltaTone === "up"
      ? "bg-sage-100 text-sage-700"
      : deltaTone === "down"
      ? "bg-magenta-100 text-magenta-700"
      : "bg-cream-100 text-plum-600";
  return (
    <Card>
      <p className="text-xs font-medium uppercase tracking-wide text-plum-500">{label}</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="font-display text-2xl font-semibold text-plum-900">{value}</p>
        {delta && (
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${toneClass}`}>
            {delta}
          </span>
        )}
      </div>
      {hint && <p className="mt-1 text-xs text-plum-500/70">{hint}</p>}
    </Card>
  );
}

export function Pill({
  tone = "plum",
  children,
}: {
  tone?: "plum" | "magenta" | "sage" | "amber" | "gray";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    plum: "bg-plum-800/10 text-plum-700",
    magenta: "bg-magenta-100 text-magenta-700",
    sage: "bg-sage-100 text-sage-700",
    amber: "bg-amber-100 text-amber-700",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function StatusPill({ status }: { status: string }) {
  const map: Record<string, "sage" | "magenta" | "amber" | "gray" | "plum"> = {
    Paid: "sage",
    Completed: "sage",
    Booked: "plum",
    Billed: "magenta",
    "Balance due": "amber",
    "Advance paid": "amber",
    Cancelled: "gray",
    Active: "sage",
    Due: "amber",
    Overdue: "magenta",
    "Not called": "gray",
    "Call later": "amber",
    "Not interested": "gray",
  };
  return <Pill tone={map[status] ?? "gray"}>{status}</Pill>;
}

export function PrimaryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full bg-magenta-600 px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:bg-magenta-700 ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full border border-magenta-200 bg-white px-4 py-2 text-sm font-medium text-plum-700 transition hover:border-magenta-400 hover:text-magenta-700 ${className}`}
    >
      {children}
    </button>
  );
}
