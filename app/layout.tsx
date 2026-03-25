import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "HK Systems | Seguridad tecnologica integral",
    template: "%s | HK Systems"
  },
  description:
    "HK Systems integra tecnologia avanzada, consultoria y ejecucion para proteger personas, infraestructuras criticas y continuidad operativa.",
  keywords: [
    "seguridad tecnologica",
    "infraestructura critica",
    "control de accesos",
    "biometria",
    "escaneres",
    "seguridad electronica"
  ],
  metadataBase: new URL("https://www.hkargentina.com"),
  openGraph: {
    title: "HK Systems | Seguridad tecnologica integral",
    description:
      "Soluciones integrales de seguridad para entornos publicos, institucionales e industriales.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${manrope.variable} overflow-x-clip font-sans antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
