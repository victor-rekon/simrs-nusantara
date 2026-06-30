import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Payroll" icon="Banknote" primaryAction="Proses payroll"
      desc="Penggajian pegawai tetap & honorer, insentif jasa medis, dan slip gaji digital."
      stats={[
        { label: "Total Payroll (bln)", value: "Rp 4,8 M", icon: "Banknote" },
        { label: "Pegawai Diproses", value: "612", accent: "primary", icon: "Users" },
        { label: "Jasa Medis Pending", value: "Rp 620 jt", accent: "gold", icon: "Receipt" },
        { label: "Slip Belum Diunduh", value: "48", accent: "info", icon: "ClipboardList" },
      ]}
      tableTitle="Ringkasan Payroll per Unit" tableSub="Periode Juni 2026"
      head={["Unit", "Jumlah Pegawai", "Gaji Pokok", "Insentif", "Status"]}
      rows={[
        ["Tenaga Medis", "184", "Rp 1,9 M", "Rp 980 jt", { badge: "Diproses" }],
        ["Keperawatan", "260", "Rp 1,4 M", "Rp 310 jt", { badge: "Diproses" }],
        ["Penunjang Medis", "98", "Rp 540 jt", "Rp 120 jt", { badge: "Selesai" }],
        ["Administrasi & Umum", "70", "Rp 380 jt", "Rp 40 jt", { badge: "Selesai" }],
      ]}
    />
  );
}
