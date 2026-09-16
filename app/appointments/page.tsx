import AppShell from "@/components/AppShell";
import { Card, GhostButton, Pill, PrimaryButton, StatusPill } from "@/components/ui";
import { appointments, staffHours, staffList } from "@/lib/data";

const START_HOUR = 11;
const PX_PER_MIN = 1.6;

function toMinutesFromStart(time: string) {
  const [h, m] = time.split(":").map(Number);
  return (h - START_HOUR) * 60 + m;
}

const statusStyles: Record<string, string> = {
  Booked: "border-plum-300 bg-plum-50 text-plum-800",
  Completed: "border-sage-700/30 bg-sage-50 text-sage-700",
  Billed: "border-magenta-300 bg-magenta-50 text-magenta-700",
  Cancelled: "border-gray-200 bg-gray-50 text-gray-500 line-through",
};

export default function AppointmentsPage() {
  const dayHeight = (20 - START_HOUR) * 60 * PX_PER_MIN;

  return (
    <AppShell title="Appointments" subtitle="Tuesday, 16 September 2026 · Day view, 11:00 AM – 9:00 PM">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <GhostButton>◂ Mon</GhostButton>
          <GhostButton>Today</GhostButton>
          <GhostButton>Wed ▸</GhostButton>
          <span className="mx-1 h-6 w-px bg-magenta-100" />
          <GhostButton>Day</GhostButton>
          <GhostButton>Week</GhostButton>
        </div>
        <PrimaryButton>+ Walk-in / New booking</PrimaryButton>
      </div>

      <Card className="!p-0 overflow-hidden">
        <div className="grid grid-cols-[64px_repeat(3,1fr)] border-b border-cream-100">
          <div />
          {staffList.map((s) => (
            <div key={s} className="flex items-center gap-2 border-l border-cream-100 px-4 py-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-magenta-500 text-[11px] font-semibold text-white">
                {s[0]}
              </div>
              <span className="text-sm font-medium text-plum-900">{s}</span>
            </div>
          ))}
        </div>

        <div className="relative grid grid-cols-[64px_repeat(3,1fr)]" style={{ height: dayHeight }}>
          <div className="relative">
            {staffHours.map((h) => (
              <div
                key={h}
                className="absolute -translate-y-2 pr-2 text-right text-[11px] text-plum-400"
                style={{ top: toMinutesFromStart(h) * PX_PER_MIN, right: 0 }}
              >
                {h}
              </div>
            ))}
          </div>

          {staffList.map((s) => (
            <div key={s} className="relative border-l border-cream-100">
              {staffHours.map((h) => (
                <div
                  key={h}
                  className="absolute w-full border-t border-cream-100"
                  style={{ top: toMinutesFromStart(h) * PX_PER_MIN }}
                />
              ))}
              {appointments
                .filter((a) => a.staff === s)
                .map((a) => (
                  <div
                    key={a.id}
                    className={`absolute left-1 right-1 overflow-hidden rounded-lg border px-2.5 py-1.5 text-xs shadow-sm ${statusStyles[a.status]}`}
                    style={{
                      top: toMinutesFromStart(a.time) * PX_PER_MIN,
                      height: Math.max(a.durationMins * PX_PER_MIN - 4, 34),
                    }}
                  >
                    <p className="font-semibold">{a.client}</p>
                    <p className="opacity-80">{a.service}</p>
                    <p className="opacity-60">{a.time} · {a.durationMins} min</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Card>

      <div className="mt-5 flex flex-wrap gap-4 text-xs text-plum-600">
        {["Booked", "Completed", "Billed", "Cancelled"].map((s) => (
          <span key={s} className="flex items-center gap-1.5">
            <StatusPill status={s} />
            <span className="text-plum-400">— {s === "Booked" ? "confirmed slot" : s === "Completed" ? "service done, not billed" : s === "Billed" ? "invoice generated" : "no-show / cancelled"}</span>
          </span>
        ))}
        <Pill tone="magenta">Overlap check prevents double-booking</Pill>
      </div>
    </AppShell>
  );
}
