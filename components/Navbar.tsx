"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        scrolled || open
          ? "bg-[#1E3D1A] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="MakCik Barista"
            width={44}
            height={44}
            className="object-contain rounded-full"
          />
          <span className="font-heading text-2xl italic font-semibold tracking-wide">
            MakCik Barista
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-white text-sm tracking-widest uppercase font-medium pb-1 transition-colors hover:text-white/80 ${
                isActive(link.href)
                  ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-white after:border-white"
                  : ""
              }`}
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
        <nav className="md:hidden bg-[#1E3D1A] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 text-sm tracking-widest uppercase font-medium transition-colors hover:text-white/80 ${
                isActive(link.href) ? "text-white" : "text-white/70"
              }`}
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
