"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icon";
import type { DeviceStatus } from "@/lib/iot";

// Simulates a live sensor reading by jittering around a baseline. No real
// device is connected — this is a visual stand-in for telemetry.
export function useLiveValue(base: number, amplitude: number, decimals = 0) {
  const [val, setVal] = useState(base);
  const phase = useRef(Math.random() * Math.PI * 2);
  useEffect(() => {
    if (amplitude === 0) return;
    const id = setInterval(() => {
      phase.current += 0.6 + Math.random() * 0.6;
      const jitter = Math.sin(phase.current) * amplitude * 0.6 + (Math.random() - 0.5) * amplitude * 0.7;
      setVal(Number((base + jitter).toFixed(decimals)));
    }, 1800 + Math.random() * 800);
    return () => clearInterval(id);
  }, [base, amplitude, decimals]);
  return val;
}

export function LiveDot({ tone = "ok" }: { tone?: "ok" | "warn" | "crit" | "off" }) {
  const c = { ok: "bg-ok", warn: "bg-warn", crit: "bg-crit", off: "bg-ink-300" }[tone];
  return <span className={`relative inline-flex h-2 w-2 rounded-full ${c} ${tone !== "off" ? "animate-pulse2" : ""}`} />;
}

export function StatusBadge({ status }: { status: DeviceStatus }) {
  const cfg = {
    Online: { tone: "ok" as const, icon: "Wifi", cls: "bg-ok/10 text-ok ring-ok/20" },
    Peringatan: { tone: "warn" as const, icon: "Wifi", cls: "bg-warn/10 text-warn ring-warn/20" },
    Offline: { tone: "off" as const, icon: "WifiOff", cls: "bg-ink-200 text-ink-500 ring-ink-300/40" },
  }[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${cfg.cls}`}>
      <LiveDot tone={cfg.tone} />
      {status}
    </span>
  );
}

function rangeTone(value: number, min: number, max: number): "ok" | "warn" | "crit" {
  const span = max - min;
  const lo = min + span * 0.12, hi = max - span * 0.12;
  if (value < min || value > max) return "crit";
  if (value < lo || value > hi) return "warn";
  return "ok";
}

export function RangeGauge({ value, min, max }: { value: number; min: number; max: number }) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const tone = rangeTone(value, min, max);
  const bar = { ok: "bg-primary-500", warn: "bg-warn", crit: "bg-crit" }[tone];
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
      <div className={`h-full rounded-full transition-all duration-700 ${bar}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

// ---- ICU patient vital monitor card ----
export function VitalCard({ d }: { d: typeof import("@/lib/iot").icuVitals[number] }) {
  const hr = useLiveValue(d.hr, d.hrAmp, 0);
  const spo2 = useLiveValue(d.spo2, d.spo2Amp, 0);
  const sistol = useLiveValue(d.sistol, d.bpAmp, 0);
  const diastol = useLiveValue(d.diastol, d.bpAmp * 0.6, 0);
  const rr = useLiveValue(d.rr, d.rrAmp, 0);
  const suhu = useLiveValue(d.suhu, d.suhuAmp, 1);
  const hrTone = hr > 100 || hr < 60 ? "text-crit" : "text-ink-900";
  const spo2Tone = spo2 < 94 ? "text-crit" : "text-ink-900";

  return (
    <div className="rounded-2xl border border-ink-200 bg-ink-950 p-4 text-primary-50 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-primary-300">{d.bed}</p>
          <p className="text-sm font-semibold text-white">{d.pasien}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ok/15 px-2 py-0.5 text-[10px] font-bold text-ok">
          <LiveDot tone="ok" /> LIVE
        </span>
      </div>
      <p className="mt-1 text-[11px] text-primary-400">{d.dx}</p>
      <div className="mt-3 grid grid-cols-4 gap-2 text-center">
        <div>
          <p className={`tnum text-lg font-extrabold ${hrTone === "text-crit" ? "text-crit" : "text-white"}`}>{hr}</p>
          <p className="text-[9px] uppercase tracking-wide text-primary-400">HR bpm</p>
        </div>
        <div>
          <p className={`tnum text-lg font-extrabold ${spo2Tone === "text-crit" ? "text-crit" : "text-white"}`}>{spo2}</p>
          <p className="text-[9px] uppercase tracking-wide text-primary-400">SpO₂ %</p>
        </div>
        <div>
          <p className="tnum text-lg font-extrabold text-white">{sistol}/{diastol}</p>
          <p className="text-[9px] uppercase tracking-wide text-primary-400">TD mmHg</p>
        </div>
        <div>
          <p className="tnum text-lg font-extrabold text-white">{rr}</p>
          <p className="text-[9px] uppercase tracking-wide text-primary-400">RR /mnt</p>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-[11px] text-primary-300">
        <span>Suhu {suhu}°C</span>
        <span className="font-mono text-primary-400/80">bedside monitor</span>
      </div>
    </div>
  );
}

// ---- Critical equipment card ----
export function EquipmentCard({ d }: { d: typeof import("@/lib/iot").criticalEquipment[number] }) {
  const v = useLiveValue(d.base, d.amp, d.unit === "°C" || d.unit === "ml/jam" ? 1 : 0);
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-ink-900">{d.nama}</p>
          <p className="text-xs text-ink-500">{d.lokasi} · <span className="font-mono">{d.id}</span></p>
        </div>
        <StatusBadge status={d.status} />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-ink-500">{d.metric}</span>
        <span className="tnum text-sm font-bold text-ink-900">
          {d.status === "Offline" ? "—" : `${v}${d.unit ? " " + d.unit : ""}`}
        </span>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-400">
        <Icon name="BatteryCharging" size={13} className={d.baterai < 40 ? "text-warn" : "text-ink-400"} />
        Baterai {d.baterai}%
      </div>
    </div>
  );
}

// ---- Cold chain / fridge card ----
export function ColdChainCard({ d }: { d: typeof import("@/lib/iot").coldChain[number] }) {
  const suhu = useLiveValue(d.suhu, d.amp, 1);
  const kelembaban = useLiveValue(d.kelembaban, 2, 0);
  const tone = rangeTone(suhu, d.min, d.max);
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-ink-900">{d.nama}</p>
          <p className="text-xs text-ink-500">{d.lokasi}</p>
        </div>
        <span className={`grid h-9 w-9 place-items-center rounded-xl ${tone === "crit" ? "bg-crit/10 text-crit" : tone === "warn" ? "bg-warn/10 text-warn" : "bg-info/10 text-info"}`}>
          <Icon name="Thermometer" size={17} />
        </span>
      </div>
      <div className="mt-3 flex items-end gap-1.5">
        <span className="tnum text-2xl font-extrabold text-ink-900">{suhu}°C</span>
        <span className="mb-1 text-xs text-ink-400">batas {d.min}–{d.max}°C</span>
      </div>
      <div className="mt-2"><RangeGauge value={suhu} min={d.min} max={d.max} /></div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-ink-400">
        <span>Kelembaban {kelembaban}%</span>
        <span className="inline-flex items-center gap-1 font-semibold text-ok"><LiveDot tone="ok" /> Live</span>
      </div>
    </div>
  );
}

// ---- Gas medis sentral gauge card ----
export function GasGaugeCard({ d }: { d: typeof import("@/lib/iot").gasMedis[number] }) {
  const tekanan = useLiveValue(d.tekanan, d.amp, 2);
  const tone = rangeTone(tekanan, d.min, d.max);
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-ink-900">{d.nama}</p>
          <p className="text-xs text-ink-500">{d.lokasi}</p>
        </div>
        <Icon name="Gauge" size={17} className={tone === "crit" ? "text-crit" : tone === "warn" ? "text-warn" : "text-primary-500"} />
      </div>
      <p className="tnum mt-3 text-2xl font-extrabold text-ink-900">{tekanan} <span className="text-xs font-medium text-ink-400">{d.unit}</span></p>
      <div className="mt-2"><RangeGauge value={tekanan} min={d.min} max={d.max} /></div>
    </div>
  );
}

// ---- Power backup card ----
export function PowerCard({ d }: { d: typeof import("@/lib/iot").powerBackup[number] }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-ink-900">{d.nama}</p>
          <p className="text-xs text-ink-500">Tes terakhir {d.lastTest}</p>
        </div>
        <Icon name="Zap" size={17} className={d.status === "Online" ? "text-ok" : "text-ink-400"} />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1">
          <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
            <div className={`h-full rounded-full ${d.baterai > 50 ? "bg-ok" : "bg-warn"}`} style={{ width: `${d.baterai}%` }} />
          </div>
        </div>
        <span className="tnum text-sm font-bold text-ink-800">{d.baterai}%</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-ink-400">
        <span>{d.status} · runtime cadangan {d.runtime} mnt</span>
      </div>
    </div>
  );
}

// ---- Ambulance GPS card ----
export function FleetCard({ d }: { d: typeof import("@/lib/iot").fleetGps[number] }) {
  const kecepatan = useLiveValue(d.kecepatan, d.kecepatan > 0 ? 4 : 0, 0);
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-4 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-bold text-ink-900">{d.id}</p>
          <p className="text-xs text-ink-500">{d.lokasi}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-info/10 px-2 py-0.5 text-[10px] font-bold text-info">
          <Icon name="Navigation" size={11} /> GPS
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="tnum text-base font-extrabold text-ink-900">{kecepatan}</p>
          <p className="text-[9px] uppercase tracking-wide text-ink-400">km/jam</p>
        </div>
        <div>
          <p className="tnum text-base font-extrabold text-ink-900">{d.bahanBakar}%</p>
          <p className="text-[9px] uppercase tracking-wide text-ink-400">BBM</p>
        </div>
        <div>
          <p className="tnum text-base font-extrabold text-ink-900">{d.eta || "—"}</p>
          <p className="text-[9px] uppercase tracking-wide text-ink-400">ETA mnt</p>
        </div>
      </div>
      <div className="mt-2 text-[11px] font-semibold text-ink-600">{d.status}</div>
    </div>
  );
}
