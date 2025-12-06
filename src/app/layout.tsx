import type { Metadata } from "next";
import { Poppins, Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PT FISHNESIA MITRA BERSAMA - Advertising Agency & Creative Services",
  description: "Perusahaan yang bergerak di bidang jasa periklanan dan layanan kreatif yang berfokus pada membangun brand yang kuat, modern, dan relevan di era digital.",
  keywords: ["FISHNESIA", "advertising", "creative agency", "branding", "digital marketing", "promosi", "iklan", "surabaya"],
  authors: [{ name: "PT FISHNESIA MITRA BERSAMA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "PT FISHNESIA MITRA BERSAMA - Advertising Agency & Creative Services",
    description: "Solusi pemasaran terpadu untuk membantu bisnis meningkatkan visibilitas dan mencapai hasil yang terukur",
    url: "https://fishnesia.com",
    siteName: "PT FISHNESIA MITRA BERSAMA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT FISHNESIA MITRA BERSAMA",
    description: "Advertising Agency & Creative Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${lato.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
