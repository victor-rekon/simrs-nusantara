import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard, SectionLabel } from "@/components/ui";
import { Icon } from "@/components/icon";
import { FleetCard } from "@/components/iot";
import { fleetGps } from "@/lib/iot";

const armada = [
  { unit: "AMB-04", tipe: "Jenazah", sopir: "—", penugasan: "Standby", status: "Tersedia" },
  { unit: "AMB-05", tipe: "Basic Life Support", sopir: "—", penugasan: "Servis berkala", status: "Maintenance" },
];

export default function Ambulans() {
  return (
    <>
      <PageHeader
        title="Ambulans & Transport"
        desc="Armada ambulans, status unit, penugasan rujukan, dan pelacakan GPS real-time."
        actions={<Btn><Icon name="Plus" size={16} /> Buat penugasan</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Armada Total" value="6" icon={<Icon name="Ambulance" size={18} />} />
        <StatCard label="Tersedia" value="3" accent="primary" icon={<Icon name="ShieldCheck" size={18} />} />
        <StatCard label="Bertugas" value="2" accent="info" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="Maintenance" value="1" accent="crit" icon={<Icon name="Wrench" size={18} />} />
      </div>

      <div className="mt-8">
        <SectionLabel>Pelacakan GPS — Live</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {fleetGps.map((d) => <FleetCard key={d.id} d={d} />)}
        </div>
      </div>

      <Card className="mt-8">
        <CardHead title="Armada Non-GPS" sub="Unit cadangan / di luar pemantauan aktif" />
        <Table head={["Unit", "Tipe", "Sopir", "Penugasan", "Status"]}>
          {armada.map((a) => (
            <tr key={a.unit} className="hover:bg-ink-50">
              <Td className="font-semibold text-ink-900">{a.unit}</Td>
              <Td>{a.tipe}</Td>
              <Td>{a.sopir}</Td>
              <Td className="text-ink-600">{a.penugasan}</Td>
              <Td><StatusPill>{a.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
