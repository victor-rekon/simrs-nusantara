import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Laundry & Linen" icon="Shirt" primaryAction="Catat serah-terima"
      desc="Sirkulasi linen kotor–bersih, pemisahan infeksius, dan stok linen per unit."
      stats={[
        { label: "Linen Diproses (kg)", value: "418", icon: "Shirt" },
        { label: "Infeksius", value: "112 kg", accent: "crit", icon: "Siren" },
        { label: "Stok Bersih Siap", value: "1.240", accent: "primary", icon: "ShieldCheck" },
        { label: "Susut / Rusak", value: "1,4%", accent: "gold", icon: "BarChart3" },
      ]}
      tableTitle="Serah-Terima Linen per Unit" tableSub="Shift pagi"
      head={["Unit", "Kotor (kg)", "Kategori", "Bersih Kembali", "Status"]}
      rows={[
        ["IGD", "64", "Infeksius", "58", { badge: "Proses" }],
        ["OK Sentral", "48", "Infeksius", "48", { badge: "Selesai" }],
        ["Ranap Melati", "92", "Non-infeksius", "90", { badge: "Selesai" }],
        ["ICU", "37", "Infeksius", "—", { badge: "Antri" }],
      ]}
    />
  );
}
