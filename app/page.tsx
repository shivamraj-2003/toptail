import Link from "next/link";

const MODULES = [
  { href: "/dashboard", title: "Dashboard", desc: "Revenue, today's schedule, open balances and follow-ups at a glance." },
  { href: "/customers", title: "Customer Management", desc: "Profiles, preferences, allergies and full visit history." },
  { href: "/billing", title: "Billing & Invoicing", desc: "Itemised bills, split payments, searchable invoice history." },
  { href: "/appointments", title: "Appointment Scheduling", desc: "Day calendar with staff columns and duration-based blocking." },
  { href: "/follow-ups", title: "Follow-up Reminders", desc: "30/60/90-day call list built automatically from visit history." },
  { href: "/staff", title: "Staff Management", desc: "Profiles, services performed and revenue per staff member." },
  { href: "/reports", title: "Dashboard & Reports", desc: "Transactions, collection and staff performance reports." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50">
      <section className="relative overflow-hidden bg-plum-gradient px-6 py-16 text-white sm:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-magenta-100">
            MVP Proposal · Ref DN/TOPCOAT/2026-09
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
            Salon Management System
            <span className="block text-magenta-300">— demo pages</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-magenta-100/90 sm:text-base">
            A clickable preview of the core modules from the proposal — Dashboard, CRM, Billing,
            Appointments, Follow-up Reminders, Staff and Reports — built with Next.js and Tailwind,
            using sample data.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-magenta-500 px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-magenta-600"
            >
              Open the dashboard
              <span aria-hidden>→</span>
            </Link>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Browse all modules
            </a>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-5xl px-6 py-12 sm:px-12">
        <h2 className="font-display text-lg font-semibold text-plum-900">In the MVP</h2>
        <p className="mt-1 text-sm text-plum-600/80">
          Every card below links to a working sample screen for that module.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="group rounded-2xl border border-magenta-100 bg-white p-5 shadow-card transition hover:border-magenta-300 hover:shadow-lg"
            >
              <p className="font-display text-base font-semibold text-plum-900 group-hover:text-magenta-700">
                {m.title}
              </p>
              <p className="mt-1.5 text-sm text-plum-600/80">{m.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-magenta-600">
                View sample <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-magenta-100 px-6 py-6 text-center text-xs text-plum-500 sm:px-12">
        Topcoat The Nail Experts · Salon Management System · Demo UI by Dev Nexa
      </footer>
    </main>
  );
}
