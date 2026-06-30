import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Rawat Jalan / Poliklinik" icon="Stethoscope" primaryAction="Buka sesi poli"
      desc="Beban poliklinik harian, ketersediaan dokter, dan status pelayanan per pasien."
      stats={[
        { label: "Kunjungan Rajal", value: "287", icon: "Stethoscope" },
        { label: "Poli Aktif", value: "14", accent: "primary", icon: "LayoutGrid" },
        { label: "Dokter Praktek", value: "31", accent: "info", icon: "Users" },
        { label: "Rujuk Internal", value: "12", accent: "gold", icon: "ChevronRight" },
      ]}
      tableTitle="Status Poliklinik" tableSub="Per 30 Jun 2026"
      head={["Poliklinik", "Dokter", "Antrean", "Selesai", "Status"]}
      rows={[
        ["Penyakit Dalam", "dr. Hartono, Sp.PD", "28", "19", { badge: "Buka" }],
        ["Jantung", "dr. Rangga, Sp.JP", "11", "7", { badge: "Buka" }],
        ["Anak", "dr. Sari, Sp.A", "22", "14", { badge: "Buka" }],
        ["Kandungan", "dr. Maharani, Sp.OG", "19", "9", { badge: "Buka" }],
        ["Bedah", "dr. Wibowo, Sp.OT", "12", "12", { badge: "Selesai" }],
        ["Mata", "dr. Lestari, Sp.M", "9", "3", { badge: "Buka" }],
      ]}
    />
  );
}
