import { Card, CardHead, PageHeader, Btn, Table, Td, StatusPill, StatCard } from "@/components/ui";
import { Icon } from "@/components/icon";
import { pendaftaran } from "@/lib/data";

const tabs = ["Semua", "Rawat Jalan", "IGD", "Rawat Inap"];

export default function Pendaftaran() {
  return (
    <>
      <PageHeader
        title="Pendaftaran Pasien"
        desc="Loket registrasi rawat jalan, rawat inap, dan IGD — terhubung antrean online & SEP BPJS."
        actions={
          <>
            <Btn variant="outline"><Icon name="Search" size={16} /> Cari No. RM</Btn>
            <Btn><Icon name="Plus" size={16} /> Pasien baru</Btn>
          </>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Antrean Loket" value="12" icon={<Icon name="Ticket" size={18} />} />
        <StatCard label="Sudah Dilayani" value="63" accent="info" icon={<Icon name="ClipboardList" size={18} />} />
        <StatCard label="Pasien Baru" value="9" accent="gold" icon={<Icon name="CircleUserRound" size={18} />} />
        <StatCard label="Via Antrean Online" value="71%" accent="primary" icon={<Icon name="Activity" size={18} />} />
      </div>

      <Card className="mt-6">
        <div className="flex flex-wrap items-center gap-1 border-b border-ink-200 px-3 py-2">
          {tabs.map((t, i) => (
            <button key={t} className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${i === 0 ? "bg-primary-50 text-primary-700" : "text-ink-500 hover:bg-ink-100"}`}>
              {t}
            </button>
          ))}
          <span className="ml-auto hidden text-xs text-ink-400 sm:block">Diperbarui 14:36 WIB</span>
        </div>
        <Table head={["No. Registrasi", "Pasien", "Umur / JK", "Tujuan", "Penjamin", "Status", ""]}>
          {pendaftaran.map((p) => (
            <tr key={p.no} className="hover:bg-ink-50">
              <Td><span className="font-mono text-xs text-ink-500">{p.no}</span></Td>
              <Td>
                <div className="font-semibold text-ink-900">{p.nama}</div>
                <div className="font-mono text-[11px] text-ink-400">RM {p.norm}</div>
              </Td>
              <Td>{p.umur} · {p.jk}</Td>
              <Td>
                <div className="text-ink-700">{p.tujuan}</div>
                <div className="text-xs text-ink-400">{p.layanan}</div>
              </Td>
              <Td>
                <span className={`rounded-md px-2 py-0.5 text-xs font-semibold ${p.penjamin === "BPJS" ? "bg-primary-50 text-primary-700" : p.penjamin === "Umum" ? "bg-gold-400/15 text-gold-600" : "bg-info/10 text-info"}`}>
                  {p.penjamin}
                </span>
              </Td>
              <Td><StatusPill>{p.status}</StatusPill></Td>
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
