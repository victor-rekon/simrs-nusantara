import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard, Bar } from "@/components/ui";
import { Icon } from "@/components/icon";
import { resep, stokObat } from "@/lib/data";

export default function Farmasi() {
  return (
    <>
      <PageHeader
        title="Farmasi & Apotek"
        desc="Antrean e-resep, peracikan, penyerahan obat, dan pengendalian stok gudang farmasi."
        actions={<Btn><Icon name="Plus" size={16} /> Input resep manual</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Antrean Resep" value="14" icon={<Icon name="Pill" size={18} />} />
        <StatCard label="Siap Diserahkan" value="6" accent="primary" icon={<Icon name="ClipboardList" size={18} />} />
        <StatCard label="Item Stok Kritis" value="2" accent="crit" icon={<Icon name="Siren" size={18} />} />
        <StatCard label="Omzet Hari Ini" value="Rp 38,4 jt" accent="gold" icon={<Icon name="Receipt" size={18} />} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <Card>
          <CardHead title="Antrean Resep" sub="e-Resep dari poliklinik & IGD" />
          <Table head={["No. Resep", "Pasien", "Asal", "Item", "Status"]}>
            {resep.map((r) => (
              <tr key={r.no} className="hover:bg-ink-50">
                <Td><span className="font-mono text-xs text-ink-500">{r.no}</span></Td>
                <Td className="font-semibold text-ink-900">{r.nama}</Td>
                <Td className="text-ink-600">{r.asal}</Td>
                <Td><span className="tnum">{r.item}</span></Td>
                <Td><StatusPill>{r.status}</StatusPill></Td>
              </tr>
            ))}
          </Table>
        </Card>

        <Card>
          <CardHead title="Pengendalian Stok" sub="Gudang farmasi sentral" action={<Btn variant="ghost" className="!px-2 text-primary-600"><Icon name="Boxes" size={16} /></Btn>} />
          <div className="divide-y divide-ink-100">
            {stokObat.map((o) => (
              <div key={o.kode} className="px-5 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{o.nama}</p>
                    <p className="text-xs text-ink-400">{o.kategori} · <span className="font-mono">{o.kode}</span></p>
                  </div>
                  <StatusPill>{o.status}</StatusPill>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Bar value={o.stok} max={Math.max(o.min * 2.5, o.stok)} tone={o.status === "Kritis" ? "crit" : o.status === "Menipis" ? "warn" : "primary"} />
                  <span className="tnum w-28 shrink-0 text-right text-xs text-ink-500">{o.stok} / min {o.min} {o.satuan}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
