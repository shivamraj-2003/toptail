"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser, removeStoredUser, performFakeLogin, AuthUser, UserRole } from "@/lib/auth";

export default function Topbar({
  title,
  subtitle,
  onOpenMobileMenu,
}: {
  title: string;
  subtitle?: string;
  onOpenMobileMenu?: () => void;
}) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = getStoredUser();
    if (stored) {
      setUser(stored);
    } else {
      const defaultUser = performFakeLogin("ritu.sharma@topcoat.com", "Owner / Admin");
      setUser(defaultUser);
    }
  }, []);

  const handleRoleChange = (newRole: UserRole) => {
    if (user) {
      const updated = performFakeLogin(user.email, newRole);
      setUser(updated);
    }
  };

  const handleLogout = () => {
    removeStoredUser();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-10 flex flex-col gap-3 border-b border-magenta-100 bg-cream-50/90 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div className="flex items-center gap-3">
        {onOpenMobileMenu && (
          <button
            onClick={onOpenMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-magenta-100 bg-white text-plum-900 shadow-sm hover:bg-magenta-50 transition lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        <div>
          <h1 className="font-display text-xl font-semibold text-plum-900 sm:text-2xl">{title}</h1>
          {subtitle && <p className="mt-0.5 text-sm text-plum-600/70">{subtitle}</p>}
        </div>
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
          value={user?.role || "Owner / Admin"}
          onChange={(e) => handleRoleChange(e.target.value as UserRole)}
          className="rounded-full border border-magenta-100 bg-white px-3 py-2 text-xs font-medium text-plum-800 focus:border-magenta-400 focus:outline-none"
        >
          <option value="Owner / Admin">Owner / Admin</option>
          <option value="Front Desk">Front Desk</option>
          <option value="Senior Nail Artist">Senior Artist</option>
        </select>

        <div className="flex items-center gap-2 rounded-full border border-magenta-100 bg-white py-1 pl-1 pr-3 shadow-sm">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-magenta-500 text-xs font-bold text-white shadow-card">
            {user?.avatarInitials || "RS"}
          </div>
          <span className="hidden text-xs font-medium text-plum-900 sm:inline">
            {user?.name || "Ritu Sharma"}
          </span>
        </div>

        <button
          onClick={handleLogout}
          title="Sign out & return to landing page"
          className="inline-flex items-center justify-center rounded-full border border-magenta-200 bg-white p-2 text-xs font-medium text-plum-600 transition hover:bg-magenta-50 hover:text-magenta-700"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
