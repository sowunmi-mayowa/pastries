import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import LanguageProvider from "@/components/LanguageProvider";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Élise Pâtisserie | Pâtisserie Artisanale à Paris",
  description:
    "Découvrez nos créations artisanales réalisées avec passion. Croissants, éclairs, tartes et macarons faits maison. Pré-commandez en ligne pour un retrait en boutique à Paris.",
  keywords:
    "pâtisserie, Paris, artisan, croissants, éclairs, macarons, gâteaux sur mesure, boulangerie française",
  openGraph: {
    title: "Maison Élise Pâtisserie",
    description: "Pâtisserie artisanale de luxe à Paris",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Nav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
