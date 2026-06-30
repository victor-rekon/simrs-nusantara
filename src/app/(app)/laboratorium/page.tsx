import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";
import { labOrder } from "@/lib/data";

export default function Lab() {
  return (
    <>
      <PageHeader
        title="Laboratorium"
        desc="Order pemeriksaan, alur sampling–proses–validasi, dan rilis hasil ke RME."
        actions={<Btn><Icon name="Plus" size={16} /> Order baru</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Order Hari Ini" value="91" icon={<Icon name="FlaskConical" size={18} />} />
        <StatCard label="Menunggu Sampling" value="7" accent="gold" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="CITO Aktif" value="2" accent="crit" icon={<Icon name="Siren" size={18} />} />
        <StatCard label="Selesai & Tervalidasi" value="64" accent="primary" icon={<Icon name="ShieldCheck" size={18} />} />
      </div>

      <Card className="mt-6">
        <CardHead title="Daftar Order Pemeriksaan" sub="Antrean laboratorium klinik & patologi" />
        <Table head={["No. Order", "Pasien", "Asal", "Paket Pemeriksaan", "Prioritas", "Status"]}>
          {labOrder.map((o) => (
            <tr key={o.no} className="hover:bg-ink-50">
              <Td><span className="font-mono text-xs text-ink-500">{o.no}</span></Td>
              <Td className="font-semibold text-ink-900">{o.nama}</Td>
              <Td className="text-ink-600">{o.asal}</Td>
              <Td><span className="text-ink-700">{o.paket}</span></Td>
              <Td>
                <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${o.prioritas === "CITO" ? "bg-crit/10 text-crit" : "bg-ink-100 text-ink-500"}`}>
                  {o.prioritas}
                </span>
              </Td>
              <Td><StatusPill>{o.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
