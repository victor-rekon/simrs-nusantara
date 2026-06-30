import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";
import Link from "next/link";

const ranap = [
  { rm: "00-29-44-51", nama: "Maria Goretti", kamar: "Melati 3 / 304-A", dpjp: "dr. Maharani, Sp.OG", dx: "O80 — Post partum", masuk: "28 Jun", hari: 2, penjamin: "BPJS", status: "Dirawat" },
  { rm: "00-71-88-02", nama: "Joko Susilo", kamar: "ICU / 02", dpjp: "dr. Rangga, Sp.JP", dx: "I21 — STEMI", masuk: "30 Jun", hari: 0, penjamin: "BPJS", status: "Tindakan" },
  { rm: "00-50-21-77", nama: "Agus Salim", kamar: "Anggrek 2 / 210", dpjp: "dr. Wibowo, Sp.OT", dx: "S82 — Fraktur tibia", masuk: "27 Jun", hari: 3, penjamin: "Umum", status: "Dirawat" },
  { rm: "00-66-31-20", nama: "Dewi Anggraini", kamar: "Mawar 1 / 105", dpjp: "dr. Hartono, Sp.PD", dx: "A09 — GEA dehidrasi", masuk: "29 Jun", hari: 1, penjamin: "Asuransi", status: "Rencana Pulang" },
  { rm: "00-18-92-33", nama: "Rudi Hermawan", kamar: "Cendana VIP / 01", dpjp: "dr. Maharani, Sp.OG", dx: "N20 — Batu ureter", masuk: "26 Jun", hari: 4, penjamin: "Perusahaan", status: "Dirawat" },
];

export default function RawatInap() {
  return (
    <>
      <PageHeader
        title="Rawat Inap"
        desc="Sensus harian pasien rawat inap, DPJP, dan lama rawat (LOS)."
        actions={
          <>
            <Link href="/bed"><Btn variant="outline"><Icon name="LayoutGrid" size={16} /> Peta bed</Btn></Link>
            <Btn><Icon name="Plus" size={16} /> Admisi pasien</Btn>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Pasien Dirawat" value="214" icon={<Icon name="BedDouble" size={18} />} />
        <StatCard label="Admisi Hari Ini" value="18" accent="primary" icon={<Icon name="Plus" size={18} />} />
        <StatCard label="Rencana Pulang" value="11" accent="gold" icon={<Icon name="ChevronRight" size={18} />} />
        <StatCard label="Avg. LOS" value="3.4 hari" accent="info" icon={<Icon name="CalendarClock" size={18} />} />
      </div>

      <Card className="mt-6">
        <CardHead title="Daftar Pasien Rawat Inap" sub="Per 30 Jun 2026, 14:36 WIB" />
        <Table head={["Pasien", "Kamar / Bed", "Diagnosa", "DPJP", "LOS", "Penjamin", "Status"]}>
          {ranap.map((p) => (
            <tr key={p.rm} className="hover:bg-ink-50">
              <Td>
                <div className="font-semibold text-ink-900">{p.nama}</div>
                <div className="font-mono text-[11px] text-ink-400">RM {p.rm}</div>
              </Td>
              <Td>{p.kamar}</Td>
              <Td><span className="font-medium text-ink-700">{p.dx}</span></Td>
              <Td className="text-ink-600">{p.dpjp}</Td>
              <Td><span className="tnum">{p.hari} hr</span></Td>
              <Td>{p.penjamin}</Td>
              <Td><StatusPill>{p.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
