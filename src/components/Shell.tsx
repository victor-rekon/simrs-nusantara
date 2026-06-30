"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { Icon } from "./icon";
import { findItem } from "@/lib/nav";

export default function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const current = findItem(path);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[var(--shell)_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[280px] animate-slidein shadow-pop">
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex min-h-screen flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-ink-200 bg-white/85 px-4 backdrop-blur-md sm:px-6">
          <button
            className="focusable grid h-10 w-10 place-items-center rounded-xl text-ink-600 hover:bg-ink-100 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
          >
            <Icon name="Menu" />
          </button>

          <div className="hidden items-center gap-2 text-sm text-ink-500 sm:flex">
            <Icon name={current?.icon ?? "LayoutDashboard"} size={16} className="text-primary-600" />
            <span className="font-semibold text-ink-800">{current?.label ?? "Dashboard"}</span>
          </div>

          {/* Search */}
          <div className="relative ml-auto hidden flex-1 max-w-sm md:block">
            <Icon name="Search" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              className="focusable w-full rounded-xl border border-ink-200 bg-ink-50 py-2 pl-9 pr-3 text-sm placeholder:text-ink-400"
              placeholder="Cari pasien, No. RM, SEP, obat…"
            />
          </div>

          <div className="ml-auto flex items-center gap-1 md:ml-2">
            <button className="focusable relative grid h-10 w-10 place-items-center rounded-xl text-ink-600 hover:bg-ink-100" aria-label="Notifikasi">
              <Icon name="Bell" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-crit ring-2 ring-white" />
            </button>
            <div className="ml-1 flex items-center gap-2 rounded-xl py-1 pl-1 pr-2 hover:bg-ink-100">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-100 text-primary-700">
                <Icon name="CircleUserRound" size={20} />
              </span>
              <div className="hidden text-left leading-tight sm:block">
                <p className="text-xs font-bold text-ink-800">Admin Pendaftaran</p>
                <p className="text-[10px] text-ink-500">Loket 1 · Shift Pagi</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>

        <footer className="border-t border-ink-200 px-6 py-4 text-center text-xs text-ink-400">
          SIMRS Nusantara · Prototype demo · Data simulasi — bukan data pasien sebenarnya
        </footer>
      </div>
    </div>
  );
}
