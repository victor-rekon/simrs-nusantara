import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = localFont({
  src: [
    { path: "../fonts/jakarta-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jakarta-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jakarta-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/jakarta-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/jakarta-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});
const mono = localFont({
  src: [
    { path: "../fonts/mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/mono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/mono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIMRS Nusantara — Sistem Informasi Manajemen Rumah Sakit",
  description:
    "Platform ERP rumah sakit terintegrasi: pelayanan klinis, penunjang, farmasi, keuangan, logistik, SDM, dan manajemen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
