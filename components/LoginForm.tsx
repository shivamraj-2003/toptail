"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { performFakeLogin, getStoredUser, UserRole } from "@/lib/auth";

export default function LoginForm({
  onSuccessRedirect = "/dashboard",
  compact = false,
}: {
  onSuccessRedirect?: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("ritu.sharma@topcoat.com");
  const [password, setPassword] = useState("••••••••••••");
  const [role, setRole] = useState<UserRole>("Owner / Admin");
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState<string | null>(null);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setActiveUser(user.name);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate backend API response delay
    setTimeout(() => {
      performFakeLogin(email, role);
      setIsLoading(false);
      router.push(onSuccessRedirect);
    }, 600);
  };

  const handleQuickLogin = (demoRole: UserRole, demoEmail: string) => {
    setEmail(demoEmail);
    setRole(demoRole);
    setIsLoading(true);

    setTimeout(() => {
      performFakeLogin(demoEmail, demoRole);
      setIsLoading(false);
      router.push(onSuccessRedirect);
    }, 400);
  };

  return (
    <div className={`w-full rounded-2xl border border-magenta-100 bg-white p-6 shadow-card sm:p-8 ${compact ? "max-w-md" : ""}`}>
      {activeUser && (
        <div className="mb-6 rounded-xl border border-sage-100 bg-sage-50 p-3.5 text-xs text-sage-700">
          <div className="flex items-center justify-between">
            <span>
              Currently signed in as <strong>{activeUser}</strong>
            </span>
            <button
              onClick={() => router.push("/dashboard")}
              className="font-semibold text-magenta-700 hover:underline"
            >
              Go to Dashboard →
            </button>
          </div>
        </div>
      )}

      <div className="mb-6 text-left">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-magenta-50 px-2.5 py-1 text-[11px] font-semibold text-magenta-700">
          <span className="h-1.5 w-1.5 rounded-full bg-magenta-500 animate-pulse" />
          Fake Authentication (No Backend Required)
        </div>
        <h3 className="font-display text-2xl font-semibold text-plum-900">Sign in to Topcoat</h3>
        <p className="mt-1 text-sm text-plum-600/70">
          Access your salon dashboard, client CRM, billing & appointments.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-plum-800">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. admin@topcoat.com"
            className="mt-1.5 w-full rounded-xl border border-magenta-100 bg-cream-50/50 px-4 py-2.5 text-sm text-plum-900 placeholder:text-plum-400 focus:border-magenta-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-magenta-100 transition"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold uppercase tracking-wider text-plum-800">
              Password
            </label>
            <span className="text-[11px] text-plum-500 italic">(Any password works)</span>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter any password"
            className="mt-1.5 w-full rounded-xl border border-magenta-100 bg-cream-50/50 px-4 py-2.5 text-sm text-plum-900 placeholder:text-plum-400 focus:border-magenta-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-magenta-100 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-plum-800">
            Select Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="mt-1.5 w-full rounded-xl border border-magenta-100 bg-cream-50/50 px-4 py-2.5 text-sm text-plum-900 focus:border-magenta-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-magenta-100 transition"
          >
            <option value="Owner / Admin">Owner / Admin (Full Access)</option>
            <option value="Front Desk">Front Desk (Appointments & Cashier)</option>
            <option value="Senior Nail Artist">Senior Nail Artist (My Schedule)</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-magenta-500 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-magenta-600 disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Authenticating…
            </>
          ) : (
            <>
              Sign In to Dashboard <span aria-hidden>→</span>
            </>
          )}
        </button>
      </form>

      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-magenta-100" />
        </div>
        <span className="relative bg-white px-3 text-xs font-medium text-plum-500">
          Or Quick Demo Login
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => handleQuickLogin("Owner / Admin", "ritu.sharma@topcoat.com")}
          className="flex flex-col items-start rounded-xl border border-magenta-100 bg-cream-50/60 p-3 text-left transition hover:border-magenta-300 hover:bg-magenta-50/50"
        >
          <span className="text-xs font-semibold text-plum-900">Salon Owner</span>
          <span className="text-[10px] text-plum-500">Full control & analytics</span>
        </button>
        <button
          type="button"
          onClick={() => handleQuickLogin("Front Desk", "frontdesk@topcoat.com")}
          className="flex flex-col items-start rounded-xl border border-magenta-100 bg-cream-50/60 p-3 text-left transition hover:border-magenta-300 hover:bg-magenta-50/50"
        >
          <span className="text-xs font-semibold text-plum-900">Front Desk</span>
          <span className="text-[10px] text-plum-500">Calendar & Billing</span>
        </button>
      </div>
    </div>
  );
}
