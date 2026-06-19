import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ELDING projekt d.o.o. | Solarne elektrane i elektroprojektiranje - Đakovo",
  description:
    "Projektiranje i ugradnja solarnih elektrana, elektroprojektiranje, energetski auditi i konzultacije za EU fondove. Đakovo i šira okolica. Kontaktirajte nas danas.",
  keywords:
    "solarne elektrane, solarni paneli, elektroprojektiranje, EU fondovi, Đakovo, energetska efikasnost",
  openGraph: {
    title: "ELDING projekt d.o.o. | Solarne elektrane",
    description:
      "Projektiranje i ugradnja solarnih elektrana u Đakovu i okolici. Stručnost, pouzdanost, preciznost.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
