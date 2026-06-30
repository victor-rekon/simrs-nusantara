import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Jadwal & Shift" icon="CalendarClock" primaryAction="Susun jadwal"
      desc="Penjadwalan shift perawat, jaga dokter, dan praktek poliklinik mingguan."
      stats={[
        { label: "Shift Hari Ini", value: "86", icon: "CalendarClock" },
        { label: "Dokter Jaga", value: "11", accent: "primary", icon: "Stethoscope" },
        { label: "Tukar Shift Pending", value: "3", accent: "gold", icon: "Activity" },
        { label: "Kekurangan Staf", value: "1 unit", accent: "crit", icon: "Siren" },
      ]}
      tableTitle="Jadwal Jaga Hari Ini" tableSub="30 Jun 2026"
      head={["Unit", "Shift", "Petugas", "Jam", "Status"]}
      rows={[
        ["IGD", "Pagi", "5 perawat + dr. Sari", "07:00–14:00", { badge: "Aktif" }],
        ["ICU", "Pagi", "4 perawat + dr. Rangga", "07:00–14:00", { badge: "Aktif" }],
        ["Ranap Melati", "Siang", "3 perawat", "14:00–21:00", { badge: "Terjadwal" }],
        ["Poli Rawat Jalan", "Pagi", "8 dokter spesialis", "08:00–13:00", { badge: "Aktif" }],
      ]}
    />
  );
}
