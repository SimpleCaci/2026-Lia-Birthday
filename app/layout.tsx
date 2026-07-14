import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Somewhere Between Timelines",
  description: "A private birthday story for Lia, told across distance and time.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

