import { ReactNode } from "react";
import { statusTone } from "@/lib/data";

export function StatusPill({ children }: { children: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${statusTone(children)}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-ink-200 bg-white shadow-card ${className}`}>{children}</div>
  );
}

export function CardHead({ title, sub, action }: { title: string; sub?: string; action?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink-200 px-5 py-4">
      <div>
        <h3 className="text-[15px] font-bold tracking-tight text-ink-900">{title}</h3>
        {sub && <p className="mt-0.5 text-xs text-ink-500">{sub}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({
  label, value, delta, deltaPositive = true, foot, icon, accent = "primary",
}: {
  label: string; value: string; delta?: string; deltaPositive?: boolean;
  foot?: ReactNode; icon?: ReactNode; accent?: "primary" | "gold" | "info" | "crit";
}) {
  const ring = {
    primary: "text-primary-600 bg-primary-50",
    gold: "text-gold-600 bg-gold-400/15",
    info: "text-info bg-info/10",
    crit: "text-crit bg-crit/10",
  }[accent];
  return (
    <Card className="p-5 animate-fadeup">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-500">{label}</span>
        {icon && <span className={`grid h-9 w-9 place-items-center rounded-xl ${ring}`}>{icon}</span>}
      </div>
      <div className="mt-3 flex items-end gap-2">
        <span className="tnum text-[28px] font-extrabold leading-none tracking-tight text-ink-900">{value}</span>
        {delta && (
          <span className={`mb-0.5 text-xs font-bold ${deltaPositive ? "text-ok" : "text-crit"}`}>
            {deltaPositive ? "▲" : "▼"} {delta}
          </span>
        )}
      </div>
      {foot && <div className="mt-3">{foot}</div>}
    </Card>
  );
}

export function PageHeader({ title, desc, actions }: { title: string; desc?: string; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-ink-900">{title}</h1>
        {desc && <p className="mt-1 max-w-2xl text-sm text-ink-500">{desc}</p>}
      </div>
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Btn({
  children, variant = "primary", className = "",
}: { children: ReactNode; variant?: "primary" | "ghost" | "outline"; className?: string }) {
  const v = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-card",
    ghost: "text-ink-600 hover:bg-ink-100",
    outline: "border border-ink-300 bg-white text-ink-700 hover:bg-ink-50",
  }[variant];
  return (
    <button className={`focusable inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition ${v} ${className}`}>
      {children}
    </button>
  );
}

export function Table({ head, children }: { head: string[]; children: ReactNode }) {
  return (
    <div className="scroll-thin overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink-200 text-xs uppercase tracking-wide text-ink-500">
            {head.map((h, i) => (
              <th key={i} className="whitespace-nowrap px-5 py-3 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100">{children}</tbody>
      </table>
    </div>
  );
}

export function Td({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <td className={`whitespace-nowrap px-5 py-3 text-ink-700 ${className}`}>{children}</td>;
}

export function Bar({ value, max, tone = "primary" }: { value: number; max: number; tone?: "primary" | "warn" | "crit" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const c = { primary: "bg-primary-500", warn: "bg-warn", crit: "bg-crit" }[tone];
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
      <div className={`h-full rounded-full ${c}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-4 w-1 rounded-full bg-primary-500" />
      <h2 className="text-sm font-bold uppercase tracking-wide text-ink-700">{children}</h2>
    </div>
  );
}
