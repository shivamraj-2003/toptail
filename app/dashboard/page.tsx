import AppShell from "@/components/AppShell";
import { Card, SectionLabel, StatCard, StatusPill, Pill } from "@/components/ui";
import { appointments, customers, followUps, invoices, revenueByDay } from "@/lib/data";

export default function DashboardPage() {
  const todaysRevenue = revenueByDay[revenueByDay.length - 1];
  const todaysTotal = todaysRevenue.cash + todaysRevenue.card + todaysRevenue.upi;
  const weekTotal = revenueByDay.reduce((s, d) => s + d.cash + d.card + d.upi, 0);
  const openBalance = invoices.reduce((s, i) => s + i.balance, 0);
  const maxDay = Math.max(...revenueByDay.map((d) => d.cash + d.card + d.upi));

  return (
    <AppShell title="Dashboard" subtitle="Tuesday, 16 September 2026 · 11:00 AM – 9:00 PM">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's revenue" value={`₹${todaysTotal.toLocaleString("en-IN")}`} delta="+12%" hint="vs. same day last week" />
        <StatCard label="This week" value={`₹${weekTotal.toLocaleString("en-IN")}`} delta="+8%" hint="Mon–Sun, all payment modes" />
        <StatCard label="Open balances" value={`₹${openBalance.toLocaleString("en-IN")}`} delta="2 invoices" deltaTone="down" hint="Advance paid / balance due" />
        <StatCard label="Follow-ups due" value={`${followUps.length}`} delta="this week" deltaTone="flat" hint="30 / 60 / 90-day triggers" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <SectionLabel>Revenue this week · by payment mode</SectionLabel>
            <div className="flex gap-3 text-[11px] text-plum-600">
              <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-plum-700 inline-block" /> Cash</span>
              <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-magenta-500 inline-block" /> Card</span>
              <span className="flex items-center gap-1"><i className="h-2 w-2 rounded-full bg-magenta-200 inline-block" /> UPI</span>
            </div>
          </div>
          <div className="mt-5 flex items-end gap-3">
            {revenueByDay.map((d) => {
              const total = d.cash + d.card + d.upi;
              const heightPx = Math.max((total / maxDay) * 176, 10);
              return (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full text-center text-[11px] font-medium text-plum-500">
                    ₹{(total / 1000).toFixed(1)}k
                  </div>
                  <div
                    className="flex w-full max-w-[34px] flex-col-reverse overflow-hidden rounded-t-md"
                    style={{ height: heightPx }}
                  >
                    <div className="bg-plum-700" style={{ height: `${(d.cash / total) * 100}%` }} />
                    <div className="bg-magenta-500" style={{ height: `${(d.card / total) * 100}%` }} />
                    <div className="bg-magenta-200" style={{ height: `${(d.upi / total) * 100}%` }} />
                  </div>
                  <span className="text-[11px] font-medium text-plum-600">{d.day}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <SectionLabel>Today's appointments</SectionLabel>
          <div className="space-y-3">
            {appointments.slice(0, 5).map((a) => (
              <div key={a.id} className="flex items-center justify-between gap-3 border-b border-cream-100 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-plum-900">{a.client}</p>
                  <p className="text-xs text-plum-500">{a.service} · {a.time} · {a.staff}</p>
                </div>
                <StatusPill status={a.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between">
            <SectionLabel>Follow-ups due this week</SectionLabel>
            <Pill tone="magenta">Priority feature</Pill>
          </div>
          <div className="space-y-3">
            {followUps.slice(0, 4).map((f) => (
              <div key={f.customer} className="flex items-center justify-between gap-3 border-b border-cream-100 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-plum-900">{f.customer}</p>
                  <p className="text-xs text-plum-500">Last visit {f.lastVisit} · due in {f.dueBucket}</p>
                </div>
                <StatusPill status={f.outcome} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <SectionLabel>Customers with open balance / allergies</SectionLabel>
          <div className="space-y-3">
            {customers.slice(0, 4).map((c) => (
              <div key={c.id} className="flex items-center justify-between gap-3 border-b border-cream-100 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-plum-900">{c.name}</p>
                  <p className="text-xs text-plum-500">{c.notes}</p>
                </div>
                <StatusPill status={c.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
