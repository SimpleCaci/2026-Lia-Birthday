import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somewhere Between Timelines",
  description: "An interactive archive told across distance and time.",
  robots: { index: false, follow: false, nocache: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

