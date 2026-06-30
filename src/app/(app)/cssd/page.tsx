import ModuleScaffold from "@/components/ModuleScaffold";
export default function Page() {
  return (
    <ModuleScaffold
      title="CSSD — Sterilisasi Sentral" icon="Recycle" primaryAction="Input siklus baru"
      desc="Pengelolaan instrumen steril: dekontaminasi, packing, sterilisasi, dan distribusi set."
      stats={[
        { label: "Set Diproses", value: "76", icon: "Recycle" },
        { label: "Siklus Autoclave", value: "9", accent: "primary", icon: "Activity" },
        { label: "Set Steril Siap", value: "184", accent: "info", icon: "ShieldCheck" },
        { label: "Reject / Re-proses", value: "2", accent: "crit", icon: "Siren" },
      ]}
      tableTitle="Monitoring Siklus Sterilisasi" tableSub="Indikator biologis & kimia"
      head={["No. Siklus", "Set", "Metode", "Indikator", "Status"]}
      rows={[
        [{ mono: "STR-0630-09" } as any, "Set Laparotomi", "Steam 134°C", "BI: Pass", { badge: "Steril" }],
        [{ mono: "STR-0630-08" } as any, "Set Minor OK-3", "Steam 134°C", "BI: Pass", { badge: "Steril" }],
        [{ mono: "STR-0630-07" } as any, "Set SC", "Steam 121°C", "Proses", { badge: "Proses" }],
        [{ mono: "STR-0630-06" } as any, "Set Endoskopi", "Plasma H2O2", "BI: Fail", { badge: "Re-proses" }],
      ]}
    />
  );
}
