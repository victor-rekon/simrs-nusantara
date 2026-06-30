import { Card, CardHead, PageHeader, StatCard, Btn, SectionLabel } from "@/components/ui";
import { Icon } from "@/components/icon";
import { bangsal, type BedStatus } from "@/lib/data";
import { VitalCard } from "@/components/iot";
import { icuVitals } from "@/lib/iot";

const bedTone: Record<BedStatus, string> = {
  Terisi: "bg-primary-600 text-white border-primary-700",
  Kosong: "bg-white text-ink-400 border-ink-200",
  Booking: "bg-warn/15 text-warn border-warn/30",
  Maintenance: "bg-ink-200 text-ink-500 border-ink-300",
};
const legend: { s: BedStatus; label: string }[] = [
  { s: "Terisi", label: "Terisi" },
  { s: "Kosong", label: "Kosong" },
  { s: "Booking", label: "Booking" },
  { s: "Maintenance", label: "Perbaikan" },
];

export default function Bed() {
  const all = bangsal.flatMap((b) => b.beds);
  const terisi = all.filter((s) => s === "Terisi").length;
  const kosong = all.filter((s) => s === "Kosong").length;
  const bor = Math.round((terisi / all.length) * 100);

  return (
    <>
      <PageHeader
        title="Manajemen Bed"
        desc="Peta ketersediaan tempat tidur per bangsal — sinkron dengan Aplicares BPJS."
        actions={<Btn variant="outline"><Icon name="Cable" size={16} /> Sync Aplicares</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total Bed" value={all.length.toString()} icon={<Icon name="BedDouble" size={18} />} />
        <StatCard label="Terisi" value={terisi.toString()} accent="primary" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="Tersedia" value={kosong.toString()} accent="info" icon={<Icon name="LayoutGrid" size={18} />} />
        <StatCard label="Occupancy (BOR)" value={`${bor}%`} accent="gold" icon={<Icon name="BarChart3" size={18} />} />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-ink-200 bg-white px-4 py-3 text-xs font-medium text-ink-600">
        <span className="text-ink-400">Keterangan:</span>
        {legend.map((l) => (
          <span key={l.s} className="flex items-center gap-1.5">
            <span className={`h-3.5 w-3.5 rounded border ${bedTone[l.s]}`} />{l.label}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {bangsal.map((b) => {
          const t = b.beds.filter((s) => s === "Terisi").length;
          return (
            <Card key={b.nama}>
              <CardHead
                title={b.nama}
                sub={`${t}/${b.beds.length} terisi`}
                action={<span className="rounded-md bg-ink-100 px-2 py-0.5 text-xs font-bold text-ink-600">Kelas {b.kelas}</span>}
              />
              <div className="grid grid-cols-6 gap-2 p-4 sm:grid-cols-8">
                {b.beds.map((s, i) => (
                  <div
                    key={i}
                    title={`Bed ${i + 1} — ${s}`}
                    className={`grid aspect-square place-items-center rounded-lg border text-[11px] font-bold transition hover:scale-105 ${bedTone[s]}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <SectionLabel>Monitor Vital ICU — Live</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {icuVitals.map((d) => <VitalCard key={d.bed} d={d} />)}
        </div>
      </div>
    </>
  );
}
