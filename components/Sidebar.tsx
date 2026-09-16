"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: "grid" },
  { href: "/customers", label: "Customers", icon: "users" },
  { href: "/billing", label: "Billing", icon: "receipt" },
  { href: "/appointments", label: "Appointments", icon: "calendar" },
  { href: "/follow-ups", label: "Follow-ups", icon: "phone" },
  { href: "/staff", label: "Staff", icon: "badge" },
  { href: "/reports", label: "Reports", icon: "chart" },
];

function Icon({ name, className }: { name: string; className?: string }) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.7, viewBox: "0 0 24 24" };
  switch (name) {
    case "grid":
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.2" />
          <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
          <circle cx="17" cy="8.5" r="2.4" />
          <path d="M15 14.8c2.6.2 4.5 2.2 4.5 5.2" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...common}>
          <path d="M6 3.5h12v17l-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6L6 20.5V3.5Z" />
          <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
          <path d="M3.5 9.5h17M8 3v4M16 3v4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3.5h3l1.5 4-2 1.6a12 12 0 0 0 6.4 6.4l1.6-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5Z" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common}>
          <circle cx="12" cy="8.5" r="4" />
          <path d="M7 21l1.4-6M17 21l-1.4-6" />
          <path d="M8.4 15h7.2" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 20V10M11 20V4M18 20v-7" />
          <path d="M3 20h18" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between bg-plum-gradient px-4 py-6 text-cream-50 lg:flex">
      <div>
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-magenta-500 text-sm font-bold text-white shadow-card">
            TC
          </div>
          <div className="leading-tight">
            <p className="font-display text-[15px] font-semibold text-white">Topcoat</p>
            <p className="text-[11px] tracking-wide text-magenta-200/80">The Nail Experts</p>
          </div>
        </div>

        <nav className="space-y-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  active
                    ? "bg-white/12 text-white shadow-inner"
                    : "text-magenta-100/70 hover:bg-white/8 hover:text-white"
                }`}
              >
                <Icon
                  name={item.icon}
                  className={`h-[18px] w-[18px] shrink-0 ${active ? "text-magenta-300" : "text-magenta-200/60 group-hover:text-magenta-300"}`}
                />
                <span>{item.label}</span>
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-magenta-400" />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-3 px-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-[11px] uppercase tracking-wide text-magenta-200/70">Hosting</p>
          <p className="mt-1 text-xs text-magenta-50/90">Hostinger VPS · Mumbai region</p>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-sage-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> All systems normal
          </div>
        </div>
        <p className="px-1 text-[10px] text-magenta-200/50">Demo build · Dev Nexa</p>
      </div>
    </aside>
  );
}
