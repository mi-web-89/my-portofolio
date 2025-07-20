import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./component/Header"
import Footer from "./component/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Portofolio keren",
  description: "Dibuat dengan Next.js oleh seorang developer hebat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter} bg-slate-900 text-slate-100`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
