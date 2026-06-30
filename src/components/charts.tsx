"use client";
import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line,
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const axis = { stroke: "#94A3B8", fontSize: 11, tickLine: false, axisLine: false };
const tip = {
  contentStyle: {
    borderRadius: 12, border: "1px solid #E2E8F0", boxShadow: "0 8px 30px rgba(15,23,42,.12)",
    fontSize: 12, fontFamily: "var(--font-jakarta)", padding: "8px 12px",
  },
};

export function KunjunganChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="gRajal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#198069" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#198069" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F6" vertical={false} />
        <XAxis dataKey="hari" {...axis} />
        <YAxis {...axis} width={36} />
        <Tooltip {...tip} />
        <Area type="monotone" dataKey="rajal" name="Rawat Jalan" stroke="#0B6E5B" strokeWidth={2.5} fill="url(#gRajal)" />
        <Line type="monotone" dataKey="igd" name="IGD" stroke="#E11D48" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="ranap" name="Rawat Inap" stroke="#C8922A" strokeWidth={2} dot={false} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function PendapatanChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }} barCategoryGap={18}>
        <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F6" vertical={false} />
        <XAxis dataKey="bln" {...axis} />
        <YAxis {...axis} width={36} unit=" M" />
        <Tooltip {...tip} formatter={(v: number) => v + " M"} />
        <Bar dataKey="bpjs" name="BPJS" stackId="a" fill="#0B6E5B" radius={[0, 0, 0, 0]} />
        <Bar dataKey="umum" name="Umum" stackId="a" fill="#C8922A" />
        <Bar dataKey="asuransi" name="Asuransi" stackId="a" fill="#0284C7" radius={[4, 4, 0, 0]} />
        <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function MixDonut({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="name" innerRadius={52} outerRadius={80} paddingAngle={3} stroke="none">
          {data.map((d, i) => <Cell key={i} fill={d.fill} />)}
        </Pie>
        <Tooltip {...tip} formatter={(v: number) => v + "%"} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function PoliBar({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 16, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F6" horizontal={false} />
        <XAxis type="number" {...axis} />
        <YAxis type="category" dataKey="poli" {...axis} width={104} />
        <Tooltip {...tip} />
        <Bar dataKey="kuota" name="Kuota" fill="#E2E8F0" radius={[0, 4, 4, 0]} />
        <Bar dataKey="antri" name="Antrean" fill="#198069" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function Spark({ data, color = "#0B6E5B" }: { data: number[]; color?: string }) {
  const d = data.map((y, x) => ({ x, y }));
  return (
    <ResponsiveContainer width="100%" height={36}>
      <LineChart data={d} margin={{ top: 4, right: 2, left: 2, bottom: 0 }}>
        <Line type="monotone" dataKey="y" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
