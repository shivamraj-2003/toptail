import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Topcoat — Salon Management System",
  description: "Demo UI for the Topcoat salon management system MVP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream-50 font-sans text-plum-900 antialiased">{children}</body>
    </html>
  );
}
