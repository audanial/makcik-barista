import type { Metadata } from "next"
import Image from "next/image"
import { Truck, Store, Coffee, Package, GraduationCap } from "lucide-react"
import { waLink } from "@/lib/whatsapp"
import EventBookingForm from "@/components/EventBookingForm"
import AnimateOnScroll from "@/components/AnimateOnScroll"

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
    Icon: Truck,
    title: "Food Truck Setup",
    desc: "Our iconic food truck rolls in fully equipped. We handle the setup — you enjoy the event.",
  },
  {
    Icon: Store,
    title: "Event Stall",
    desc: "A compact stall setup perfect for indoor halls, bazaars, and community events.",
  },
  {
    Icon: Coffee,
    title: "Drink Catering",
    desc: "Fresh brewed coffee and drinks served to your guests, exactly the way they like it.",
  },
  {
    Icon: Package,
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

const schoolEvents = [
  "Hari Sukan / Sports Day",
  "Hari Kecemerlangan",
  "Canteen Day",
  "Staff Appreciation",
  "School Celebrations",
  "PTA Events",
]

const gallery = [
  { src: "/images/school1.jpeg", alt: "MakCik Barista at a school event" },
  { src: "/images/school2.jpeg", alt: "MakCik Barista setup at a school celebration" },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1E3D1A] text-white pt-40 pb-24 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-4">
          Bringing Quality Coffee To Your School Event
        </h1>
        <p className="text-white/60 text-xs tracking-widest uppercase">
          From Hari Sukan to school celebrations — we set up, you enjoy.
        </p>
      </section>

      {/* For Schools */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#B8692E] text-xs tracking-[0.3em] uppercase mb-3 text-center">Our Specialty</p>
          <h2 className="font-heading text-4xl italic text-[#1E3D1A] text-center mb-4">Made For Schools</h2>
          <p className="text-[#1C1008]/70 text-center max-w-lg mx-auto mb-12">
            We understand school events. Quick service, clean setup, crowd-friendly drinks — perfect for students, teachers and parents alike.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {schoolEvents.map((event) => (
              <div key={event} className="bg-white rounded-2xl p-5 border border-[#F0EBE1] text-center">
                <GraduationCap size={24} className="text-[#1E3D1A] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1C1008]">{event}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={waLink("Hi MakCik Barista! Saya nak tanya tentang khidmat untuk event sekolah kami.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1E3D1A] text-white px-8 py-3 rounded-full text-sm hover:bg-[#2D5A27] transition"
            >
              Book For Your School Event
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-[#FAF7F2] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl text-[#1C1008] italic text-center mb-12">
              What We Offer
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((o, i) => (
              <AnimateOnScroll key={o.title} delay={i * 100}>
                <div className="bg-[#FFFEF9] rounded-2xl p-6 shadow-sm border border-[#F0EBE1] text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F0EBE1] mx-auto mb-4">
                    <o.Icon className="w-5 h-5 text-[#1E3D1A]" />
                  </div>
                  <h3 className="font-semibold text-[#1C1008] mb-2">{o.title}</h3>
                  <p className="text-sm text-[#1C1008]/60 leading-relaxed">{o.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable For */}
      <section className="bg-[#F0EBE1] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl text-[#1C1008] italic mb-10">Suitable For</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-[#1E3D1A] text-white rounded-full px-4 py-2 text-sm font-medium">
                School Events
              </span>
              {suitableFor.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#1E3D1A] text-[#1E3D1A] rounded-full px-4 py-2 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-[#FAF7F2] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl text-[#1C1008] italic text-center mb-12">
              Past Events
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <AnimateOnScroll key={img.src} delay={i * 100}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#1C1008]/10">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-[#F0EBE1] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl text-[#1C1008] italic text-center mb-2">
              Book Us For Your Event
            </h2>
            <p className="text-center text-[#1C1008]/60 text-sm mb-10">
              Fill in your details and we&apos;ll open WhatsApp with everything ready.
            </p>
          </AnimateOnScroll>

          <EventBookingForm />

          {/* Fallback */}
          <div className="mt-8 text-center border-t border-[#1C1008]/10 pt-8">
            <p className="text-sm text-[#1C1008]/60 mb-4">Prefer to message directly?</p>
            <a
              href={waLink("Hi MakCik Barista! Saya nak tanya tentang event catering.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3D1A] text-white text-sm font-semibold px-6 py-3 hover:bg-[#2D5A27] transition-colors"
            >
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
