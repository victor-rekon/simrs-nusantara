// Mock data for the SIMRS demo. Indonesian context, no backend.

export const HOSPITAL = {
  name: "RSU Nusantara Medika",
  type: "Rumah Sakit Umum Kelas B",
  city: "Tangerang, Banten",
  akreditasi: "Paripurna (LARS)",
};

export const rupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID", { maximumFractionDigits: 0 });
export const ribu = (n: number) =>
  n >= 1_000_000_000
    ? (n / 1_000_000_000).toFixed(2) + " M"
    : n >= 1_000_000
    ? (n / 1_000_000).toFixed(1) + " jt"
    : n.toLocaleString("id-ID");

// ---- Dashboard KPIs ----
export const KPI = {
  pasienHariIni: 487,
  pasienDelta: 6.2,
  bor: 78, // Bed Occupancy Rate %
  borDelta: 2.1,
  igdAktif: 14,
  pendapatanHariIni: 412_750_000,
  pendapatanDelta: 4.8,
  klaimPending: 38,
  klaimNominal: 1_284_000_000,
};

export const kunjunganSeri = [
  { hari: "Sen", rajal: 320, ranap: 64, igd: 41 },
  { hari: "Sel", rajal: 298, ranap: 58, igd: 38 },
  { hari: "Rab", rajal: 351, ranap: 71, igd: 52 },
  { hari: "Kam", rajal: 312, ranap: 66, igd: 44 },
  { hari: "Jum", rajal: 287, ranap: 60, igd: 39 },
  { hari: "Sab", rajal: 198, ranap: 49, igd: 33 },
  { hari: "Min", rajal: 142, ranap: 45, igd: 47 },
];

export const pendapatanSeri = [
  { bln: "Jul", umum: 2.1, bpjs: 5.4, asuransi: 1.2 },
  { bln: "Agu", umum: 2.3, bpjs: 5.9, asuransi: 1.4 },
  { bln: "Sep", umum: 2.0, bpjs: 6.2, asuransi: 1.3 },
  { bln: "Okt", umum: 2.6, bpjs: 6.0, asuransi: 1.6 },
  { bln: "Nov", umum: 2.8, bpjs: 6.6, asuransi: 1.5 },
  { bln: "Des", umum: 3.1, bpjs: 7.1, asuransi: 1.8 },
];

export const penjaminMix = [
  { name: "BPJS Kesehatan", value: 62, fill: "#0B6E5B" },
  { name: "Umum / Pribadi", value: 23, fill: "#C8922A" },
  { name: "Asuransi Swasta", value: 12, fill: "#0284C7" },
  { name: "Perusahaan", value: 3, fill: "#7C3AED" },
];

export const poliBeban = [
  { poli: "Penyakit Dalam", antri: 28, kuota: 40 },
  { poli: "Anak", antri: 22, kuota: 35 },
  { poli: "Kandungan", antri: 19, kuota: 30 },
  { poli: "Bedah", antri: 12, kuota: 25 },
  { poli: "Mata", antri: 9, kuota: 20 },
  { poli: "Gigi", antri: 15, kuota: 24 },
  { poli: "Jantung", antri: 11, kuota: 18 },
];

// ---- Pendaftaran ----
export type Penjamin = "BPJS" | "Umum" | "Asuransi" | "Perusahaan";
export type Layanan = "Rawat Jalan" | "Rawat Inap" | "IGD";
export const pendaftaran = [
  { no: "RG-250630-018", nama: "Siti Aminah", norm: "00-58-21-04", umur: "42 th", jk: "P", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Penyakit Dalam", penjamin: "BPJS" as Penjamin, status: "Menunggu" },
  { no: "RG-250630-017", nama: "Bambang Wijaya", norm: "00-41-77-13", umur: "57 th", jk: "L", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Jantung", penjamin: "BPJS" as Penjamin, status: "Dilayani" },
  { no: "RG-250630-016", nama: "Putri Lestari", norm: "00-62-09-88", umur: "29 th", jk: "P", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Kandungan", penjamin: "Asuransi" as Penjamin, status: "Selesai" },
  { no: "RG-250630-015", nama: "Andi Saputra", norm: "00-33-15-42", umur: "8 th", jk: "L", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Anak", penjamin: "Umum" as Penjamin, status: "Menunggu" },
  { no: "IGD-250630-004", nama: "Joko Susilo", norm: "00-71-88-02", umur: "63 th", jk: "L", layanan: "IGD" as Layanan, tujuan: "IGD - Triase Merah", penjamin: "BPJS" as Penjamin, status: "Tindakan" },
  { no: "RI-250630-009", nama: "Maria Goretti", norm: "00-29-44-51", umur: "34 th", jk: "P", layanan: "Rawat Inap" as Layanan, tujuan: "Melati 3 / 304-A", penjamin: "BPJS" as Penjamin, status: "Dirawat" },
  { no: "RG-250630-014", nama: "Hendra Gunawan", norm: "00-55-12-39", umur: "47 th", jk: "L", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Mata", penjamin: "Perusahaan" as Penjamin, status: "Menunggu" },
  { no: "RG-250630-013", nama: "Dewi Anggraini", norm: "00-66-31-20", umur: "51 th", jk: "P", layanan: "Rawat Jalan" as Layanan, tujuan: "Poli Bedah", penjamin: "BPJS" as Penjamin, status: "Dilayani" },
];

// ---- IGD Triase ----
export type Triase = "Merah" | "Kuning" | "Hijau" | "Hitam";
export const igd = [
  { no: "IGD-004", nama: "Joko Susilo", umur: "63 th", keluhan: "Nyeri dada, sesak napas", triase: "Merah" as Triase, masuk: "14:02", dokter: "dr. Rangga, Sp.JP", tindakan: "EKG, O2, IV line" },
  { no: "IGD-007", nama: "Nadia Rahma", umur: "24 th", keluhan: "KLL — fraktur tertutup cruris", triase: "Kuning" as Triase, masuk: "14:18", dokter: "dr. Wibowo, Sp.OT", tindakan: "Imobilisasi, X-Ray" },
  { no: "IGD-008", nama: "Slamet Riyadi", umur: "45 th", keluhan: "Demam tinggi 3 hari", triase: "Hijau" as Triase, masuk: "14:31", dokter: "dr. Sari", tindakan: "Observasi, lab DL" },
  { no: "IGD-009", nama: " Kosong —", umur: "—", keluhan: "Bed standby", triase: "Hijau" as Triase, masuk: "—", dokter: "—", tindakan: "—" },
  { no: "IGD-005", nama: "Ratna Sari", umur: "38 th", keluhan: "Hipoglikemia", triase: "Kuning" as Triase, masuk: "13:47", dokter: "dr. Sari", tindakan: "D40%, monitor GDS" },
];

// ---- Bed Management ----
export type BedStatus = "Terisi" | "Kosong" | "Booking" | "Maintenance";
export const bangsal = [
  {
    nama: "Melati (Kelas 3)", kelas: "3",
    beds: ["Terisi","Terisi","Kosong","Terisi","Terisi","Booking","Terisi","Kosong","Terisi","Terisi","Terisi","Maintenance"] as BedStatus[],
  },
  {
    nama: "Anggrek (Kelas 2)", kelas: "2",
    beds: ["Terisi","Kosong","Terisi","Terisi","Booking","Terisi","Kosong","Terisi"] as BedStatus[],
  },
  {
    nama: "Mawar (Kelas 1)", kelas: "1",
    beds: ["Terisi","Terisi","Kosong","Booking","Terisi","Kosong"] as BedStatus[],
  },
  {
    nama: "Cendana (VIP)", kelas: "VIP",
    beds: ["Terisi","Kosong","Terisi","Maintenance"] as BedStatus[],
  },
  {
    nama: "ICU", kelas: "ICU",
    beds: ["Terisi","Terisi","Terisi","Kosong","Terisi","Booking"] as BedStatus[],
  },
  {
    nama: "Perinatologi (NICU)", kelas: "NICU",
    beds: ["Terisi","Kosong","Terisi","Terisi","Kosong"] as BedStatus[],
  },
];

// ---- RME ----
export const rme = [
  { norm: "00-58-21-04", nama: "Siti Aminah", umur: "42 th", jk: "P", dx: "E11.9 — DM tipe 2", terakhir: "30 Jun 2026", dokter: "dr. Hartono, Sp.PD", alergi: "Penisilin" },
  { norm: "00-41-77-13", nama: "Bambang Wijaya", umur: "57 th", jk: "L", dx: "I20.0 — Angina tidak stabil", terakhir: "30 Jun 2026", dokter: "dr. Rangga, Sp.JP", alergi: "—" },
  { norm: "00-62-09-88", nama: "Putri Lestari", umur: "29 th", jk: "P", dx: "Z34.0 — Kehamilan normal", terakhir: "29 Jun 2026", dokter: "dr. Maharani, Sp.OG", alergi: "—" },
  { norm: "00-33-15-42", nama: "Andi Saputra", umur: "8 th", jk: "L", dx: "J06.9 — ISPA", terakhir: "30 Jun 2026", dokter: "dr. Sari, Sp.A", alergi: "Amoksisilin" },
  { norm: "00-29-44-51", nama: "Maria Goretti", umur: "34 th", jk: "P", dx: "O80 — Persalinan spontan", terakhir: "28 Jun 2026", dokter: "dr. Maharani, Sp.OG", alergi: "—" },
];

export const rmeDetail = {
  pasien: rme[0],
  vital: { td: "138/86", nadi: "84", suhu: "36.7", rr: "18", spo2: "98", bb: "68", tb: "158" },
  soap: [
    { tgl: "30 Jun 2026 09:14", s: "Pasien mengeluh lemas, sering haus & buang air kecil malam hari.", o: "GDS 248 mg/dL, TD 138/86. Akral hangat.", a: "DM tipe 2 tidak terkontrol (E11.9), HT grade 1 (I10).", p: "Metformin 500mg 2x1, Amlodipin 5mg 1x1, edukasi diet, kontrol 2 minggu.", dokter: "dr. Hartono, Sp.PD" },
    { tgl: "16 Jun 2026 10:02", s: "Kontrol rutin DM. Tidak ada keluhan berat.", o: "GDP 156 mg/dL, HbA1c 7.8%.", a: "DM tipe 2 (E11.9), perbaikan.", p: "Lanjut terapi, tambah edukasi olahraga.", dokter: "dr. Hartono, Sp.PD" },
  ],
};

// ---- Farmasi ----
export const resep = [
  { no: "R/2506-0412", nama: "Siti Aminah", asal: "Poli P. Dalam", item: 3, status: "Antri Racik", penjamin: "BPJS" },
  { no: "R/2506-0411", nama: "Bambang Wijaya", asal: "Poli Jantung", item: 4, status: "Verifikasi", penjamin: "BPJS" },
  { no: "R/2506-0410", nama: "Andi Saputra", asal: "Poli Anak", item: 2, status: "Siap Diserahkan", penjamin: "Umum" },
  { no: "R/2506-0409", nama: "Joko Susilo", asal: "IGD", item: 5, status: "Diserahkan", penjamin: "BPJS" },
];
export const stokObat = [
  { kode: "OBT-0231", nama: "Metformin 500 mg", kategori: "Antidiabetik", stok: 1240, min: 500, satuan: "tablet", status: "Aman" },
  { kode: "OBT-0118", nama: "Amlodipin 5 mg", kategori: "Antihipertensi", stok: 320, min: 400, satuan: "tablet", status: "Menipis" },
  { kode: "OBT-0455", nama: "Ceftriaxone 1 g inj", kategori: "Antibiotik", stok: 86, min: 80, satuan: "vial", status: "Aman" },
  { kode: "OBT-0902", nama: "Paracetamol 500 mg", kategori: "Analgesik", stok: 38, min: 300, satuan: "tablet", status: "Kritis" },
  { kode: "OBT-0673", nama: "Insulin Novorapid", kategori: "Antidiabetik", stok: 54, min: 40, satuan: "pen", status: "Aman" },
  { kode: "OBT-0288", nama: "Omeprazole 20 mg", kategori: "Antasida", stok: 210, min: 250, satuan: "kapsul", status: "Menipis" },
];

// ---- Laboratorium ----
export const labOrder = [
  { no: "LAB-25063-091", nama: "Siti Aminah", asal: "Poli P. Dalam", paket: "GDP, GD2PP, HbA1c, Profil Lipid", status: "Proses", prioritas: "Rutin" },
  { no: "LAB-25063-090", nama: "Joko Susilo", asal: "IGD", paket: "Troponin I, CK-MB, Elektrolit", status: "Selesai", prioritas: "CITO" },
  { no: "LAB-25063-089", nama: "Andi Saputra", asal: "Poli Anak", paket: "Darah Lengkap, CRP", status: "Sampling", prioritas: "Rutin" },
  { no: "LAB-25063-088", nama: "Maria Goretti", asal: "Ranap Melati", paket: "Hb, Hematokrit, Golongan Darah", status: "Selesai", prioritas: "Rutin" },
  { no: "LAB-25063-087", nama: "Ratna Sari", asal: "IGD", paket: "GDS, Ureum, Kreatinin", status: "Validasi", prioritas: "CITO" },
];

// ---- Billing & Klaim ----
export const tagihan = [
  { no: "INV-250630-221", nama: "Bambang Wijaya", layanan: "Rawat Jalan — Jantung", penjamin: "BPJS", total: 487_000, status: "Lunas (BPJS)" },
  { no: "INV-250630-220", nama: "Hendra Gunawan", layanan: "Rawat Jalan — Mata", penjamin: "Perusahaan", total: 1_240_000, status: "Tertagih" },
  { no: "INV-250629-198", nama: "Maria Goretti", layanan: "Rawat Inap — Persalinan", penjamin: "BPJS", total: 6_850_000, status: "Proses Klaim" },
  { no: "INV-250630-219", nama: "Putri Lestari", layanan: "Rawat Jalan — Kandungan", penjamin: "Asuransi", total: 925_000, status: "Menunggu Bayar" },
  { no: "INV-250630-218", nama: "Andi Saputra", layanan: "Rawat Jalan — Anak", penjamin: "Umum", total: 315_000, status: "Lunas" },
];
export const klaim = [
  { sep: "0301R0010625V000812", nama: "Joko Susilo", cbg: "I-4-12-I (Infark Miokard)", tarif: 12_480_000, status: "Pengajuan", verif: "—" },
  { sep: "0301R0010625V000799", nama: "Maria Goretti", cbg: "O-6-10-I (Persalinan)", tarif: 6_120_000, status: "Disetujui", verif: "Layak" },
  { sep: "0301R0010625V000781", nama: "Siti Aminah", cbg: "K-4-17-I (DM + komplikasi)", tarif: 4_950_000, status: "Pending", verif: "Konfirmasi koding" },
  { sep: "0301R0010625V000774", nama: "Bambang Wijaya", cbg: "I-4-15-II (Angina)", tarif: 3_780_000, status: "Disetujui", verif: "Layak" },
];

// ---- Inventory generic ----
export const inventory = [
  { kode: "ALK-1101", nama: "Spuit 3cc", kategori: "Alkes Habis Pakai", stok: 4200, min: 2000, lokasi: "Gudang Sentral", status: "Aman" },
  { kode: "ALK-1209", nama: "Handscoon steril M", kategori: "Alkes Habis Pakai", stok: 860, min: 1000, lokasi: "Gudang Sentral", status: "Menipis" },
  { kode: "ALK-1330", nama: "Infus set makro", kategori: "Alkes Habis Pakai", stok: 1500, min: 800, lokasi: "Depo IGD", status: "Aman" },
  { kode: "ALK-1455", nama: "Masker bedah 3-ply", kategori: "APD", stok: 240, min: 1500, lokasi: "Gudang Sentral", status: "Kritis" },
  { kode: "RT-2011", nama: "Cairan NaCl 0.9% 500ml", kategori: "Cairan", stok: 980, min: 600, lokasi: "Depo Ranap", status: "Aman" },
];

// ---- SDM ----
export const pegawai = [
  { nip: "199203-001", nama: "dr. Hartono, Sp.PD", unit: "Poli Penyakit Dalam", role: "Dokter Spesialis", str: "Aktif s/d 2027", status: "Aktif" },
  { nip: "198811-014", nama: "dr. Rangga, Sp.JP", unit: "Poli Jantung", role: "Dokter Spesialis", str: "Aktif s/d 2026", status: "Aktif" },
  { nip: "199507-088", nama: "Ns. Wulandari", unit: "Ranap Melati", role: "Perawat", str: "Aktif s/d 2028", status: "Aktif" },
  { nip: "200101-132", nama: "Apt. Rizki Pratama", unit: "Farmasi", role: "Apoteker", str: "Aktif s/d 2027", status: "Cuti" },
  { nip: "199311-205", nama: "Andi Kurniawan", unit: "Rekam Medis", role: "Perekam Medis", str: "Aktif s/d 2029", status: "Aktif" },
];

// status color helper (string -> tailwind classes)
export function statusTone(s: string): string {
  const k = s.toLowerCase();
  if (/(lunas|selesai|aman|disetujui|aktif|layak|diserahkan|normal)/.test(k)) return "bg-ok/10 text-ok ring-ok/20";
  if (/(menunggu|antri|proses|pending|booking|menipis|verifikasi|validasi|sampling|standby|cuti|pengajuan|tertagih|konfirmasi)/.test(k)) return "bg-warn/10 text-warn ring-warn/20";
  if (/(kritis|merah|tindakan|maintenance|terlambat|gagal|tidak)/.test(k)) return "bg-crit/10 text-crit ring-crit/20";
  if (/(dilayani|dirawat|dikirim|terisi|kuning)/.test(k)) return "bg-info/10 text-info ring-info/20";
  return "bg-ink-200 text-ink-600 ring-ink-300/40";
}
