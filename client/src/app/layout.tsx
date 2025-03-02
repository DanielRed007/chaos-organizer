// In src/app/layout.tsx (or a separate component if you prefer)
import Link from "next/link";
import { ChaosProvider } from "@/context/ChaosContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-white">
        {/* Navbar */}
        <nav className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* SVG Logo */}
            <Link href="/" className="flex items-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="hover:animate-spin-slow" // Optional: slow spin on hover
              >
                {/* Gradient Definition */}
                <defs>
                  <linearGradient
                    id="chaosGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" style={{ stopColor: "#C084FC" }} />{" "}
                    {/* Purple-400 */}
                    <stop offset="100%" style={{ stopColor: "#EC4899" }} />{" "}
                    {/* Pink-600 */}
                  </linearGradient>
                </defs>

                {/* Swirling Vortex */}
                <path
                  d="M50 10
                     C70 10 90 30 90 50
                     C90 70 70 90 50 90
                     C30 90 10 70 10 50
                     C10 30 30 10 50 10
                     M50 20
                     C65 20 80 35 80 50
                     C80 65 65 80 50 80
                     C35 80 20 65 20 50
                     C20 35 35 20 50 20"
                  fill="none"
                  stroke="url(#chaosGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Chaotic Lines */}
                <path
                  d="M30 30 L70 70 M70 30 L30 70"
                  stroke="#6B7280" // Gray-500
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Star Accent */}
                <path
                  d="M50 35 L55 45 L65 47 L57 53 L59 63 L50 58 L41 63 L43 53 L35 47 L45 45 Z"
                  fill="url(#chaosGradient)"
                />
              </svg>
            </Link>

            {/* Links */}
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/chaos"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Dump Chaos
              </Link>
              <Link
                href="/organize"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                Organize
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <ChaosProvider>
          <main>{children}</main>
        </ChaosProvider>
      </body>
    </html>
  );
}
