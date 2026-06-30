import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Aset & IPSRS" icon="Wrench" primaryAction="Jadwalkan maintenance"
      desc="Inventaris aset medis & non-medis, kalibrasi alat, dan pemeliharaan sarana prasarana."
      stats={[
        { label: "Total Aset", value: "3.860", icon: "Wrench" },
        { label: "Jadwal Kalibrasi", value: "12", accent: "gold", icon: "CalendarClock" },
        { label: "Perbaikan Aktif", value: "7", accent: "crit", icon: "Siren" },
        { label: "Uptime Alat Vital", value: "98,6%", accent: "primary", icon: "Activity" },
      ]}
      tableTitle="Pemeliharaan & Kalibrasi" tableSub="Alat medis prioritas"
      head={["No. Aset", "Nama Alat", "Lokasi", "Jadwal", "Status"]}
      rows={[
        [{ mono: "AST-VEN-04" } as any, "Ventilator", "ICU", "Kalibrasi 02 Jul", { badge: "Terjadwal" }],
        [{ mono: "AST-USG-02" } as any, "USG 4D", "Poli Kandungan", "Servis", { badge: "Perbaikan" }],
        [{ mono: "AST-XR-01" } as any, "X-Ray mobile", "Radiologi", "OK", { badge: "Aman" }],
        [{ mono: "AST-DEF-03" } as any, "Defibrillator", "IGD", "Kalibrasi 30 Jun", { badge: "Selesai" }],
      ]}
    />
  );
}
