"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import CartButton from "@/components/CartButton"
import CartDrawer from "@/components/CartDrawer"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Delivery", href: "/delivery" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
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
      className={`fixed top-0 left-0 right-0 z-50 w-full px-8 md:px-16 text-white transition-all duration-300 ${
        scrolled || open
          ? "bg-[#1E3D1A] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full py-4">
        {/* Logo + brand name */}
        {pathname === "/" ? (
          <button onClick={() => setLightboxOpen(true)} aria-label="View logo" className="flex items-center gap-3">
            <Image src="/images/logo3.png" alt="MakCik Barista" width={52} height={52} className="object-contain" unoptimized />
            <span className="font-heading italic text-white text-xl tracking-[0.08em]">MakCik Barista</span>
          </button>
        ) : (
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo3.png" alt="MakCik Barista" width={52} height={52} className="object-contain" unoptimized />
            <span className="font-heading italic text-white text-xl tracking-[0.08em]">MakCik Barista</span>
          </Link>
        )}

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 mr-2">
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

          {/* Cart button — always visible */}
          <CartButton onOpen={() => setCartOpen(true)} />

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
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

      {/* Logo lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/images/logo3.png"
              alt="MakCik Barista logo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="absolute bottom-8 text-white/60 text-sm tracking-widest">Click anywhere to close</p>
        </div>
      )}

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  )
}
