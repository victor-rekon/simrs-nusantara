import { Card, CardHead, PageHeader, Btn, StatCard, StatusPill } from "@/components/ui";
import { Icon } from "@/components/icon";
import { igd } from "@/lib/data";

const triaseColor: Record<string, string> = {
  Merah: "border-crit/40 bg-crit/[0.04]",
  Kuning: "border-warn/40 bg-warn/[0.04]",
  Hijau: "border-ok/40 bg-ok/[0.04]",
  Hitam: "border-ink-400 bg-ink-100",
};
const dot: Record<string, string> = {
  Merah: "bg-crit", Kuning: "bg-warn", Hijau: "bg-ok", Hitam: "bg-ink-800",
};

export default function IGD() {
  return (
    <>
      <PageHeader
        title="IGD — Papan Triase"
        desc="Pemantauan real-time pasien gawat darurat berdasarkan tingkat kegawatan (ESI/ATS)."
        actions={<Btn><Icon name="Plus" size={16} /> Pasien IGD baru</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Triase Merah" value="2" accent="crit" icon={<Icon name="Siren" size={18} />} />
        <StatCard label="Triase Kuning" value="5" accent="gold" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="Triase Hijau" value="7" accent="primary" icon={<Icon name="HeartPulse" size={18} />} />
        <StatCard label="Bed IGD Tersedia" value="6 / 20" accent="info" icon={<Icon name="BedDouble" size={18} />} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {igd.map((p) => (
          <div key={p.no} className={`animate-fadeup rounded-2xl border-2 ${triaseColor[p.triase]} p-4 shadow-card`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${dot[p.triase]} ${p.triase === "Merah" ? "animate-pulse2" : ""}`} />
                <span className="text-sm font-extrabold text-ink-900">Triase {p.triase}</span>
              </div>
              <span className="font-mono text-[11px] text-ink-400">{p.no}</span>
            </div>
            <div className="mt-3">
              <p className="text-base font-bold text-ink-900">{p.nama}</p>
              <p className="text-xs text-ink-500">{p.umur} · masuk {p.masuk}</p>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-ink-700">{p.keluhan}</p>
            <div className="mt-3 space-y-1 border-t border-ink-200/70 pt-3 text-xs">
              <div className="flex gap-2"><span className="text-ink-400">DPJP</span><span className="font-semibold text-ink-700">{p.dokter}</span></div>
              <div className="flex gap-2"><span className="text-ink-400">Tindakan</span><span className="font-medium text-ink-600">{p.tindakan}</span></div>
            </div>
          </div>
        ))}
      </div>

      <Card className="mt-6">
        <CardHead title="Alur IGD" sub="Standar respons berdasarkan triase" />
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-b-2xl bg-ink-200 sm:grid-cols-4">
          {[
            { t: "Triase", d: "Penilaian ≤ 5 menit", i: "Siren" },
            { t: "Tindakan", d: "Resusitasi / stabilisasi", i: "HeartPulse" },
            { t: "Observasi", d: "Monitor tanda vital", i: "Activity" },
            { t: "Disposisi", d: "Ranap / rujuk / pulang", i: "ChevronRight" },
          ].map((s) => (
            <div key={s.t} className="bg-white p-4">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-50 text-primary-600"><Icon name={s.i} size={17} /></span>
              <p className="mt-2 text-sm font-bold text-ink-800">{s.t}</p>
              <p className="text-xs text-ink-500">{s.d}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
