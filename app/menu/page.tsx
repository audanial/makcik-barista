import type { Metadata } from "next"
import { waLink } from "@/lib/whatsapp"
import { coffeeItems, nonCoffeeItems, foodItems, addOns } from "@/lib/menuData"
import MenuCard from "@/components/MenuCard"

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
    <div className="bg-brand-cream min-h-screen">
      {/* Page header */}
      <div className="bg-brand-green text-white py-20 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-2">Our Menu</h1>
        <p className="text-brand-cream/70 text-sm tracking-widest uppercase">
          Harom &amp; Hirup — freshly made with love
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        {/* Coffee */}
        <section id="coffee">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-brown italic mb-1">Coffee</h2>
          <p className="text-brand-brown/50 text-sm mb-8">Hot RM6.90 · Iced RM7.90</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coffeeItems.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Non-Coffee */}
        <section id="non-coffee">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-brown italic mb-1">Non-Coffee</h2>
          <p className="text-brand-brown/50 text-sm mb-8">Iced RM7.90</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nonCoffeeItems.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Food */}
        <section id="food">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-brown italic mb-1">Food</h2>
          <p className="text-brand-brown/50 text-sm mb-8">Available at events — ask us</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodItems.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-brown italic mb-8">Add-ons</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-brand-cream"
              >
                <p className="font-medium text-brand-brown text-sm">{addon.name}</p>
                <p className="text-brand-brown-light font-semibold mt-1.5">
                  +RM{addon.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-white rounded-2xl shadow-sm border border-brand-cream px-8 py-10 text-center">
          <p className="text-brand-brown font-medium mb-5 text-lg">
            Not sure what to order? Ask us on WhatsApp!
          </p>
          <a
            href={waLink("Hi MakCik Barista! Boleh tolong suggest menu yang best? 😊")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-green text-white font-semibold px-8 py-3.5 hover:bg-brand-green/90 transition-colors"
          >
            Chat With Us
          </a>
        </section>
      </div>
    </div>
  )
}
