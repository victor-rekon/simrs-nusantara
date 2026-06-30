import ModuleScaffold from "@/components/ModuleScaffold";
import { pegawai } from "@/lib/data";
export default function Page() {
  return (
    <ModuleScaffold
      title="Kepegawaian / SDM" icon="Users" primaryAction="Tambah pegawai"
      desc="Data induk pegawai medis & non-medis, STR/SIP, dan kredensial tenaga kesehatan."
      stats={[
        { label: "Total Pegawai", value: "612", icon: "Users" },
        { label: "Tenaga Medis", value: "184", accent: "primary", icon: "Stethoscope" },
        { label: "STR Akan Habis (90 hr)", value: "9", accent: "crit", icon: "Siren" },
        { label: "Cuti / Izin Hari Ini", value: "14", accent: "gold", icon: "CalendarClock" },
      ]}
      tableTitle="Data Pegawai" tableSub="Kredensial & status STR/SIP"
      head={["NIP", "Nama", "Unit", "Jabatan", "Status"]}
      rows={pegawai.map((p) => [{ mono: p.nip } as any, p.nama, p.unit, p.role, { badge: p.status }])}
    />
  );
}
