import { PageHeader, StatCard, SectionLabel, Card } from "@/components/ui";
import { Icon } from "@/components/icon";
import {
  VitalCard, EquipmentCard, ColdChainCard, GasGaugeCard, PowerCard, FleetCard, LiveDot,
} from "@/components/iot";
import { icuVitals, criticalEquipment, coldChain, gasMedis, powerBackup, fleetGps } from "@/lib/iot";

export default function MonitoringIoT() {
  const totalDevices = criticalEquipment.length + coldChain.length + gasMedis.length + powerBackup.length + fleetGps.length + icuVitals.length;
  const offline = criticalEquipment.filter((d) => d.status === "Offline").length;
  const warning = criticalEquipment.filter((d) => d.status === "Peringatan").length;
  const online = totalDevices - offline;

  return (
    <>
      <PageHeader
        title="Monitoring IoT"
        desc="Telemetri perangkat medis & fasilitas secara real-time — gateway MQTT, pembaruan tiap 2–3 detik."
        actions={
          <span className="inline-flex items-center gap-2 rounded-xl border border-ok/30 bg-ok/10 px-3 py-2 text-xs font-bold text-ok">
            <LiveDot tone="ok" /> {online} dari {totalDevices} perangkat online
          </span>
        }
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Total Perangkat" value={totalDevices.toString()} icon={<Icon name="Radio" size={18} />} />
        <StatCard label="Online" value={online.toString()} accent="primary" icon={<Icon name="Wifi" size={18} />} />
        <StatCard label="Peringatan" value={warning.toString()} accent="gold" icon={<Icon name="Activity" size={18} />} />
        <StatCard label="Offline" value={offline.toString()} accent="crit" icon={<Icon name="WifiOff" size={18} />} />
      </div>

      {/* ICU vitals */}
      <div className="mt-8">
        <SectionLabel>Monitor Vital ICU — Bedside Monitor</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {icuVitals.map((d) => <VitalCard key={d.bed} d={d} />)}
        </div>
      </div>

      {/* Critical equipment */}
      <div className="mt-8">
        <SectionLabel>Peralatan Medis Kritis</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {criticalEquipment.map((d) => <EquipmentCard key={d.id} d={d} />)}
        </div>
      </div>

      {/* Cold chain */}
      <div className="mt-8">
        <SectionLabel>Cold Chain — Bank Darah & Farmasi</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {coldChain.map((d) => <ColdChainCard key={d.id} d={d} />)}
        </div>
      </div>

      {/* Gas medis */}
      <div className="mt-8">
        <SectionLabel>Gas Medis Sentral</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {gasMedis.map((d) => <GasGaugeCard key={d.id} d={d} />)}
        </div>
      </div>

      {/* Power backup */}
      <div className="mt-8">
        <SectionLabel>Genset & UPS</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {powerBackup.map((d) => <PowerCard key={d.id} d={d} />)}
        </div>
      </div>

      {/* Fleet GPS */}
      <div className="mt-8">
        <SectionLabel>Lokasi Armada Ambulans — GPS</SectionLabel>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {fleetGps.map((d) => <FleetCard key={d.id} d={d} />)}
        </div>
      </div>

      <Card className="mt-8 p-4 text-center text-xs text-ink-400">
        Data telemetri disimulasikan untuk keperluan demo — siap diintegrasikan ke gateway IoT (MQTT/LoRaWAN) saat implementasi produksi.
      </Card>
    </>
  );
}
