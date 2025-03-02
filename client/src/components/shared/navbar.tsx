import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Chaos Organizer
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        <div
          className={`flex gap-6 ${
            isOpen
              ? "flex-col absolute top-14 left-0 right-0 bg-gray-900 p-4"
              : "hidden md:flex"
          }`}
        >
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
  );
};
