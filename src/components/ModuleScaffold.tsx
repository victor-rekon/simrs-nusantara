import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";

type Stat = { label: string; value: string; accent?: "primary" | "gold" | "info" | "crit"; icon: string };
type Cell = string | { badge: string } | { mono: string };

export default function ModuleScaffold({
  title, desc, primaryAction = "Tambah", icon = "LayoutGrid",
  stats, head, rows, tableTitle, tableSub,
}: {
  title: string; desc: string; primaryAction?: string; icon?: string;
  stats: Stat[]; head: string[]; rows: Cell[][]; tableTitle: string; tableSub?: string;
}) {
  return (
    <>
      <PageHeader title={title} desc={desc} actions={<Btn><Icon name="Plus" size={16} /> {primaryAction}</Btn>} />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} accent={s.accent} icon={<Icon name={s.icon} size={18} />} />
        ))}
      </div>

      <Card className="mt-6">
        <CardHead title={tableTitle} sub={tableSub} />
        <Table head={head}>
          {rows.map((r, ri) => (
            <tr key={ri} className="hover:bg-ink-50">
              {r.map((c, ci) => (
                <Td key={ci} className={ci === 0 ? "font-semibold text-ink-900" : ""}>
                  {typeof c === "string" ? (
                    c
                  ) : "badge" in c ? (
                    <StatusPill>{c.badge}</StatusPill>
                  ) : (
                    <span className="font-mono text-xs text-ink-500">{c.mono}</span>
                  )}
                </Td>
              ))}
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
