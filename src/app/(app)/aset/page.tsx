import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard, SectionLabel } from "@/components/ui";
import { Icon } from "@/components/icon";
import { EquipmentCard } from "@/components/iot";
import { criticalEquipment } from "@/lib/iot";

const maintenance = [
  { id: "AST-VEN-04", nama: "Ventilator", lokasi: "ICU", jadwal: "Kalibrasi 02 Jul", status: "Terjadwal" },
  { id: "AST-USG-02", nama: "USG 4D", lokasi: "Poli Kandungan", jadwal: "Servis", status: "Perbaikan" },
  { id: "AST-XR-01", nama: "X-Ray mobile", lokasi: "Radiologi", jadwal: "OK", status: "Aman" },
  { id: "AST-DEF-03", nama: "Defibrillator", lokasi: "IGD", jadwal: "Kalibrasi 30 Jun", status: "Selesai" },
];

export default function Aset() {
  return (
    <>
      <PageHeader
        title="Aset & IPSRS"
        desc="Inventaris aset medis & non-medis, kalibrasi alat, dan pemeliharaan sarana prasarana."
        actions={<Btn><Icon name="Plus" size={16} /> Jadwalkan maintenance</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total Aset" value="3.860" icon={<Icon name="Wrench" size={18} />} />
        <StatCard label="Jadwal Kalibrasi" value="12" accent="gold" icon={<Icon name="CalendarClock" size={18} />} />
        <StatCard label="Perbaikan Aktif" value="7" accent="crit" icon={<Icon name="Siren" size={18} />} />
        <StatCard label="Uptime Alat Vital" value="98,6%" accent="primary" icon={<Icon name="Activity" size={18} />} />
      </div>

      <div className="mt-8">
        <SectionLabel>Status Alat Tersambung IoT — Live</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {criticalEquipment.map((d) => <EquipmentCard key={d.id} d={d} />)}
        </div>
      </div>

      <Card className="mt-8">
        <CardHead title="Pemeliharaan & Kalibrasi" sub="Alat medis prioritas" />
        <Table head={["No. Aset", "Nama Alat", "Lokasi", "Jadwal", "Status"]}>
          {maintenance.map((m) => (
            <tr key={m.id} className="hover:bg-ink-50">
              <Td><span className="font-mono text-xs text-ink-500">{m.id}</span></Td>
              <Td className="font-semibold text-ink-900">{m.nama}</Td>
              <Td className="text-ink-600">{m.lokasi}</Td>
              <Td>{m.jadwal}</Td>
              <Td><StatusPill>{m.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
