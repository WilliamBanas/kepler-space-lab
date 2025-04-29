import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import { DM_Sans } from "next/font/google";
import Head from "next/head";

// Importation de la police DM_Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Définir un titre par défaut si aucun titre n'est passé
const defaultTitle = "Kepler Space Lab";

export default function RootLayout({
  children,
  title = defaultTitle,
}: {
  children: React.ReactNode;
  title?: string; 
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={dmSans.className}>
        <Head>
          <title>{title}</title>
          <meta name="description" content="Description de la page" />
        </Head>
        {children}
      </body>
    </html>
  );
}
