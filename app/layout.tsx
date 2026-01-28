import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { themeScript } from "./lib/theme-script";
import { GlowCursor } from "./components/glow-cursor";

// Konfigurasi font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", // Menggunakan CSS Variable
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Ismail",
  description: "My Portofolio - Frontend engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning penting agar tidak error saat mismatch tema antara server & client */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }}></script>
      </head>

      <body className={`${inter} ${robotoMono}`}>
        <Header />
        <GlowCursor />
        {children}
      </body>
    </html>
  );
}
