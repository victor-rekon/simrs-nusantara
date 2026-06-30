import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Ambulans & Transport" icon="Ambulance" primaryAction="Buat penugasan"
      desc="Armada ambulans, status unit, penugasan rujukan, dan log perjalanan."
      stats={[
        { label: "Armada Total", value: "6", icon: "Ambulance" },
        { label: "Tersedia", value: "3", accent: "primary", icon: "ShieldCheck" },
        { label: "Bertugas", value: "2", accent: "info", icon: "Activity" },
        { label: "Maintenance", value: "1", accent: "crit", icon: "Wrench" },
      ]}
      tableTitle="Status Armada" tableSub="Realtime GPS"
      head={["Unit", "Tipe", "Sopir", "Penugasan", "Status"]}
      rows={[
        ["AMB-01", "Advanced Life Support", "Slamet", "Rujuk ke RSUP — STEMI", { badge: "Bertugas" }],
        ["AMB-02", "Basic Life Support", "Yusuf", "Standby IGD", { badge: "Tersedia" }],
        ["AMB-03", "Transport", "Hadi", "Jemput pasien Hemodialisa", { badge: "Bertugas" }],
        ["AMB-04", "Jenazah", "—", "Standby", { badge: "Tersedia" }],
        ["AMB-05", "Basic Life Support", "—", "Servis berkala", { badge: "Maintenance" }],
      ]}
    />
  );
}
