// /layout.tsx - séparation du client et du serveur
import ClientLayout from "./ClientLayout";
import "./globals.css";
import "./reset.css";
import { DM_Sans } from "next/font/google";
import { initializeDatabase } from '@/lib/database';

(async () => {
  try {
    await initializeDatabase();
  } catch (error) {
    console.error("Failed to initialize database", error);
  }
})();

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
