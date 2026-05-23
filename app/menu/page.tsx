import type { Metadata } from "next"
import { waLink } from "@/lib/whatsapp"
import { coffeeItems, nonCoffeeItems, foodItems, addOns } from "@/lib/menuData"
import MenuCard from "@/components/MenuCard"
import AnimateOnScroll from "@/components/AnimateOnScroll"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the MakCik Barista menu — coffee, non-coffee drinks, add-ons, and event food. Order via WhatsApp.",
  openGraph: {
    title: "Menu | MakCik Barista",
    description: "Coffee, shakes, and event food — freshly made with love.",
    type: "website",
  },
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="bg-[#1E3D1A] text-white pt-36 pb-20 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-2">Our Menu</h1>
        <p className="text-white/60 text-xs tracking-widest uppercase">
          Harom &amp; Hirup — freshly made with love
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Coffee */}
        <AnimateOnScroll>
          <section id="coffee">
            <div className="border-l-4 border-[#B8692E] pl-4 mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-[#1C1008] italic">Coffee</h2>
              <p className="text-[#1C1008]/50 text-sm mt-1">Hot RM6.90 · Iced RM7.90</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coffeeItems.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Non-Coffee */}
        <AnimateOnScroll>
          <section id="non-coffee">
            <div className="border-l-4 border-[#B8692E] pl-4 mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-[#1C1008] italic">Non-Coffee</h2>
              <p className="text-[#1C1008]/50 text-sm mt-1">Iced RM7.90</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {nonCoffeeItems.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Food */}
        <AnimateOnScroll>
          <section id="food">
            <div className="border-l-4 border-[#B8692E] pl-4 mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-[#1C1008] italic">Food</h2>
              <p className="text-[#1C1008]/50 text-sm mt-1">Available at events — ask us</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {foodItems.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Add-ons */}
        <AnimateOnScroll>
          <section>
            <div className="border-l-4 border-[#B8692E] pl-4 mb-8">
              <h2 className="font-heading text-3xl md:text-4xl text-[#1C1008] italic">Add-ons</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {addOns.map((addon) => (
                <span
                  key={addon.name}
                  className="bg-[#F0EBE1] rounded-full px-4 py-2 text-sm text-[#1C1008] font-medium"
                >
                  {addon.name}{" "}
                  <span className="text-[#B8692E] font-semibold">
                    +RM{addon.price.toFixed(2)}
                  </span>
                </span>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {/* Bottom CTA */}
        <AnimateOnScroll>
          <section className="bg-[#FFFEF9] rounded-2xl shadow-sm border border-[#F0EBE1] px-8 py-10 text-center">
            <p className="text-[#1C1008] font-medium text-lg">
              Not sure what to order?{" "}
              <a
                href={waLink("Hi MakCik Barista! Boleh tolong suggest menu yang best? 😊")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1E3D1A] font-semibold underline underline-offset-4 hover:text-[#2D5A27] transition-colors"
              >
                Chat with us
              </a>
            </p>
          </section>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
