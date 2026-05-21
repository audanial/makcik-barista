import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { waLink } from "@/lib/whatsapp"
import { coffeeItems } from "@/lib/menuData"
import MenuCard from "@/components/MenuCard"

export const metadata: Metadata = {
  title: "MakCik Barista — Harom & Hirup",
  description:
    "Your favourite mobile coffee & food truck in Kepong, KL. Premium coffee, shakes, and event food — made with love.",
  openGraph: {
    title: "MakCik Barista — Harom & Hirup",
    description: "Your favourite mobile coffee & food truck in Kepong, KL.",
    type: "website",
  },
}

const categories = [
  {
    name: "Coffee",
    description: "Latte, Mocha, Americano & more",
    href: "/menu#coffee",
    emoji: "☕",
  },
  {
    name: "Non-Coffee",
    description: "Shakes, Chocolate & Dirty Matcha",
    href: "/menu#non-coffee",
    emoji: "🧋",
  },
  {
    name: "Food",
    description: "Nasi Lemak, Ramen & more at events",
    href: "/menu#food",
    emoji: "🍱",
  },
]

export default function HomePage() {
  const featured = coffeeItems.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/hero.jpeg"
          alt="MakCik Barista food truck"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-[#2D5A27]/75" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading text-7xl md:text-9xl italic mb-4">MakCik Barista</h1>
          <p className="text-sm tracking-[0.3em] mb-8">HAROM &amp; HIRUP</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={waLink("Hi MakCik Barista! Saya nak order. Boleh tolong? 😊")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#2D5A27] px-8 py-3 rounded-full font-medium hover:bg-[#F9F4EC] transition"
            >
              Order via WhatsApp
            </a>
            <Link
              href="/events"
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition"
            >
              Book an Event
            </Link>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-brown text-center mb-12 italic">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-brand-cream/80"
              >
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="font-heading text-2xl font-semibold text-brand-brown mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-brand-brown/60">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured drinks */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-brown text-center mb-2 italic">
            Crowd Favourites
          </h2>
          <p className="text-center text-brand-brown/50 mb-12 text-sm">
            Start with these — you can&apos;t go wrong
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-brand-green font-semibold hover:underline underline-offset-4"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="py-20 px-4 bg-brand-green text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl italic mb-4">
            Book Us For Your Event
          </h2>
          <p className="text-brand-cream/80 mb-10 leading-relaxed max-w-xl mx-auto">
            From kenduri to corporate events — we bring the coffee truck to you.
            Full menu including exclusive event food, freshly prepared on-site.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-full bg-white text-brand-green font-semibold px-8 py-3.5 hover:bg-brand-cream transition-colors"
          >
            Learn More About Events
          </Link>
        </div>
      </section>

      {/* Brand story snippet */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-brand-brown italic mb-4">
            Our Story
          </h2>
          <p className="text-brand-brown/70 leading-relaxed mb-6">
            Born from a love of good coffee and home-cooked warmth, MakCik Barista
            brings together expertly crafted drinks and heartfelt flavours — right
            to your doorstep.
          </p>
          <Link
            href="/about"
            className="text-brand-green font-semibold hover:underline underline-offset-4"
          >
            Read Our Story →
          </Link>
        </div>
      </section>
    </>
  )
}
