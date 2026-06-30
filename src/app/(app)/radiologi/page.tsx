import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="Radiologi" icon="ScanLine" primaryAction="Order pemeriksaan"
      desc="Order pencitraan (X-Ray, USG, CT, MRI), alur ekspertise, dan integrasi PACS."
      stats={[
        { label: "Order Hari Ini", value: "57", icon: "ScanLine" },
        { label: "Menunggu Ekspertise", value: "9", accent: "gold", icon: "Activity" },
        { label: "CITO", value: "3", accent: "crit", icon: "Siren" },
        { label: "Selesai", value: "41", accent: "primary", icon: "ShieldCheck" },
      ]}
      tableTitle="Antrean Pencitraan" tableSub="Terhubung PACS & RME"
      head={["No. Order", "Pasien", "Modalitas", "Region", "Status"]}
      rows={[
        [{ mono: "RAD-25063-204" } as any, "Joko Susilo", "CT-Scan", "Kepala tanpa kontras", { badge: "Proses" }],
        [{ mono: "RAD-25063-203" } as any, "Agus Salim", "X-Ray", "Cruris AP/Lateral", { badge: "Ekspertise" }],
        [{ mono: "RAD-25063-202" } as any, "Putri Lestari", "USG", "Obstetri", { badge: "Selesai" }],
        [{ mono: "RAD-25063-201" } as any, "Rina Wati", "MRI", "Lumbal", { badge: "Terjadwal" }],
      ]}
    />
  );
}
