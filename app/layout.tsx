import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// TODO: Ažurirajte siteUrl kada dobijete vlastitu domenu (npr. https://www.elding-projekt.hr)
const siteUrl = "https://elding-solar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ELDING projekt d.o.o. | Solarne elektrane i elektroprojektiranje — Đakovo",
    template: "%s | ELDING projekt d.o.o.",
  },
  description:
    "Projektiranje i ugradnja solarnih elektrana, elektroprojektiranje, energetski auditi i konzultacije za EU fondove. Đakovo i šira okolica. Kontaktirajte nas danas.",
  keywords: [
    "solarne elektrane",
    "solarni paneli",
    "elektroprojektiranje",
    "EU fondovi solarna energija",
    "Đakovo solarne elektrane",
    "ugradnja solarnih panela",
    "energetska efikasnost",
    "obnovljivi izvori energije",
    "fotovoltaika",
    "energetski audit",
    "solarni sustavi Slavonija",
  ],
  authors: [{ name: "ELDING projekt d.o.o." }],
  creator: "ELDING projekt d.o.o.",
  publisher: "ELDING projekt d.o.o.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: siteUrl,
    siteName: "ELDING projekt d.o.o.",
    title: "ELDING projekt d.o.o. | Solarne elektrane — Đakovo",
    description:
      "Projektiranje i ugradnja solarnih elektrana u Đakovu i okolici. Stručnost, pouzdanost, preciznost.",
    images: [
      {
        url: "/elding_projekti.jpeg",
        width: 1200,
        height: 630,
        alt: "ELDING projekt d.o.o. — Solarne elektrane Đakovo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELDING projekt d.o.o. | Solarne elektrane — Đakovo",
    description:
      "Projektiranje i ugradnja solarnih elektrana u Đakovu i okolici. EU fondovi, energetski auditi, elektroprojektiranje.",
    images: ["/elding_projekti.jpeg"],
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
