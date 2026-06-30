import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";
import { tagihan, rupiah } from "@/lib/data";

export default function Billing() {
  const total = tagihan.reduce((a, t) => a + t.total, 0);
  return (
    <>
      <PageHeader
        title="Billing & Kasir"
        desc="Rincian tagihan pelayanan, pembayaran kasir, dan routing ke klaim penjamin."
        actions={
          <>
            <Btn variant="outline"><Icon name="Receipt" size={16} /> Tutup kasir</Btn>
            <Btn><Icon name="Plus" size={16} /> Pembayaran</Btn>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Transaksi Hari Ini" value="148" icon={<Icon name="Receipt" size={18} />} />
        <StatCard label="Total Tagihan" value={`Rp ${(total / 1_000_000).toFixed(1)} jt`} accent="info" icon={<Icon name="Banknote" size={18} />} />
        <StatCard label="Belum Dibayar" value="Rp 2,1 jt" accent="gold" icon={<Icon name="Scale" size={18} />} />
        <StatCard label="Via BPJS" value="62%" accent="primary" icon={<Icon name="ShieldCheck" size={18} />} />
      </div>

      <Card className="mt-6">
        <CardHead title="Daftar Tagihan" sub="Terbaru di atas" />
        <Table head={["No. Invoice", "Pasien", "Layanan", "Penjamin", "Total", "Status", ""]}>
          {tagihan.map((t) => (
            <tr key={t.no} className="hover:bg-ink-50">
              <Td><span className="font-mono text-xs text-ink-500">{t.no}</span></Td>
              <Td className="font-semibold text-ink-900">{t.nama}</Td>
              <Td className="text-ink-600">{t.layanan}</Td>
              <Td>{t.penjamin}</Td>
              <Td><span className="tnum font-bold text-ink-900">{rupiah(t.total)}</span></Td>
              <Td><StatusPill>{t.status}</StatusPill></Td>
              <Td className="text-right">
                <button className="focusable rounded-lg p-1.5 text-ink-400 hover:bg-ink-100 hover:text-primary-600"><Icon name="ChevronRight" size={16} /></button>
              </Td>
            </tr>
          ))}
        </Table>
      </Card>
    </>
  );
}
