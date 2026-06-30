import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Piutang & Hutang" icon="Scale" primaryAction="Catat pelunasan"
      desc="Monitoring piutang penjamin (BPJS, asuransi, perusahaan) dan hutang ke pemasok."
      stats={[
        { label: "Total Piutang", value: "Rp 4,2 M", accent: "gold", icon: "Scale" },
        { label: "Jatuh Tempo > 30 hr", value: "Rp 1,1 M", accent: "crit", icon: "Siren" },
        { label: "Total Hutang Supplier", value: "Rp 2,7 M", accent: "info", icon: "ShoppingCart" },
        { label: "Tertagih Bulan Ini", value: "Rp 9,8 M", accent: "primary", icon: "Banknote" },
      ]}
      tableTitle="Aging Piutang Penjamin" tableSub="Per umur tagihan"
      head={["Penjamin", "0-30 hr", "31-60 hr", ">60 hr", "Status"]}
      rows={[
        ["BPJS Kesehatan", "Rp 1,9 M", "Rp 620 jt", "Rp 280 jt", { badge: "Proses" }],
        ["Asuransi Mandiri Inhealth", "Rp 410 jt", "Rp 180 jt", "Rp 90 jt", { badge: "Tertagih" }],
        ["PT Sinar Jaya (rekanan)", "Rp 220 jt", "Rp 60 jt", "—", { badge: "Aman" }],
        ["Asuransi Prudential", "Rp 140 jt", "Rp 95 jt", "Rp 130 jt", { badge: "Terlambat" }],
      ]}
    />
  );
}
