import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Pengaturan" icon="Settings" primaryAction="Tambah pengguna"
      desc="Konfigurasi sistem, manajemen pengguna & hak akses, serta preferensi rumah sakit."
      stats={[
        { label: "Pengguna Aktif", value: "142", icon: "Users" },
        { label: "Role Akses", value: "9", accent: "primary", icon: "ShieldCheck" },
        { label: "Unit Terdaftar", value: "30", accent: "info", icon: "LayoutGrid" },
        { label: "Log Aktivitas Hari Ini", value: "1.204", accent: "gold", icon: "Activity" },
      ]}
      tableTitle="Manajemen Pengguna" tableSub="Role & hak akses sistem"
      head={["Nama", "Unit", "Role", "Login Terakhir", "Status"]}
      rows={[
        ["Admin Pendaftaran", "Loket 1", "Front Office", "30 Jun 14:36", { badge: "Aktif" }],
        ["dr. Hartono, Sp.PD", "Poli P. Dalam", "Dokter", "30 Jun 13:58", { badge: "Aktif" }],
        ["Apt. Rizki Pratama", "Farmasi", "Apoteker", "28 Jun 09:14", { badge: "Cuti" }],
        ["Kepala Keuangan", "Keuangan", "Admin Keuangan", "30 Jun 12:02", { badge: "Aktif" }],
      ]}
    />
  );
}
