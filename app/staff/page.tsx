import AppShell from "@/components/AppShell";
import { Card, GhostButton, Pill, PrimaryButton, SectionLabel } from "@/components/ui";
import { staff } from "@/lib/data";

export default function StaffPage() {
  const maxRevenue = Math.max(...staff.map((s) => s.revenueThisMonth));

  return (
    <AppShell title="Staff Management" subtitle="Profiles, services performed and revenue generated per staff member">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>Active (3)</GhostButton>
          <GhostButton>Inactive (1)</GhostButton>
        </div>
        <PrimaryButton>+ Add staff</PrimaryButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {staff.map((s) => (
          <Card key={s.name} className={!s.active ? "opacity-60" : ""}>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-magenta-500 text-sm font-semibold text-white">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-plum-900">{s.name}</p>
                <p className="text-xs text-plum-500">{s.role}</p>
              </div>
            </div>

            <div className="mt-4 space-y-1.5 text-xs text-plum-600">
              <p>{s.phone}</p>
              <p>Joined {s.joined}</p>
            </div>

            {s.active ? (
              <>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-plum-500">This month</span>
                  <span className="font-semibold text-plum-900">₹{s.revenueThisMonth.toLocaleString("en-IN")}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-cream-100">
                  <div
                    className="h-full rounded-full bg-magenta-500"
                    style={{ width: `${(s.revenueThisMonth / maxRevenue) * 100}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-plum-500">{s.servicesThisMonth} services completed</p>
              </>
            ) : (
              <Pill tone="gray">Inactive · history kept</Pill>
            )}
          </Card>
        ))}
      </div>

      <Card className="mt-6 !p-0 overflow-hidden">
        <SectionLabel><span className="block px-5 pt-5">Revenue by staff · this month</span></SectionLabel>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
              <th className="px-5 py-3 font-medium">Staff</th>
              <th className="px-3 py-3 font-medium">Role</th>
              <th className="px-3 py-3 font-medium text-right">Services</th>
              <th className="px-5 py-3 font-medium text-right">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.name} className="border-b border-cream-100 last:border-0 hover:bg-cream-50">
                <td className="px-5 py-3.5 font-medium text-plum-900">{s.name}</td>
                <td className="px-3 py-3.5 text-plum-700">{s.role}</td>
                <td className="px-3 py-3.5 text-right text-plum-700">{s.servicesThisMonth}</td>
                <td className="px-5 py-3.5 text-right font-medium text-plum-900">
                  ₹{s.revenueThisMonth.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
