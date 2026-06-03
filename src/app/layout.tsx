import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "listedbyjeff.com | San Diego Real Estate",
  description:
    "Your trusted guide to finding your first home in San Diego. Search homes with Jeff, your San Diego real estate specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="min-w-0 overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
