import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-cream-50 flex flex-col justify-between">
      {/* Header Bar */}
      <header className="border-b border-magenta-100 bg-white/80 px-6 py-4 backdrop-blur sm:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-magenta-500 text-sm font-bold text-white shadow-card">
              TC
            </div>
            <div>
              <p className="font-display text-base font-semibold text-plum-900 leading-none">Topcoat</p>
              <p className="text-[10px] tracking-wide text-plum-500">The Nail Experts</p>
            </div>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-magenta-700 hover:text-magenta-800 transition"
          >
            ← Back to Landing Page
          </Link>
        </div>
      </header>

      {/* Main Login Container */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        {/* Background Accent Gradients */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta-200/30 blur-3xl" />

        <div className="mx-auto max-w-md">
          <LoginForm onSuccessRedirect="/dashboard" compact />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-magenta-100 bg-white py-4 text-center text-xs text-plum-500">
        Topcoat The Nail Experts · Demo Salon Management Software
      </footer>
    </main>
  );
}
