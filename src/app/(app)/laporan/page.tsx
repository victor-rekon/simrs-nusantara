import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Laporan RL / SIRS" icon="BarChart3" primaryAction="Generate laporan"
      desc="Laporan rutin Kemenkes (RL 1–RL 5), SIRS Online, dan laporan internal manajemen."
      stats={[
        { label: "Laporan Bulan Ini", value: "18", icon: "BarChart3" },
        { label: "Terkirim ke SIRS", value: "14", accent: "primary", icon: "Cable" },
        { label: "Menunggu Validasi", value: "3", accent: "gold", icon: "Activity" },
        { label: "Tenggat Terdekat", value: "5 hari", accent: "crit", icon: "CalendarClock" },
      ]}
      tableTitle="Status Laporan Wajib" tableSub="RL & SIRS Online Kemenkes"
      head={["Kode Laporan", "Nama", "Periode", "Tenggat", "Status"]}
      rows={[
        [{ mono: "RL 1.1" } as any, "Data Dasar RS", "Triwulan II", "05 Jul", { badge: "Terkirim" }],
        [{ mono: "RL 3.1" } as any, "Rawat Inap", "Juni 2026", "10 Jul", { badge: "Validasi" }],
        [{ mono: "RL 4a" } as any, "Morbiditas Rawat Inap", "Juni 2026", "10 Jul", { badge: "Draft" }],
        [{ mono: "RL 5.1" } as any, "Pengunjung", "Juni 2026", "10 Jul", { badge: "Terkirim" }],
      ]}
    />
  );
}
