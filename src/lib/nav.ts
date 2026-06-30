export type NavItem = { label: string; href: string; icon: string; badge?: string };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    title: "Pendaftaran & Antrean",
    items: [
      { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
      { label: "Pendaftaran", href: "/pendaftaran", icon: "ClipboardList", badge: "12" },
      { label: "Antrean Online", href: "/antrean", icon: "Ticket" },
    ],
  },
  {
    title: "Pelayanan Klinis",
    items: [
      { label: "IGD / Triase", href: "/igd", icon: "Siren", badge: "4" },
      { label: "Rawat Jalan", href: "/rawat-jalan", icon: "Stethoscope" },
      { label: "Rawat Inap", href: "/rawat-inap", icon: "BedDouble" },
      { label: "Manajemen Bed", href: "/bed", icon: "LayoutGrid" },
      { label: "Kamar Operasi", href: "/operasi", icon: "Scissors" },
      { label: "Rekam Medis (RME)", href: "/rme", icon: "FolderHeart" },
    ],
  },
  {
    title: "Penunjang Medis",
    items: [
      { label: "Laboratorium", href: "/laboratorium", icon: "FlaskConical" },
      { label: "Radiologi", href: "/radiologi", icon: "ScanLine" },
      { label: "Farmasi & Apotek", href: "/farmasi", icon: "Pill" },
      { label: "Gizi & Dapur", href: "/gizi", icon: "UtensilsCrossed" },
      { label: "Bank Darah", href: "/bank-darah", icon: "Droplets" },
      { label: "CSSD", href: "/cssd", icon: "Recycle" },
      { label: "Laundry", href: "/laundry", icon: "Shirt" },
      { label: "Ambulans", href: "/ambulans", icon: "Ambulance" },
    ],
  },
  {
    title: "Monitoring Real-time",
    items: [
      { label: "Monitoring IoT", href: "/monitoring-iot", icon: "Radio", badge: "Live" },
    ],
  },
  {
    title: "Keuangan",
    items: [
      { label: "Billing & Kasir", href: "/billing", icon: "Receipt" },
      { label: "Klaim BPJS / INA-CBG", href: "/klaim", icon: "ShieldCheck" },
      { label: "Akuntansi & Jurnal", href: "/akuntansi", icon: "BookOpen" },
      { label: "Piutang & Hutang", href: "/piutang", icon: "Scale" },
    ],
  },
  {
    title: "Logistik & Aset",
    items: [
      { label: "Inventory / Gudang", href: "/inventory", icon: "Boxes" },
      { label: "Pengadaan", href: "/procurement", icon: "ShoppingCart" },
      { label: "Aset & IPSRS", href: "/aset", icon: "Wrench" },
      { label: "Kantin", href: "/kantin", icon: "Coffee" },
    ],
  },
  {
    title: "Sumber Daya Manusia",
    items: [
      { label: "Kepegawaian", href: "/sdm", icon: "Users" },
      { label: "Jadwal & Shift", href: "/jadwal", icon: "CalendarClock" },
      { label: "Payroll", href: "/payroll", icon: "Banknote" },
    ],
  },
  {
    title: "Manajemen & Integrasi",
    items: [
      { label: "Laporan RL / SIRS", href: "/laporan", icon: "BarChart3" },
      { label: "Integrasi SATUSEHAT", href: "/integrasi", icon: "Cable" },
      { label: "Master Data", href: "/master", icon: "Database" },
      { label: "Pengaturan", href: "/pengaturan", icon: "Settings" },
    ],
  },
];

export const ALL_ITEMS: NavItem[] = NAV.flatMap((g) => g.items);
export function findItem(href: string) {
  return ALL_ITEMS.find((i) => i.href === href);
}
