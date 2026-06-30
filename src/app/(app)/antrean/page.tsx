import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Antrean Online" icon="Ticket" primaryAction="Panggil berikutnya"
      desc="Manajemen antrean terintegrasi Mobile JKN & anjungan mandiri — pemanggilan loket dan poli."
      stats={[
        { label: "Tiket Terbit", value: "342", icon: "Ticket" },
        { label: "Sedang Dipanggil", value: "8", accent: "primary", icon: "Activity" },
        { label: "Terlewati", value: "17", accent: "crit", icon: "Siren" },
        { label: "Rata-rata Tunggu", value: "23 mnt", accent: "gold", icon: "CalendarClock" },
      ]}
      tableTitle="Antrean Aktif" tableSub="Loket pendaftaran & poliklinik"
      head={["Nomor", "Tujuan", "Pasien", "Estimasi", "Status"]}
      rows={[
        ["A-118", "Loket BPJS", "Siti Aminah", "± 2 mnt", { badge: "Dipanggil" }],
        ["B-204", "Poli Penyakit Dalam", "Bambang Wijaya", "± 12 mnt", { badge: "Menunggu" }],
        ["C-091", "Poli Anak", "Andi Saputra", "± 18 mnt", { badge: "Menunggu" }],
        ["A-115", "Loket Umum", "Hendra Gunawan", "—", { badge: "Terlewati" }],
        ["D-077", "Farmasi", "Joko Susilo", "± 5 mnt", { badge: "Menunggu" }],
      ]}
    />
  );
}
