import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Integrasi SATUSEHAT" icon="Cable" primaryAction="Cek status sinkron"
      desc="Status koneksi ke platform SATUSEHAT Kemenkes, BPJS VClaim, dan layanan eksternal lain."
      stats={[
        { label: "Endpoint Aktif", value: "6", icon: "Cable" },
        { label: "Sinkron Terakhir", value: "2 mnt lalu", accent: "primary", icon: "Activity" },
        { label: "Antrean Gagal Kirim", value: "3", accent: "crit", icon: "Siren" },
        { label: "Uptime 30 Hari", value: "99,4%", accent: "info", icon: "ShieldCheck" },
      ]}
      tableTitle="Status Integrasi" tableSub="Layanan eksternal terhubung"
      head={["Layanan", "Tipe", "Endpoint", "Sinkron Terakhir", "Status"]}
      rows={[
        ["SATUSEHAT — Encounter", "FHIR R4", "/Encounter", "30 Jun 14:32", { badge: "Terhubung" }],
        ["SATUSEHAT — Observation", "FHIR R4", "/Observation", "30 Jun 14:30", { badge: "Terhubung" }],
        ["BPJS VClaim", "REST/SOAP", "/vclaim-rest", "30 Jun 14:20", { badge: "Terhubung" }],
        ["BPJS Aplicares", "REST", "/aplicares", "30 Jun 11:05", { badge: "Gagal" }],
        ["SISRUTE (rujukan)", "REST", "/sisrute", "30 Jun 13:48", { badge: "Terhubung" }],
      ]}
    />
  );
}
