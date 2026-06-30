import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Kamar Operasi (OK)" icon="Scissors" primaryAction="Jadwalkan operasi"
      desc="Penjadwalan kamar bedah, status sterilisasi, dan tim operasi per slot."
      stats={[
        { label: "Operasi Hari Ini", value: "9", icon: "Scissors" },
        { label: "OK Aktif", value: "3 / 5", accent: "primary", icon: "LayoutGrid" },
        { label: "Elektif", value: "6", accent: "info", icon: "CalendarClock" },
        { label: "Cito / Emergensi", value: "3", accent: "crit", icon: "Siren" },
      ]}
      tableTitle="Jadwal Bedah" tableSub="OK Sentral lantai 3"
      head={["Jam", "OK", "Tindakan", "Operator", "Pasien", "Status"]}
      rows={[
        ["08:00", "OK-1", "SC (Sectio Caesarea)", "dr. Maharani, Sp.OG", "Maria G.", { badge: "Selesai" }],
        ["10:30", "OK-2", "ORIF Tibia", "dr. Wibowo, Sp.OT", "Agus Salim", { badge: "Berlangsung" }],
        ["11:00", "OK-3", "Appendektomi", "dr. Surya, Sp.B", "Rina W.", { badge: "Persiapan" }],
        ["13:00", "OK-1", "Katarak Phaco", "dr. Lestari, Sp.M", "Hendra G.", { badge: "Terjadwal" }],
        ["—", "OK-5", "PCI Emergensi", "dr. Rangga, Sp.JP", "Joko Susilo", { badge: "Cito" }],
      ]}
    />
  );
}
