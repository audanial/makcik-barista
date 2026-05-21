import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MakCik Barista — the story behind Kepong's favourite mobile coffee truck.",
  openGraph: {
    title: "About | MakCik Barista",
    description: "The story behind MakCik Barista — Harom & Hirup.",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="bg-brand-green text-white py-20 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-2">About Us</h1>
        <p className="text-brand-cream/70 text-sm tracking-widest uppercase">
          Harom &amp; Hirup — our story
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h2 className="font-heading text-3xl text-brand-brown italic mb-4">Our Story</h2>
        <p className="text-brand-brown/70 leading-relaxed mb-4">
          Born from a love of good coffee and home-cooked warmth, MakCik Barista
          is a family-run mobile coffee truck based in Kepong, Kuala Lumpur.
        </p>
        <p className="text-brand-brown/60 leading-relaxed mb-10">
          Full story coming soon — follow us on Instagram and TikTok{" "}
          <a
            href="https://instagram.com/makcik.barista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green font-medium hover:underline underline-offset-4"
          >
            @makcik.barista
          </a>{" "}
          for updates.
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center justify-center rounded-full bg-brand-green text-white font-semibold px-8 py-3.5 hover:bg-brand-green/90 transition-colors"
        >
          Explore Our Menu
        </Link>
      </div>
    </div>
  )
}
