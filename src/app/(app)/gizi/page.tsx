import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Gizi & Dapur" icon="UtensilsCrossed" primaryAction="Buat order diet"
      desc="Asuhan gizi pasien rawat inap, perencanaan menu, dan distribusi makanan per bangsal."
      stats={[
        { label: "Porsi Hari Ini", value: "642", icon: "UtensilsCrossed" },
        { label: "Diet Khusus", value: "88", accent: "gold", icon: "Activity" },
        { label: "Konsul Gizi", value: "14", accent: "info", icon: "Users" },
        { label: "Sisa Makan (waste)", value: "6%", accent: "primary", icon: "BarChart3" },
      ]}
      tableTitle="Order Diet per Bangsal" tableSub="Distribusi makan siang"
      head={["Bangsal", "Pasien", "Jenis Diet", "Bentuk", "Status"]}
      rows={[
        ["Melati 3", "Maria Goretti", "TKTP Nifas", "Biasa", { badge: "Dikirim" }],
        ["ICU 02", "Joko Susilo", "Diet Jantung rendah garam", "Cair", { badge: "Disiapkan" }],
        ["Anggrek 210", "Agus Salim", "Biasa", "Biasa", { badge: "Dikirim" }],
        ["Mawar 105", "Dewi Anggraini", "Diet rendah serat (GEA)", "Lunak", { badge: "Disiapkan" }],
        ["Cendana 01", "Rudi Hermawan", "DM 1700 kkal", "Biasa", { badge: "Antri" }],
      ]}
    />
  );
}
