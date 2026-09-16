"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getStoredUser, performFakeLogin } from "@/lib/auth";

const MODULES = [
  { href: "/dashboard", title: "Dashboard Overview", desc: "Real-time revenue, today's schedule, open balances and follow-up metrics at a glance.", icon: "M3.5 3.5h7v7h-7zM13.5 3.5h7v7h-7zM3.5 13.5h7v7h-7zM13.5 13.5h7v7h-7z" },
  { href: "/customers", title: "Customer CRM", desc: "Detailed profiles, nail preferences, allergy alerts, total spend, and visit history.", icon: "M9 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" },
  { href: "/appointments", title: "Day Calendar", desc: "Visual timeline scheduler with staff columns and duration-based booking slots.", icon: "M3.5 5h17v15.5h-17ZM3.5 9.5h17M8 3v4M16 3v4" },
  { href: "/billing", title: "Billing & Split POS", desc: "Fast checkout, discounts, split payment modes (UPI/Card/Cash), and invoice search.", icon: "M6 3.5h12v17l-2.5-1.6-2.5 1.6-2.5-1.6-2.5 1.6L6 20.5V3.5Z" },
  { href: "/follow-ups", title: "Client Retention", desc: "Automated 30/60/90-day call reminders generated intelligently from last visit dates.", icon: "M6 3.5h3l1.5 4-2 1.6a12 12 0 0 0 6.4 6.4l1.6-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 4.5 5.1 1.5 1.5 0 0 1 6 3.5Z" },
  { href: "/staff", title: "Staff Analytics", desc: "Staff performance tracking, services completed count, and monthly revenue share.", icon: "M12 12.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM7 21l1.4-6M17 21l-1.4-6" },
  { href: "/reports", title: "Financial Reports", desc: "Daily collection reports, payment mode breakdown, and transaction ledgers.", icon: "M4 20V10M11 20V4M18 20v-7M3 20h18" },
];

const FEATURES = [
  {
    title: "Allergy & Custom Note Alerts",
    desc: "Never risk skin irritation or gel product misuse. Crucial client warnings (e.g. acrylic primer sensitivity) surface instantly.",
    badge: "Safety First",
  },
  {
    title: "Split Payment POS",
    desc: "Allow clients to seamlessly pay part in Cash, part in UPI, or credit card with real-time balance status updates.",
    badge: "Flexible POS",
  },
  {
    title: "Automated 30/60/90 Day Reminders",
    desc: "Keep your appointment book 90%+ filled. Automatically spot clients due for a refill or regular manicure.",
    badge: "Boost Retention",
  },
  {
    title: "Staff Performance Insights",
    desc: "Track completed services and revenue generated per technician (Riya, Meera, Zara) to reward top performers.",
    badge: "Staff Analytics",
  },
];

const TESTIMONIALS = [
  {
    quote: "Topcoat simplified our daily operations completely. The split payments and automated 30-day follow-up calls increased repeat bookings by 35%.",
    author: "Ritu Sharma",
    role: "Salon Director, Topcoat Bandra",
    rating: "★★★★★",
  },
  {
    quote: "Our front desk loves how fast we can check out clients and log allergy notes. It saves us at least 2 hours every single day.",
    author: "Pooja Malhotra",
    role: "Operations Manager",
    rating: "★★★★★",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser({ name: user.name, role: user.role });
    }
  }, []);

  const handleInstantDemoLogin = () => {
    performFakeLogin("ritu.sharma@topcoat.com", "Owner / Admin");
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-cream-50 text-plum-900 font-sans selection:bg-magenta-100 selection:text-magenta-800">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-30 border-b border-magenta-100 bg-cream-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-magenta-500 text-base font-bold text-white shadow-card">
              TC
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none text-plum-900">Topcoat</p>
              <p className="text-[11px] font-medium tracking-wider text-magenta-600 uppercase">The Nail Experts</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-plum-700 md:flex">
            <a href="#features" className="hover:text-magenta-600 transition">Features</a>
            <a href="#modules" className="hover:text-magenta-600 transition">Modules</a>
            <a href="#login" className="hover:text-magenta-600 transition">Sign In</a>
            <a href="#testimonials" className="hover:text-magenta-600 transition">Reviews</a>
            <a href="#pricing" className="hover:text-magenta-600 transition">Pricing</a>
          </div>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-magenta-500 px-5 py-2.5 text-xs font-semibold text-white shadow-card transition hover:bg-magenta-600"
              >
                Dashboard ({currentUser.name.split(" ")[0]})
                <span aria-hidden>→</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hidden rounded-full border border-magenta-200 bg-white px-4 py-2 text-xs font-semibold text-plum-800 shadow-sm transition hover:bg-magenta-50 sm:inline-flex"
                >
                  Sign In
                </Link>
                <button
                  onClick={handleInstantDemoLogin}
                  className="inline-flex items-center gap-1.5 rounded-full bg-magenta-500 px-4 py-2 text-xs font-semibold text-white shadow-card transition hover:bg-magenta-600"
                >
                  Quick Demo Login
                  <span aria-hidden>→</span>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-plum-gradient px-6 py-20 text-white sm:px-12 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-magenta-500/20 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-magenta-200 backdrop-blur border border-white/10">
                <span className="h-2 w-2 rounded-full bg-magenta-400 animate-pulse" />
                Salon Management Suite · MVP 2026
              </div>

              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                The Complete Software Built for <span className="text-magenta-300">Nail Salons</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base text-magenta-100/90 leading-relaxed sm:text-lg">
                Seamlessly organize appointment calendars, client sensitivity notes, split payment billing, technician commissions, and automated 30/60/90-day client retention call lists.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleInstantDemoLogin}
                  className="inline-flex items-center gap-2 rounded-full bg-magenta-500 px-7 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-magenta-600 hover:shadow-lg"
                >
                  Launch Live Demo Dashboard
                  <span aria-hidden>→</span>
                </button>

                <a
                  href="#login"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Sign In with Fake Auth
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs text-magenta-200/80">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>No Backend Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Pre-loaded Sample Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7"/></svg>
                  <span>Instant Role Switch</span>
                </div>
              </div>
            </div>

            {/* Right Card / Interactive Login Form */}
            <div id="login" className="lg:col-span-5">
              <LoginForm onSuccessRedirect="/dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-magenta-100 bg-white py-8 px-6 sm:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div>
            <p className="font-display text-3xl font-bold text-plum-900 sm:text-4xl">₹1.42L+</p>
            <p className="mt-1 text-xs font-medium text-plum-600/70 uppercase tracking-wide">Top Artist Revenue / Mo</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-magenta-600 sm:text-4xl">90%+</p>
            <p className="mt-1 text-xs font-medium text-plum-600/70 uppercase tracking-wide">Repeat Visit Rate</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-plum-900 sm:text-4xl">&lt; 30s</p>
            <p className="mt-1 text-xs font-medium text-plum-600/70 uppercase tracking-wide">Fast POS Checkout</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-magenta-600 sm:text-4xl">100%</p>
            <p className="mt-1 text-xs font-medium text-plum-600/70 uppercase tracking-wide">Allergy & Note Accuracy</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 sm:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-magenta-600 uppercase">Designed for Excellence</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-plum-900 sm:text-4xl">
            Everything your nail studio needs to thrive
          </h2>
          <p className="mt-3 text-sm text-plum-600/80">
            Purpose-built workflows to reduce client wait times, prevent chemical allergy mistakes, and maximize daily chair turnover.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-magenta-100 bg-white p-6 shadow-card transition hover:shadow-lg hover:border-magenta-300"
            >
              <span className="inline-block rounded-full bg-magenta-50 px-3 py-1 text-[11px] font-semibold text-magenta-700">
                {f.badge}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-plum-900">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-plum-600/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Modules Section */}
      <section id="modules" className="bg-cream-100/60 py-20 px-6 sm:px-12 border-y border-magenta-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-wider text-magenta-600 uppercase">Core Modules</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-plum-900 sm:text-4xl">
                Explore the System Modules
              </h2>
              <p className="mt-2 text-sm text-plum-600/80 max-w-xl">
                Every card below leads to a fully populated, interactive page pre-filled with sample salon data.
              </p>
            </div>
            <button
              onClick={handleInstantDemoLogin}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-full bg-plum-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-plum-800"
            >
              Enter System Dashboard →
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-magenta-100 bg-white p-6 shadow-card transition hover:border-magenta-400 hover:shadow-lg"
              >
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-magenta-50 text-magenta-600 group-hover:bg-magenta-500 group-hover:text-white transition">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d={m.icon} />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-plum-900 group-hover:text-magenta-700 transition">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-plum-600/80">{m.desc}</p>
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-magenta-600 group-hover:translate-x-1 transition-transform">
                  View Page Sample <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 sm:px-12">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-magenta-600 uppercase">Loved by Salon Owners</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-plum-900">What Managers Say</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-magenta-100 bg-white p-8 shadow-card">
              <div className="text-amber-500 text-sm tracking-widest">{t.rating}</div>
              <p className="mt-3 text-sm italic leading-relaxed text-plum-800">"{t.quote}"</p>
              <div className="mt-6 border-t border-magenta-50 pt-4">
                <p className="font-display text-sm font-semibold text-plum-900">{t.author}</p>
                <p className="text-xs text-plum-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Demo CTA */}
      <section id="pricing" className="bg-plum-gradient py-20 px-6 sm:px-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Streamline Your Salon?</h2>
          <p className="mt-4 text-sm text-magenta-100/90 max-w-xl mx-auto">
            Experience the complete demo environment right now with zero setup or backend configuration required.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleInstantDemoLogin}
              className="rounded-full bg-magenta-500 px-8 py-3.5 text-sm font-semibold text-white shadow-card transition hover:bg-magenta-600"
            >
              Log in to Dashboard
            </button>
            <Link
              href="/login"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Open Login Page
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-magenta-100 bg-cream-50 px-6 py-8 text-center text-xs text-plum-600 sm:px-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-magenta-500 text-[10px] font-bold text-white">
              TC
            </div>
            <span className="font-display font-semibold text-plum-900">Topcoat The Nail Experts</span>
          </div>
          <p>© 2026 Topcoat Salon Suite · Built with Next.js & Tailwind CSS</p>
          <div className="flex gap-4 font-medium text-magenta-700">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
            <a href="#features">Features</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
