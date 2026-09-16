import AppShell from "@/components/AppShell";
import { Card, GhostButton, Pill, PrimaryButton, SectionLabel, StatCard, StatusPill } from "@/components/ui";
import { invoices, revenueByDay, staff } from "@/lib/data";

export default function ReportsPage() {
  const totalCash = revenueByDay.reduce((s, d) => s + d.cash, 0);
  const totalCard = revenueByDay.reduce((s, d) => s + d.card, 0);
  const totalUpi = revenueByDay.reduce((s, d) => s + d.upi, 0);
  const grandTotal = totalCash + totalCard + totalUpi;

  return (
    <AppShell title="Reports" subtitle="Transactions, collection and staff performance — reads the same records as billing">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>Transactions</GhostButton>
          <GhostButton>Collection</GhostButton>
          <GhostButton>Staff performance</GhostButton>
        </div>
        <PrimaryButton>Export CSV</PrimaryButton>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Cash collected" value={`₹${totalCash.toLocaleString("en-IN")}`} hint="This week" />
        <StatCard label="Card collected" value={`₹${totalCard.toLocaleString("en-IN")}`} hint="This week" />
        <StatCard label="UPI / other collected" value={`₹${totalUpi.toLocaleString("en-IN")}`} hint="This week" />
      </div>

      <Card className="mt-5">
        <div className="flex items-center justify-between">
          <SectionLabel>Collection mix</SectionLabel>
          <span className="text-xs text-plum-500">₹{grandTotal.toLocaleString("en-IN")} total</span>
        </div>
        <div className="flex h-3 w-full overflow-hidden rounded-full bg-cream-100">
          <div className="bg-plum-700" style={{ width: `${(totalCash / grandTotal) * 100}%` }} />
          <div className="bg-magenta-500" style={{ width: `${(totalCard / grandTotal) * 100}%` }} />
          <div className="bg-magenta-200" style={{ width: `${(totalUpi / grandTotal) * 100}%` }} />
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-plum-600">
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-plum-700 inline-block" /> Cash · {Math.round((totalCash / grandTotal) * 100)}%</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-magenta-500 inline-block" /> Card · {Math.round((totalCard / grandTotal) * 100)}%</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-magenta-200 inline-block" /> UPI · {Math.round((totalUpi / grandTotal) * 100)}%</span>
        </div>
      </Card>

      <Card className="mt-5 !p-0 overflow-hidden">
        <SectionLabel><span className="block px-5 pt-5">Transactions report</span></SectionLabel>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
              <th className="px-5 py-3 font-medium">INV</th>
              <th className="px-3 py-3 font-medium">TX Code</th>
              <th className="px-3 py-3 font-medium">Client</th>
              <th className="px-3 py-3 font-medium">Services</th>
              <th className="px-3 py-3 font-medium">Time</th>
              <th className="px-3 py-3 font-medium text-right">Cost</th>
              <th className="px-3 py-3 font-medium text-right">Disc</th>
              <th className="px-3 py-3 font-medium">Mode</th>
              <th className="px-3 py-3 font-medium text-right">Net</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.inv} className="border-b border-cream-100 last:border-0 hover:bg-cream-50">
                <td className="px-5 py-3.5 font-medium text-plum-900">{inv.inv}</td>
                <td className="px-3 py-3.5 text-plum-600">{inv.tx}</td>
                <td className="px-3 py-3.5 text-plum-700">{inv.client}</td>
                <td className="px-3 py-3.5 text-plum-700">{inv.services}</td>
                <td className="px-3 py-3.5 text-plum-700">{inv.time}</td>
                <td className="px-3 py-3.5 text-right text-plum-700">₹{inv.cost.toLocaleString("en-IN")}</td>
                <td className="px-3 py-3.5 text-right text-magenta-600">₹{inv.discount.toLocaleString("en-IN")}</td>
                <td className="px-3 py-3.5"><Pill tone="plum">{inv.mode}</Pill></td>
                <td className="px-3 py-3.5 text-right font-medium text-plum-900">₹{inv.net.toLocaleString("en-IN")}</td>
                <td className="px-5 py-3.5"><StatusPill status={inv.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card className="mt-5 !p-0 overflow-hidden">
        <SectionLabel><span className="block px-5 pt-5">Staff performance</span></SectionLabel>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
              <th className="px-5 py-3 font-medium">Staff</th>
              <th className="px-3 py-3 font-medium text-right">Services</th>
              <th className="px-5 py-3 font-medium text-right">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {staff.filter((s) => s.active).map((s) => (
              <tr key={s.name} className="border-b border-cream-100 last:border-0 hover:bg-cream-50">
                <td className="px-5 py-3.5 font-medium text-plum-900">{s.name}</td>
                <td className="px-3 py-3.5 text-right text-plum-700">{s.servicesThisMonth}</td>
                <td className="px-5 py-3.5 text-right font-medium text-plum-900">₹{s.revenueThisMonth.toLocaleString("en-IN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
