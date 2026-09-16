import AppShell from "@/components/AppShell";
import { Card, GhostButton, Pill, PrimaryButton, SectionLabel, StatusPill } from "@/components/ui";
import { followUps } from "@/lib/data";

const steps = [
  "Visit completed",
  "“Next visit due” calculated",
  "Daily check: 30 / 60 / 90 days",
  "Added to call list",
  "Staff calls & logs outcome",
  "Re-booked → removed",
];

export default function FollowUpsPage() {
  return (
    <AppShell title="Follow-up Reminders" subtitle="Bring customers back with a 30 / 60 / 90-day call list, built automatically">
      <Card className="mb-6">
        <div className="flex items-center justify-between">
          <SectionLabel>How the call list is built</SectionLabel>
          <Pill tone="magenta">Priority feature</Pill>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="rounded-full bg-plum-gradient px-3.5 py-2 text-xs font-medium text-white shadow-card">
                {s}
              </div>
              {i < steps.length - 1 && <span className="text-magenta-300">→</span>}
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>All (5)</GhostButton>
          <GhostButton>30 days (3)</GhostButton>
          <GhostButton>60 days (1)</GhostButton>
          <GhostButton>90 days (1)</GhostButton>
        </div>
        <PrimaryButton>Export call list</PrimaryButton>
      </div>

      <Card className="!p-0 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cream-100 bg-cream-50 text-left text-xs uppercase tracking-wide text-plum-500">
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-3 py-3 font-medium">Last visit</th>
              <th className="px-3 py-3 font-medium">Service</th>
              <th className="px-3 py-3 font-medium">Due bucket</th>
              <th className="px-3 py-3 font-medium">Outcome</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {followUps.map((f) => (
              <tr key={f.customer} className="border-b border-cream-100 last:border-0 hover:bg-cream-50">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-plum-900">{f.customer}</p>
                  <p className="text-xs text-plum-500">{f.phone}</p>
                </td>
                <td className="px-3 py-3.5 text-plum-700">{f.lastVisit}</td>
                <td className="px-3 py-3.5 text-plum-700">{f.service}</td>
                <td className="px-3 py-3.5">
                  <Pill tone="plum">{f.dueBucket}</Pill>
                </td>
                <td className="px-3 py-3.5">
                  <StatusPill status={f.outcome} />
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex justify-end gap-2 text-xs font-semibold text-magenta-600">
                    <button className="rounded-full border border-magenta-200 px-3 py-1.5 hover:bg-magenta-50">Call</button>
                    <button className="rounded-full border border-magenta-200 px-3 py-1.5 hover:bg-magenta-50">WhatsApp</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
