"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#2D5A27] text-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl italic font-semibold tracking-wide">
          MakCik Barista
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-brand-cream/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#2D5A27] border-t border-white/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium hover:text-brand-cream/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
