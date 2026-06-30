import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Bank Darah" icon="Droplets" primaryAction="Permintaan darah"
      desc="Stok komponen darah, permintaan transfusi, crossmatch, dan ketertelusuran kantong."
      stats={[
        { label: "Stok Total (kantong)", value: "138", icon: "Droplets" },
        { label: "Golongan O Kritis", value: "8", accent: "crit", icon: "Siren" },
        { label: "Permintaan Aktif", value: "5", accent: "gold", icon: "Activity" },
        { label: "Crossmatch Hari Ini", value: "12", accent: "primary", icon: "FlaskConical" },
      ]}
      tableTitle="Stok Komponen Darah" tableSub="Per golongan & jenis komponen"
      head={["Golongan", "PRC", "WB", "TC", "FFP", "Status"]}
      rows={[
        ["A+", "14", "3", "6", "5", { badge: "Aman" }],
        ["B+", "11", "2", "4", "3", { badge: "Aman" }],
        ["O+", "8", "1", "2", "2", { badge: "Menipis" }],
        ["AB+", "5", "0", "1", "1", { badge: "Menipis" }],
        ["O-", "2", "0", "0", "1", { badge: "Kritis" }],
      ]}
    />
  );
}
