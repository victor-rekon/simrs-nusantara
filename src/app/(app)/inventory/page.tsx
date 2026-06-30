import ModuleScaffold from "@/components/ModuleScaffold";
import { inventory } from "@/lib/data";
export default function Page() {
  return (
    <ModuleScaffold
      title="Inventory / Gudang" icon="Boxes" primaryAction="Stok masuk"
      desc="Pengelolaan stok alkes, BHP, dan logistik umum — multi-gudang dengan kartu stok."
      stats={[
        { label: "Total SKU", value: "2.184", icon: "Boxes" },
        { label: "Nilai Persediaan", value: "Rp 1,9 M", accent: "primary", icon: "Banknote" },
        { label: "Item Reorder", value: "23", accent: "gold", icon: "ShoppingCart" },
        { label: "Stok Kritis", value: "4", accent: "crit", icon: "Siren" },
      ]}
      tableTitle="Stok Alkes & BHP" tableSub="Gudang sentral & depo"
      head={["Kode", "Nama Barang", "Kategori", "Lokasi", "Stok / Min", "Status"]}
      rows={inventory.map((i) => [
        { mono: i.kode } as any, i.nama, i.kategori, i.lokasi,
        i.stok + " / " + i.min, { badge: i.status },
      ])}
    />
  );
}
