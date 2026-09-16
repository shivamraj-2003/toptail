"use client";

import { useState } from "react";

export default function Topbar({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const [role, setRole] = useState<"Owner / Admin" | "Front Desk">("Owner / Admin");

  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-magenta-100 bg-cream-50/90 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div>
        <h1 className="font-display text-xl font-semibold text-plum-900 sm:text-2xl">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-plum-600/70">{subtitle}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search customer, phone, invoice…"
            className="w-56 rounded-full border border-magenta-100 bg-white py-2 pl-9 pr-3 text-sm text-plum-900 placeholder:text-plum-400 focus:border-magenta-400 focus:outline-none focus:ring-2 focus:ring-magenta-100 sm:w-72"
          />
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-plum-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m20 20-3.2-3.2" />
          </svg>
        </div>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value as typeof role)}
          className="rounded-full border border-magenta-100 bg-white px-3 py-2 text-xs font-medium text-plum-800 focus:border-magenta-400 focus:outline-none"
        >
          <option>Owner / Admin</option>
          <option>Front Desk</option>
        </select>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-magenta-500 text-xs font-semibold text-white shadow-card">
          RS
        </div>
      </div>
    </header>
  );
}
