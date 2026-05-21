import type { Metadata } from "next"
import Image from "next/image"
import { waLink } from "@/lib/whatsapp"
import EventBookingForm from "@/components/EventBookingForm"

export const metadata: Metadata = {
  title: "Events & Catering | MakCik Barista",
  description:
    "Book MakCik Barista for your event — weddings, corporate, school events, kenduri and more. Based in Kepong, KL.",
  openGraph: {
    title: "Events & Catering | MakCik Barista",
    description: "Bring the food truck to your event.",
  },
}

const offerings = [
  {
    icon: "🚐",
    title: "Food Truck Setup",
    desc: "Our iconic food truck rolls in fully equipped. We handle the setup — you enjoy the event.",
  },
  {
    icon: "🏪",
    title: "Event Stall",
    desc: "A compact stall setup perfect for indoor halls, bazaars, and community events.",
  },
  {
    icon: "☕",
    title: "Drink Catering",
    desc: "Fresh brewed coffee and drinks served to your guests, exactly the way they like it.",
  },
  {
    icon: "📦",
    title: "Delivery & Bulk Orders",
    desc: "Need drinks delivered to your venue? We handle bulk orders for large gatherings.",
  },
]

const suitableFor = [
  "Wedding",
  "Corporate",
  "Birthday",
  "School & Campus",
  "Community Event",
  "Private Gathering",
  "Pasar Malam",
]

const gallery = [
  { src: "/images/event1.jpeg", alt: "MakCik Barista food truck at an outdoor event" },
  { src: "/images/event2.jpeg", alt: "Event stall setup with drinks on display" },
  { src: "/images/event3.jpeg", alt: "Guests enjoying coffee at a community event" },
  { src: "/images/event4.jpeg", alt: "Catering setup at a corporate gathering" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D5A27] text-white py-24 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-4">
          Bring MakCik Barista To Your Event
        </h1>
        <p className="text-white/70 text-sm tracking-widest uppercase">
          From kenduri to corporate — we set up, you enjoy.
        </p>
      </section>

      {/* What We Offer */}
      <section className="bg-[#F9F4EC] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#F9F4EC] text-center"
              >
                <div className="text-4xl mb-4">{o.icon}</div>
                <h3 className="font-semibold text-[#3B1F0E] mb-2">{o.title}</h3>
                <p className="text-sm text-[#3B1F0E]/60 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="bg-[#F9F4EC] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic mb-10">Suitable For</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {suitableFor.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-[#F9F4EC] text-[#2D5A27] text-sm font-medium border border-[#2D5A27]/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-[#F9F4EC] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic text-center mb-12">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-video rounded-2xl overflow-hidden bg-[#3B1F0E]/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-[#F9F4EC] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic text-center mb-2">
            Book Us For Your Event
          </h2>
          <p className="text-center text-[#3B1F0E]/60 text-sm mb-10">
            Fill in your details and we&apos;ll open WhatsApp with everything ready.
          </p>

          <EventBookingForm />

          {/* Fallback */}
          <div className="mt-8 text-center border-t border-[#3B1F0E]/10 pt-8">
            <p className="text-sm text-[#3B1F0E]/60 mb-4">Prefer to message directly?</p>
            <a
              href={waLink("Hi MakCik Barista! Saya nak tanya tentang event catering.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#2D5A27] text-white text-sm font-semibold px-6 py-3 hover:bg-[#2D5A27]/90 transition-colors"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
