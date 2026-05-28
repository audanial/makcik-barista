import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Coffee, Droplets, UtensilsCrossed, ChevronDown, Leaf, Heart } from "lucide-react"
import { waLink } from "@/lib/whatsapp"
import { coffeeItems } from "@/lib/menuData"
import MenuCard from "@/components/MenuCard"
import AnimateOnScroll from "@/components/AnimateOnScroll"

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
    Icon: Coffee,
  },
  {
    name: "Non-Coffee",
    description: "Shakes, Chocolate & Dirty Matcha",
    href: "/menu#non-coffee",
    Icon: Droplets,
  },
  {
    name: "Food",
    description: "Nasi Lemak, Ramen & more at events",
    href: "/menu#food",
    Icon: UtensilsCrossed,
  },
]

export default function HomePage() {
  const featured = coffeeItems.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/hero2.jpeg"
          alt="MakCik Barista food truck"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3D1A]/65 via-[#1E3D1A]/60 to-[#1E3D1A]/85" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-heading not-italic tracking-[0.4em] text-5xl md:text-7xl text-white mb-5 uppercase">
            Harom &amp; Hirup
          </h1>
          <p className="text-sm md:text-base font-light text-white/75 tracking-[0.25em] uppercase mb-10">
            Good Coffee. Great Events.
          </p>
          <Link
            href="/events"
            className="inline-block bg-[#B8692E] text-white px-12 py-4 rounded-full text-sm md:text-base font-medium hover:bg-[#a05a25] transition-colors"
          >
            Book an Event
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </section>

      {/* Slow Bar */}
      <section className="py-20 bg-[#1E3D1A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#B8692E] text-xs tracking-[0.3em] uppercase mb-3">The MakCik Barista Way</p>
          <h2 className="font-heading text-4xl italic text-white mb-4">Slow Bar. Every Cup.</h2>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-16">
            No shortcuts, no machines doing the work for us. Every drink is made by hand, with care, the slow bar way.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {([
              { Icon: Leaf, step: "01", title: "Fresh Ingredients", desc: "Sourced fresh for every event" },
              { Icon: Droplets, step: "02", title: "Brewed By Hand", desc: "No machines, pure craft" },
              { Icon: Heart, step: "03", title: "Crafted With Care", desc: "Every cup gets our full attention" },
              { Icon: Coffee, step: "04", title: "Served With Love", desc: "Warm, just like Makcik intended" },
            ] as const).map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 150}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border border-[#B8692E]/40 flex items-center justify-center mb-4">
                    <item.Icon size={24} color="#B8692E" />
                  </div>
                  <p className="text-[#B8692E] text-xs tracking-widest mb-1">{item.step}</p>
                  <p className="text-white font-medium text-sm mb-2">{item.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-20 px-4 bg-[#FFFEF9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-[#1C1008] text-center mb-12 italic">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <AnimateOnScroll key={cat.name} delay={i * 150} className="h-full">
                <Link
                  href={cat.href}
                  className="group flex flex-col items-center bg-[#FFFEF9] border border-[#F0EBE1] rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0EBE1] mb-4 group-hover:bg-[#1E3D1A] transition-colors duration-300">
                    <cat.Icon className="w-5 h-5 text-[#1E3D1A] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-[#1C1008] mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#1C1008]/60">{cat.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Crowd Favourites */}
      <section className="py-20 px-4 bg-[#F0EBE1]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1C1008] text-center mb-2 italic">
              Crowd Favourites
            </h2>
            <p className="text-center text-[#1C1008]/50 mb-12 text-sm">
              Start with these — you can&apos;t go wrong
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <AnimateOnScroll key={item.name} delay={i * 150}>
                <MenuCard item={item} />
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-[#1E3D1A] font-semibold hover:underline underline-offset-4"
            >
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section
        className="py-20 px-4 text-white"
        style={{
          backgroundColor: "#1E3D1A",
          backgroundImage: "radial-gradient(circle, #2D5A27 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl md:text-5xl italic mb-4">
              Book Us For Your Event
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              From kenduri to corporate events — we bring the coffee truck to you.
              Full menu including exclusive event food, freshly prepared on-site.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#1E3D1A] font-semibold px-8 py-3.5 hover:bg-[#FAF7F2] transition-colors"
            >
              Learn More About Events
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <div
              className="font-heading text-8xl text-[#B8692E] leading-none mb-0 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1C1008] italic mb-4">
              Our Story
            </h2>
            <p className="text-[#1C1008]/70 leading-relaxed mb-6">
              Born from a love of good coffee and home-cooked warmth, MakCik Barista
              brings together expertly crafted drinks and heartfelt flavours — right
              to your doorstep.
            </p>
            <Link
              href="/about"
              className="text-[#1E3D1A] font-semibold hover:underline underline-offset-4"
            >
              Read Our Story →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
