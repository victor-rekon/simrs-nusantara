import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Kantin" icon="Coffee" primaryAction="Tambah tenant"
      desc="Pengelolaan tenant kantin, transaksi kasir non-medis, dan setoran sewa harian."
      stats={[
        { label: "Tenant Aktif", value: "8", icon: "Coffee" },
        { label: "Transaksi Hari Ini", value: "412", accent: "primary", icon: "Receipt" },
        { label: "Omzet Kantin", value: "Rp 6,8 jt", accent: "gold", icon: "Banknote" },
        { label: "Sewa Tertunggak", value: "1", accent: "crit", icon: "Scale" },
      ]}
      tableTitle="Performa Tenant" tableSub="Setoran & sewa bulan ini"
      head={["Tenant", "Jenis", "Transaksi", "Sewa", "Status"]}
      rows={[
        ["Warung Sehat Bu Tin", "Makanan", "118", "Rp 1,5 jt", { badge: "Lunas" }],
        ["Kopi Sudut", "Minuman", "96", "Rp 1,2 jt", { badge: "Lunas" }],
        ["Apotek Sehat (mitra)", "Retail", "47", "Rp 2,0 jt", { badge: "Lunas" }],
        ["Bakso Pak Kumis", "Makanan", "71", "Rp 1,5 jt", { badge: "Tertagih" }],
      ]}
    />
  );
}
