import { Card, CardHead, StatCard, PageHeader, Btn, SectionLabel, StatusPill } from "@/components/ui";
import { Icon } from "@/components/icon";
import { KunjunganChart, PendapatanChart, MixDonut, PoliBar, Spark } from "@/components/charts";
import {
  KPI, kunjunganSeri, pendapatanSeri, penjaminMix, poliBeban, ribu, rupiah, stokObat, klaim,
} from "@/lib/data";

const tanggal = new Intl.DateTimeFormat("id-ID", {
  weekday: "long", day: "numeric", month: "long", year: "numeric",
}).format(new Date("2026-06-30"));

export default function Dashboard() {
  const stokKritis = stokObat.filter((o) => o.status === "Kritis" || o.status === "Menipis");
  return (
    <>
      <PageHeader
        title="Dashboard Eksekutif"
        desc={`Ringkasan operasional rumah sakit — ${tanggal}`}
        actions={
          <>
            <Btn variant="outline"><Icon name="BarChart3" size={16} /> Laporan harian</Btn>
            <Btn><Icon name="Plus" size={16} /> Registrasi pasien</Btn>
          </>
        }
      />

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Pasien Hari Ini" value={KPI.pasienHariIni.toString()}
          delta={`${KPI.pasienDelta}%`} icon={<Icon name="Activity" size={18} />}
          foot={<Spark data={[320, 298, 351, 312, 287, 410, 487]} />}
        />
        <StatCard
          label="Bed Occupancy Rate" value={`${KPI.bor}%`} accent="gold"
          delta={`${KPI.borDelta}%`} icon={<Icon name="BedDouble" size={18} />}
          foot={<div className="text-xs text-ink-500">214 dari 274 bed terisi</div>}
        />
        <StatCard
          label="Pasien IGD Aktif" value={KPI.igdAktif.toString()} accent="crit"
          icon={<Icon name="Siren" size={18} />}
          foot={<div className="text-xs text-ink-500">2 triase merah · 5 kuning · 7 hijau</div>}
        />
        <StatCard
          label="Pendapatan Hari Ini" value={`Rp ${ribu(KPI.pendapatanHariIni)}`} accent="info"
          delta={`${KPI.pendapatanDelta}%`} icon={<Icon name="Receipt" size={18} />}
          foot={<Spark data={[280, 310, 295, 340, 360, 390, 412]} color="#0284C7" />}
        />
      </div>

      {/* Charts row 1 */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHead title="Kunjungan Pasien" sub="7 hari terakhir, per jenis pelayanan"
            action={<span className="rounded-lg bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-600">Minggu ini</span>} />
          <div className="p-4"><KunjunganChart data={kunjunganSeri} /></div>
        </Card>
        <Card>
          <CardHead title="Komposisi Penjamin" sub="Berdasarkan kunjungan" />
          <div className="p-4">
            <MixDonut data={penjaminMix} />
            <ul className="mt-2 space-y-2">
              {penjaminMix.map((p) => (
                <li key={p.name} className="flex items-center gap-2 text-sm">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.fill }} />
                  <span className="flex-1 text-ink-600">{p.name}</span>
                  <span className="tnum font-bold text-ink-800">{p.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      {/* Charts row 2 */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHead title="Pendapatan per Bulan" sub="Dalam miliar Rupiah, per sumber pembayaran" />
          <div className="p-4"><PendapatanChart data={pendapatanSeri} /></div>
        </Card>
        <Card>
          <CardHead title="Beban Poliklinik" sub="Antrean vs kuota hari ini" />
          <div className="p-4"><PoliBar data={poliBeban} /></div>
        </Card>
      </div>

      {/* Alerts */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHead title="Peringatan Stok Farmasi" sub={`${stokKritis.length} item perlu perhatian`}
            action={<Btn variant="ghost" className="!px-2 text-primary-600"><Icon name="ChevronRight" size={16} /></Btn>} />
          <ul className="divide-y divide-ink-100">
            {stokKritis.map((o) => (
              <li key={o.kode} className="flex items-center gap-3 px-5 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-warn/10 text-warn"><Icon name="Pill" size={16} /></span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink-800">{o.nama}</p>
                  <p className="text-xs text-ink-500">Sisa {o.stok} {o.satuan} · min {o.min}</p>
                </div>
                <StatusPill>{o.status}</StatusPill>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHead title="Klaim BPJS Menunggu" sub={`Nominal ${rupiah(KPI.klaimNominal)} · ${KPI.klaimPending} berkas`}
            action={<Btn variant="ghost" className="!px-2 text-primary-600"><Icon name="ChevronRight" size={16} /></Btn>} />
          <ul className="divide-y divide-ink-100">
            {klaim.filter((k) => k.status !== "Disetujui").map((k) => (
              <li key={k.sep} className="flex items-center gap-3 px-5 py-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-info/10 text-info"><Icon name="ShieldCheck" size={16} /></span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink-800">{k.nama}</p>
                  <p className="text-xs text-ink-500">{k.cbg}</p>
                </div>
                <div className="text-right">
                  <p className="tnum text-sm font-bold text-ink-800">{rupiah(k.tarif)}</p>
                  <StatusPill>{k.status}</StatusPill>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
