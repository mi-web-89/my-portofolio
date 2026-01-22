import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Ismail",
  description: "My Portofolio - Tech enthusiast and Frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
