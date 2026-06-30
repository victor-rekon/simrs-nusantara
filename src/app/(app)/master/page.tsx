import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Master Data" icon="Database" primaryAction="Tambah data"
      desc="Data acuan sistem: tarif, ICD-10/9, formularium obat, ruangan, dan unit kerja."
      stats={[
        { label: "Data ICD-10", value: "14.230", icon: "Database" },
        { label: "Tarif Tindakan", value: "1.840", accent: "primary", icon: "Receipt" },
        { label: "Formularium Obat", value: "962", accent: "gold", icon: "Pill" },
        { label: "Unit & Ruangan", value: "58", accent: "info", icon: "LayoutGrid" },
      ]}
      tableTitle="Kategori Master Data" tableSub="Kelola data acuan sistem"
      head={["Kategori", "Jumlah Entri", "Terakhir Diperbarui", "Pengelola", "Status"]}
      rows={[
        ["ICD-10 Diagnosa", "14.230", "12 Jun 2026", "Tim Rekam Medis", { badge: "Aktif" }],
        ["ICD-9-CM Tindakan", "8.420", "12 Jun 2026", "Tim Rekam Medis", { badge: "Aktif" }],
        ["Tarif Layanan RS", "1.840", "01 Jun 2026", "Keuangan", { badge: "Aktif" }],
        ["Formularium Obat", "962", "25 Jun 2026", "Farmasi", { badge: "Aktif" }],
        ["Ruangan & Bed", "58", "15 Mei 2026", "Manajemen", { badge: "Aktif" }],
      ]}
    />
  );
}
