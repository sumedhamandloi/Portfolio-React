"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">RN</span>
                  <span className="hidden md:block text-xl font-semibold">Rachit Neema</span>
                </div>
              </div>
            </div>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <Link href="#about" className="hover:text-purple-100 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-purple-100 transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#tracer" className="hover:text-purple-100 transition-colors">
                    Tracer
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-purple-100 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contacts" className="hover:text-purple-100 transition-colors">
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="md:hidden">
              <button type="button" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-teal-500 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block px-3 py-2 hover:bg-purple-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 hover:bg-purple-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#tracer"
              className="block px-3 py-2 hover:bg-purple-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Tracer
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 hover:bg-purple-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contacts"
              className="block px-3 py-2 hover:bg-purple-700 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacts
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
