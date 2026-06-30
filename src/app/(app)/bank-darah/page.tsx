import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard, SectionLabel } from "@/components/ui";
import { Icon } from "@/components/icon";
import { ColdChainCard } from "@/components/iot";
import { coldChain } from "@/lib/iot";

const stokDarah = [
  { gol: "A+", prc: "14", wb: "3", tc: "6", ffp: "5", status: "Aman" },
  { gol: "B+", prc: "11", wb: "2", tc: "4", ffp: "3", status: "Aman" },
  { gol: "O+", prc: "8", wb: "1", tc: "2", ffp: "2", status: "Menipis" },
  { gol: "AB+", prc: "5", wb: "0", tc: "1", ffp: "1", status: "Menipis" },
  { gol: "O-", prc: "2", wb: "0", tc: "0", ffp: "1", status: "Kritis" },
];

export default function BankDarah() {
  const fridges = coldChain.filter((d) => d.lokasi === "Bank Darah");
  return (
    <>
      <PageHeader
        title="Bank Darah"
        desc="Stok komponen darah, permintaan transfusi, crossmatch, dan ketertelusuran kantong."
        actions={<Btn><Icon name="Plus" size={16} /> Permintaan darah</Btn>}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Stok Total (kantong)" value="138" icon={<Icon name="Droplets" size={18} />} />
        <StatCard label="Golongan O Kritis" value="8" accent="crit" icon={<Icon name="Siren" size={18} />} />
        <StatCard label="Permintaan Aktif" value="5" accent="gold" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="Crossmatch Hari Ini" value="12" accent="primary" icon={<Icon name="FlaskConical" size={18} />} />
      </div>

      <div className="mt-8">
        <SectionLabel>Suhu Penyimpanan — Live</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {fridges.map((d) => <ColdChainCard key={d.id} d={d} />)}
        </div>
      </div>

      <Card className="mt-8">
        <CardHead title="Stok Komponen Darah" sub="Per golongan & jenis komponen" />
        <Table head={["Golongan", "PRC", "WB", "TC", "FFP", "Status"]}>
          {stokDarah.map((s) => (
            <tr key={s.gol} className="hover:bg-ink-50">
              <Td className="font-semibold text-ink-900">{s.gol}</Td>
              <Td>{s.prc}</Td>
              <Td>{s.wb}</Td>
              <Td>{s.tc}</Td>
              <Td>{s.ffp}</Td>
              <Td><StatusPill>{s.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
