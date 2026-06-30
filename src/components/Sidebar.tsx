"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";
import { Icon } from "./icon";
import { HOSPITAL } from "@/lib/data";

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const path = usePathname();
  return (
    <div className="flex h-full flex-col bg-primary-950 text-primary-100">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-500 text-white shadow-pop">
          <Icon name="HeartPulse" size={22} />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-extrabold tracking-tight text-white">SIMRS Nusantara</p>
          <p className="text-[11px] text-primary-300">{HOSPITAL.name}</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="scroll-thin flex-1 overflow-y-auto px-3 pb-4">
        {NAV.map((group) => (
          <div key={group.title} className="mb-4">
            <p className="px-3 pb-1.5 pt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-400/80">
              {group.title}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((it) => {
                const active = path === it.href;
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onClick={onNavigate}
                      className={`group relative flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition ${
                        active
                          ? "bg-primary-500/20 text-white"
                          : "text-primary-200 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {active && <span className="absolute left-0 h-5 w-1 rounded-r-full bg-primary-300" />}
                      <Icon name={it.icon} size={17} className={active ? "text-primary-200" : "text-primary-300 group-hover:text-primary-100"} />
                      <span className="flex-1 truncate">{it.label}</span>
                      {it.badge && (
                        <span className="rounded-full bg-primary-500/30 px-1.5 py-0.5 text-[10px] font-bold text-primary-100">
                          {it.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gold-500/20 text-gold-400">
            <Icon name="Building2" size={15} />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-white">{HOSPITAL.type}</p>
            <p className="text-[10px] text-primary-300">Akreditasi {HOSPITAL.akreditasi}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
