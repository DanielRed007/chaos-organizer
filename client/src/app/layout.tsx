"use client";

import { ChaosProvider } from "@/context/ChaosContext";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <ChaosProvider>
          <main>{children}</main>
        </ChaosProvider>
      </body>
    </html>
  );
}
