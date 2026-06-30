import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Akuntansi & Jurnal" icon="BookOpen" primaryAction="Input jurnal"
      desc="Buku besar, jurnal otomatis dari transaksi pelayanan, dan laporan keuangan (SAK)."
      stats={[
        { label: "Pendapatan (bln)", value: "Rp 11,3 M", accent: "primary", icon: "Banknote" },
        { label: "Beban Operasional", value: "Rp 7,8 M", accent: "gold", icon: "Receipt" },
        { label: "Laba Berjalan", value: "Rp 3,5 M", accent: "info", icon: "BarChart3" },
        { label: "Jurnal Belum Posting", value: "14", accent: "crit", icon: "BookOpen" },
      ]}
      tableTitle="Jurnal Terakhir" tableSub="Otomatis dari modul billing & farmasi"
      head={["No. Jurnal", "Tanggal", "Keterangan", "Debit/Kredit", "Status"]}
      rows={[
        [{ mono: "JU-0630-118" } as any, "30 Jun", "Pendapatan rawat jalan", "Rp 38.420.000", { badge: "Posting" }],
        [{ mono: "JU-0630-117" } as any, "30 Jun", "HPP obat farmasi", "Rp 14.200.000", { badge: "Posting" }],
        [{ mono: "JU-0630-116" } as any, "30 Jun", "Piutang klaim BPJS", "Rp 6.120.000", { badge: "Draft" }],
        [{ mono: "JU-0630-115" } as any, "30 Jun", "Beban gaji honorer", "Rp 21.000.000", { badge: "Draft" }],
      ]}
    />
  );
}
