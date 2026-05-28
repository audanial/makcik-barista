import type { Metadata } from "next"
import { Truck, Store, Coffee, Package, GraduationCap } from "lucide-react"
import EventBookingForm from "@/components/EventBookingForm"
import EventsCarousel from "@/components/EventsCarousel"
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

const schoolEvents = [
  "Hari Sukan / Sports Day",
  "Hari Kecemerlangan",
  "Canteen Day",
  "Staff Appreciation",
  "School Celebrations",
  "PTA Events",
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1E3D1A] text-white pt-40 pb-24 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-4">
          Handcrafted Food &amp; Drinks For Every Event
        </h1>
        <p className="text-white/60 text-sm max-w-md mx-auto">
          From Hari Sukan to private events, we bring the setup while you enjoy the moment.
        </p>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="bg-[#F0EBE1] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl text-[#1C1008] italic text-center mb-4">
              Book Us For Your Event
            </h2>
            <p className="text-center text-[#1C1008]/40 text-xs tracking-wide mb-10">
              Response usually within 24 hours.
            </p>
          </AnimateOnScroll>
          <EventBookingForm />
        </div>
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
          <p className="text-center text-[#1C1008]/50 text-sm mt-10 max-w-md mx-auto leading-relaxed">
            From school programmes to private celebrations, we bring handcrafted coffee to your event.
          </p>
        </div>
      </section>

      {/* Event pricing disclaimer */}
      <section className="bg-[#FAF7F2] px-4 pb-10">
        <div className="bg-[#B8692E]/10 border border-[#B8692E]/20 rounded-2xl px-6 py-5 max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-[#B8692E] mb-1">Event Pricing Notice</p>
          <p className="text-sm text-[#1C1008]/70">
            Event pricing is customised based on your event size, location and duration.
            Fill in our booking form and we&apos;ll get back to you with a tailored quote.
          </p>
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

      {/* Past Events */}
      <section className="bg-[#1C1008] py-20">
        <div className="text-center px-4 mb-10">
          <p className="text-[#B8692E] text-xs tracking-[0.3em] uppercase mb-3">Real Moments</p>
          <h2 className="font-heading text-4xl text-white italic">Past Events</h2>
        </div>
        <EventsCarousel />
      </section>

    </div>
  )
}
