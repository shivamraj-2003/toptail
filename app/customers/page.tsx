import AppShell from "@/components/AppShell";
import { Card, GhostButton, PrimaryButton, SectionLabel, StatusPill } from "@/components/ui";
import { customers } from "@/lib/data";

export default function CustomersPage() {
  const active = customers[2];

  return (
    <AppShell title="Customers" subtitle="One view of every customer — profile, preferences and full visit history">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>All (128)</GhostButton>
          <GhostButton>Due this week (2)</GhostButton>
          <GhostButton>Overdue (2)</GhostButton>
        </div>
        <PrimaryButton>+ New customer</PrimaryButton>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2 !p-0 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Last visit</th>
                <th className="px-5 py-3 font-medium">Next due</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-b border-cream-100 last:border-0 ${i === 2 ? "bg-magenta-50/60" : "hover:bg-cream-50"}`}
                >
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-plum-900">{c.name}</p>
                    <p className="text-xs text-plum-500">{c.id}</p>
                  </td>
                  <td className="px-5 py-3.5 text-plum-700">{c.phone}</td>
                  <td className="px-5 py-3.5 text-plum-700">{c.lastVisit}</td>
                  <td className="px-5 py-3.5 text-plum-700">{c.nextDue}</td>
                  <td className="px-5 py-3.5">
                    <StatusPill status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card>
          <SectionLabel>Customer profile</SectionLabel>
          <div className="flex items-center gap-3 border-b border-cream-100 pb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-magenta-500 text-sm font-semibold text-white">
              {active.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-display text-base font-semibold text-plum-900">{active.name}</p>
              <p className="text-xs text-plum-500">{active.id} · {active.phone}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-magenta-50 px-3 py-2.5 text-xs text-magenta-700">
            ⚠ {active.notes}
          </div>

          <dl className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-plum-500">Email</dt>
              <dd className="text-plum-900">{active.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-plum-500">Preferred artist</dt>
              <dd className="text-plum-900">{active.preferredArtist}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-plum-500">Total spent</dt>
              <dd className="text-plum-900">₹{active.totalSpent.toLocaleString("en-IN")}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-plum-500">Next visit due</dt>
              <dd className="text-plum-900">{active.nextDue}</dd>
            </div>
          </dl>

          <SectionLabel><span className="mt-5 block">Recent visits</span></SectionLabel>
          <ul className="space-y-2.5 text-sm">
            <li className="flex justify-between border-b border-cream-100 pb-2">
              <span className="text-plum-700">12 Sep — Nail Extensions, Gel Polish</span>
              <span className="font-medium text-plum-900">₹3,600</span>
            </li>
            <li className="flex justify-between border-b border-cream-100 pb-2">
              <span className="text-plum-700">28 Aug — Manicure, Pedicure</span>
              <span className="font-medium text-plum-900">₹1,800</span>
            </li>
            <li className="flex justify-between">
              <span className="text-plum-700">14 Aug — Gel Polish</span>
              <span className="font-medium text-plum-900">₹900</span>
            </li>
          </ul>
        </Card>
      </div>
    </AppShell>
  );
}
