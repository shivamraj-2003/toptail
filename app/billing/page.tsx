import AppShell from "@/components/AppShell";
import { Card, GhostButton, Pill, PrimaryButton, SectionLabel, StatusPill } from "@/components/ui";
import { invoices } from "@/lib/data";

export default function BillingPage() {
  const draft = invoices[2];

  return (
    <AppShell title="Billing & Invoicing" subtitle="Itemised bills, split payments and a searchable invoice history">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>Today</GhostButton>
          <GhostButton>This week</GhostButton>
          <GhostButton>Balance due (1)</GhostButton>
        </div>
        <PrimaryButton>+ New invoice</PrimaryButton>
      </div>

      <div className="grid gap-5 xl:grid-cols-5">
        <Card className="!p-0 overflow-hidden xl:col-span-3">
          <SectionLabel><span className="block px-5 pt-5">Billing history</span></SectionLabel>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
                <th className="px-5 py-3 font-medium">INV</th>
                <th className="px-3 py-3 font-medium">Client</th>
                <th className="px-3 py-3 font-medium">Mode</th>
                <th className="px-3 py-3 font-medium text-right">Net</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, i) => (
                <tr key={inv.inv} className={`border-b border-cream-100 last:border-0 ${i === 2 ? "bg-magenta-50/60" : "hover:bg-cream-50"}`}>
                  <td className="px-5 py-3.5">
                    <p className="font-medium text-plum-900">{inv.inv}</p>
                    <p className="text-xs text-plum-500">{inv.tx}</p>
                  </td>
                  <td className="px-3 py-3.5 text-plum-700">{inv.client}</td>
                  <td className="px-3 py-3.5">
                    <Pill tone="plum">{inv.mode}</Pill>
                  </td>
                  <td className="px-3 py-3.5 text-right font-medium text-plum-900">₹{inv.net.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3.5">
                    <StatusPill status={inv.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="xl:col-span-2">
          <div className="flex items-center justify-between">
            <SectionLabel>Invoice {draft.inv}</SectionLabel>
            <Pill tone="amber">Balance due</Pill>
          </div>

          <div className="space-y-2 border-b border-cream-100 pb-4 text-sm">
            <div className="flex justify-between">
              <span className="text-plum-500">Client</span>
              <span className="font-medium text-plum-900">{draft.client}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-plum-500">Services</span>
              <span className="text-right text-plum-900">{draft.services}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-plum-500">Time</span>
              <span className="text-plum-900">{draft.time}</span>
            </div>
          </div>

          <div className="space-y-2 border-b border-cream-100 py-4 text-sm">
            <div className="flex justify-between">
              <span className="text-plum-500">Cost</span>
              <span className="text-plum-900">₹{draft.cost.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-plum-500">Discount</span>
              <span className="text-magenta-600">− ₹{draft.discount.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-plum-700">Net amount</span>
              <span className="text-plum-900">₹{draft.net.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="py-4">
            <SectionLabel>Payment lines</SectionLabel>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between rounded-lg bg-cream-50 px-3 py-2">
                <span className="text-plum-700">Advance · UPI</span>
                <span className="font-medium text-plum-900">₹1,800</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-cream-50 px-3 py-2">
                <span className="text-plum-700">Cash on visit</span>
                <span className="font-medium text-plum-900">₹0</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg bg-magenta-50 px-3 py-2 text-sm font-semibold text-magenta-700">
              <span>Balance due</span>
              <span>₹{draft.balance.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <PrimaryButton className="flex-1 justify-center">Record payment</PrimaryButton>
            <GhostButton className="flex-1 justify-center">Print invoice</GhostButton>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
