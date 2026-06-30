import { Card, CardHead, PageHeader, Btn, StatusPill, SectionLabel } from "@/components/ui";
import { Icon } from "@/components/icon";
import { rme, rmeDetail } from "@/lib/data";

const vitals = [
  { label: "Tekanan Darah", key: "td", unit: "mmHg", icon: "Activity" },
  { label: "Nadi", key: "nadi", unit: "x/mnt", icon: "HeartPulse" },
  { label: "Suhu", key: "suhu", unit: "°C", icon: "Activity" },
  { label: "Resp. Rate", key: "rr", unit: "x/mnt", icon: "Activity" },
  { label: "SpO₂", key: "spo2", unit: "%", icon: "HeartPulse" },
  { label: "Berat / Tinggi", key: "bb", unit: "kg", icon: "Activity" },
] as const;

export default function RME() {
  const d = rmeDetail;
  return (
    <>
      <PageHeader
        title="Rekam Medis Elektronik"
        desc="RME terintegrasi sesuai Permenkes 24/2022 — riwayat klinis, SOAP, diagnosa ICD-10, dan resume medis."
        actions={<Btn><Icon name="Plus" size={16} /> CPPT baru</Btn>}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[320px_1fr]">
        {/* Patient list */}
        <Card className="h-fit">
          <CardHead title="Pasien" sub={`${rme.length} rekam medis aktif`} />
          <ul className="divide-y divide-ink-100">
            {rme.map((p, i) => (
              <li key={p.norm}>
                <button className={`flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-ink-50 ${i === 0 ? "bg-primary-50/60" : ""}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold ${p.jk === "P" ? "bg-grape/10 text-grape" : "bg-info/10 text-info"}`}>
                    {p.nama.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink-900">{p.nama}</p>
                    <p className="font-mono text-[11px] text-ink-400">RM {p.norm}</p>
                  </div>
                  {i === 0 && <Icon name="ChevronRight" size={16} className="text-primary-500" />}
                </button>
              </li>
            ))}
          </ul>
        </Card>

        {/* Record detail */}
        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-grape/10 text-xl font-extrabold text-grape">
                  {d.pasien.nama.charAt(0)}
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-ink-900">{d.pasien.nama}</h2>
                  <p className="text-sm text-ink-500">{d.pasien.umur} · {d.pasien.jk === "P" ? "Perempuan" : "Laki-laki"} · <span className="font-mono">RM {d.pasien.norm}</span></p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-crit/10 px-2.5 py-1 text-xs font-bold text-crit">
                  <Icon name="Siren" size={13} /> Alergi: {d.pasien.alergi}
                </span>
                <StatusPill>{d.pasien.dx}</StatusPill>
              </div>
            </div>
          </Card>

          {/* Vitals */}
          <Card>
            <CardHead title="Tanda Vital Terakhir" sub="30 Jun 2026 · 09:14" />
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-2xl bg-ink-100 sm:grid-cols-3">
              {vitals.map((v) => (
                <div key={v.label} className="bg-white p-4">
                  <p className="text-xs text-ink-500">{v.label}</p>
                  <p className="tnum mt-1 text-xl font-extrabold text-ink-900">
                    {v.key === "bb" ? `${d.vital.bb}/${d.vital.tb}` : (d.vital as any)[v.key]}
                    <span className="ml-1 text-xs font-medium text-ink-400">{v.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* SOAP */}
          <div>
            <SectionLabel>Catatan Perkembangan (CPPT / SOAP)</SectionLabel>
            <div className="space-y-3">
              {d.soap.map((s, i) => (
                <Card key={i} className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-ink-500">{s.tgl}</span>
                    <span className="rounded-md bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700">{s.dokter}</span>
                  </div>
                  <dl className="space-y-2.5 text-sm">
                    {[["S", s.s], ["O", s.o], ["A", s.a], ["P", s.p]].map(([k, v]) => (
                      <div key={k} className="flex gap-3">
                        <dt className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-ink-100 text-xs font-extrabold text-ink-600">{k}</dt>
                        <dd className="text-ink-700">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
