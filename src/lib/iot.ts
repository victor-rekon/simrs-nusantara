// Mock IoT device telemetry. Baseline + jitter amplitude per metric — used to
// simulate "live" readings client-side. No real devices are connected.

export const icuVitals = [
  { bed: "ICU-01", pasien: "Hartati Wulandari", dx: "Post-op CABG", hr: 88, hrAmp: 6, spo2: 97, spo2Amp: 1.5, sistol: 118, diastol: 76, bpAmp: 6, rr: 18, rrAmp: 2, suhu: 36.8, suhuAmp: 0.3 },
  { bed: "ICU-02", pasien: "Joko Susilo", dx: "STEMI, post-PCI", hr: 102, hrAmp: 8, spo2: 95, spo2Amp: 2, sistol: 132, diastol: 84, bpAmp: 7, rr: 22, rrAmp: 3, suhu: 37.4, suhuAmp: 0.3 },
  { bed: "ICU-03", pasien: "Ratna Dewi", dx: "Sepsis", hr: 114, hrAmp: 9, spo2: 93, spo2Amp: 2.5, sistol: 96, diastol: 60, bpAmp: 8, rr: 26, rrAmp: 3, suhu: 38.6, suhuAmp: 0.4 },
  { bed: "ICU-05", pasien: "Bagus Pratama", dx: "Cedera kepala berat", hr: 76, hrAmp: 5, spo2: 98, spo2Amp: 1, sistol: 124, diastol: 80, bpAmp: 5, rr: 16, rrAmp: 2, suhu: 36.5, suhuAmp: 0.2 },
];

export type DeviceStatus = "Online" | "Offline" | "Peringatan";

export const criticalEquipment: {
  id: string; nama: string; lokasi: string; status: DeviceStatus;
  baterai: number; metric: string; base: number; amp: number; unit: string;
}[] = [
  { id: "VEN-04", nama: "Ventilator", lokasi: "ICU-02", status: "Online", baterai: 92, metric: "Tekanan jalan napas", base: 18, amp: 2, unit: "cmH₂O" },
  { id: "VEN-07", nama: "Ventilator", lokasi: "ICU-03", status: "Online", baterai: 78, metric: "Tekanan jalan napas", base: 22, amp: 3, unit: "cmH₂O" },
  { id: "DEF-01", nama: "Defibrillator", lokasi: "IGD", status: "Online", baterai: 100, metric: "Status", base: 100, amp: 0, unit: "% siap" },
  { id: "SYR-12", nama: "Syringe Pump", lokasi: "ICU-01", status: "Online", baterai: 65, metric: "Laju infus", base: 5.2, amp: 0.3, unit: "ml/jam" },
  { id: "INF-03", nama: "Infant Warmer", lokasi: "Perinatologi", status: "Peringatan", baterai: 34, metric: "Suhu matras", base: 36.2, amp: 0.3, unit: "°C" },
  { id: "USG-02", nama: "USG Portable", lokasi: "IGD", status: "Offline", baterai: 0, metric: "Terakhir online 41 mnt lalu", base: 0, amp: 0, unit: "" },
];

export const coldChain = [
  { id: "BB-01", nama: "Kulkas Bank Darah #1", lokasi: "Bank Darah", suhu: 4.1, amp: 0.3, min: 2, max: 6, kelembaban: 42 },
  { id: "BB-02", nama: "Kulkas Bank Darah #2", lokasi: "Bank Darah", suhu: 4.4, amp: 0.3, min: 2, max: 6, kelembaban: 45 },
  { id: "FAR-VAX", nama: "Kulkas Vaksin", lokasi: "Farmasi", suhu: 3.6, amp: 0.4, min: 2, max: 8, kelembaban: 38 },
  { id: "FAR-FRZ", nama: "Freezer Obat Khusus", lokasi: "Farmasi", suhu: -18.2, amp: 0.5, min: -25, max: -15, kelembaban: 30 },
];

export const gasMedis = [
  { id: "O2-CTR", nama: "Oksigen Sentral", lokasi: "Tangki Utama", tekanan: 4.2, amp: 0.15, min: 3.5, max: 5, unit: "bar" },
  { id: "N2O-CTR", nama: "N₂O Sentral", lokasi: "Tangki Utama", tekanan: 3.8, amp: 0.1, min: 3, max: 4.5, unit: "bar" },
  { id: "VAC-CTR", nama: "Vacuum Medis", lokasi: "OK Sentral", tekanan: -0.62, amp: 0.05, min: -0.8, max: -0.4, unit: "bar" },
  { id: "AIR-CTR", nama: "Compressed Air", lokasi: "OK Sentral", tekanan: 4.0, amp: 0.1, min: 3.5, max: 4.5, unit: "bar" },
];

export const powerBackup = [
  { id: "GEN-01", nama: "Genset Utama", status: "Standby", baterai: 88, runtime: 480, lastTest: "28 Jun 2026" },
  { id: "UPS-ICU", nama: "UPS ICU & OK", status: "Online", baterai: 96, runtime: 35, lastTest: "30 Jun 2026" },
  { id: "UPS-FAR", nama: "UPS Farmasi (Cold Chain)", status: "Online", baterai: 91, runtime: 28, lastTest: "30 Jun 2026" },
];

export const fleetGps = [
  { id: "AMB-01", lokasi: "Jl. MH Thamrin — menuju RSUP", kecepatan: 46, bahanBakar: 68, eta: 9, status: "Bertugas" },
  { id: "AMB-02", lokasi: "Area parkir IGD", kecepatan: 0, bahanBakar: 92, eta: 0, status: "Standby" },
  { id: "AMB-03", lokasi: "Jl. Kelapa Dua — jemput pasien", kecepatan: 32, bahanBakar: 54, eta: 14, status: "Bertugas" },
];
