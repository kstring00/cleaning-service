import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.city}, ${siteConfig.state}`,
  description: `Professional cleaning services in ${siteConfig.city}, Texas. Private website concept for ${siteConfig.businessName}.`,
  robots: siteConfig.previewMode
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
