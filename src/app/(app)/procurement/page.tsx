import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Pengadaan / Procurement" icon="ShoppingCart" primaryAction="Buat PR"
      desc="Alur permintaan pembelian (PR) → persetujuan → purchase order (PO) → penerimaan barang."
      stats={[
        { label: "PR Bulan Ini", value: "47", icon: "ClipboardList" },
        { label: "Menunggu Approval", value: "8", accent: "gold", icon: "Activity" },
        { label: "PO Aktif", value: "19", accent: "primary", icon: "ShoppingCart" },
        { label: "Nilai PO", value: "Rp 3,4 M", accent: "info", icon: "Banknote" },
      ]}
      tableTitle="Daftar Purchase Order" tableSub="Terhubung modul inventory & hutang"
      head={["No. PO", "Pemasok", "Item", "Nilai", "Status"]}
      rows={[
        [{ mono: "PO-2506-031" } as any, "PT Enseval Putera", "Obat & BMHP (24 item)", "Rp 840 jt", { badge: "Dikirim" }],
        [{ mono: "PO-2506-030" } as any, "PT Tri Sapta Jaya", "Reagen lab (8 item)", "Rp 320 jt", { badge: "Disetujui" }],
        [{ mono: "PO-2506-029" } as any, "CV Medika Sarana", "APD & handscoon", "Rp 110 jt", { badge: "Diterima" }],
        [{ mono: "PR-2506-052" } as any, "—", "Kursi roda (5 unit)", "Rp 22 jt", { badge: "Menunggu" }],
      ]}
    />
  );
}
