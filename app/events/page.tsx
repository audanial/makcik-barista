import type { Metadata } from "next"
import { waLink } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Events",
  description:
    "Book MakCik Barista for your next event in Kepong, KL — weddings, corporate events, kenduri, and more.",
  openGraph: {
    title: "Events | MakCik Barista",
    description: "Book MakCik Barista for your next event.",
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-green text-white py-20 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-2">Events</h1>
        <p className="text-brand-cream/70 text-sm tracking-widest uppercase">
          Bring MakCik Barista to your event
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h2 className="font-heading text-3xl text-brand-brown italic mb-4">Coming Soon</h2>
        <p className="text-brand-brown/70 leading-relaxed mb-10 max-w-md mx-auto">
          Our events page is under construction. In the meantime, reach out to us
          directly on WhatsApp to discuss your event.
        </p>
        <a
          href={waLink(
            "Hi MakCik Barista! Saya berminat nak book untuk event. Boleh tolong? 😊"
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green text-white font-semibold px-8 py-3.5 hover:bg-brand-green/90 transition-colors"
        >
          Book via WhatsApp
        </a>
      </div>
    </div>
  )
}
