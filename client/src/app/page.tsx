import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-5">
        Chaos Organizer
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-300 text-center max-w-2xl mt-4">
        Dump your mess. Drag it into order. Master the chaos in a dark,
        delightful abyss.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link
            href="/chaos"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-lg font-semibold transition-colors"
          >
            Start the Chaos
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="/organize"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg font-semibold transition-colors"
          >
            Organize It
          </Link>
        </Button>
      </div>

      {/* Subtle Footer */}
      <footer className="mt-16 text-gray-500 text-sm">
        Built in the shadows by a chaos tamer. 2025.
      </footer>
    </div>
  );
}
