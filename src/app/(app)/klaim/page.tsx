import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";
import { klaim, rupiah } from "@/lib/data";

export default function Klaim() {
  const total = klaim.reduce((a, k) => a + k.tarif, 0);
  return (
    <>
      <PageHeader
        title="Klaim BPJS — INA-CBG"
        desc="Pengajuan klaim berbasis SEP & grouping INA-CBG, terhubung VClaim BPJS Kesehatan."
        actions={
          <>
            <Btn variant="outline"><Icon name="Cable" size={16} /> Tarik data VClaim</Btn>
            <Btn><Icon name="ShieldCheck" size={16} /> Ajukan kolektif</Btn>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Berkas Bulan Ini" value="612" icon={<Icon name="ShieldCheck" size={18} />} />
        <StatCard label="Menunggu Verifikasi" value="38" accent="gold" icon={<Icon name="ClipboardList" size={18} />} />
        <StatCard label="Nominal Diajukan" value={`Rp ${(total / 1_000_000).toFixed(1)} jt`} accent="info" icon={<Icon name="Banknote" size={18} />} />
        <StatCard label="Tingkat Kelayakan" value="94%" accent="primary" icon={<Icon name="Activity" size={18} />} />
      </div>

      <Card className="mt-6">
        <CardHead title="Daftar Klaim" sub="Grouping INA-CBG per episode pelayanan" />
        <Table head={["No. SEP", "Pasien", "Kode INA-CBG", "Tarif", "Verifikator", "Status"]}>
          {klaim.map((k) => (
            <tr key={k.sep} className="hover:bg-ink-50">
              <Td><span className="font-mono text-[11px] text-ink-500">{k.sep}</span></Td>
              <Td className="font-semibold text-ink-900">{k.nama}</Td>
              <Td><span className="text-ink-700">{k.cbg}</span></Td>
              <Td><span className="tnum font-bold text-ink-900">{rupiah(k.tarif)}</span></Td>
              <Td className="text-ink-600">{k.verif}</Td>
              <Td><StatusPill>{k.status}</StatusPill></Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
