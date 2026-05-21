import type { Metadata } from "next"
import { waLink } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "About Us | MakCik Barista",
  description:
    "The story behind MakCik Barista — a family F&B brand from Kepong, KL built on good coffee and warmth.",
  openGraph: {
    title: "About Us | MakCik Barista",
    description: "Family, coffee, and community.",
  },
}

const team = [
  {
    initial: "M",
    name: "Maziah",
    role: "Main Barista & Founder",
    bio: "The heart of MakCik Barista. Every recipe, every flavour — crafted by her hands.",
  },
  {
    initial: "F",
    name: "The Family",
    role: "Event & Operations Support",
    bio: "Behind every event, there's a team that shows up. From setup to serve, we do it together.",
  },
]

const values = [
  {
    name: "Warmth",
    desc: "Every cup is made with the care of someone who genuinely loves what she does.",
  },
  {
    name: "Craft",
    desc: "No shortcuts. Every drink is prepared by hand, every flavour measured with intention.",
  },
  {
    name: "Community",
    desc: "We show up at your kenduri, your sekolah, your bazaar — wherever you need us.",
  },
  {
    name: "Family",
    desc: "This business is ours together. Built by family, run by family, for everyone.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#2D5A27] text-white py-24 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-3">Our Story</h1>
        <p className="text-white/70 text-sm tracking-widest uppercase">Harom &amp; Hirup</p>
      </section>

      {/* Brand Story */}
      <section className="bg-[#F9F4EC] py-20 px-4">
        <div className="max-w-2xl mx-auto space-y-6 text-[#3B1F0E]/80 leading-relaxed text-base">
          <p>
            MakCik Barista started from one simple idea — great coffee, made with love. The name
            says it all:{" "}
            <span className="font-semibold text-[#3B1F0E]">Makcik</span> is her, and{" "}
            <span className="font-semibold text-[#3B1F0E]">Barista</span> is what she does.
          </p>
          <p>
            What began as a coffee brand under Coffee Classic grew into something bigger — a full
            F&amp;B experience. From the food truck to event stalls, from school Hari Sukan to
            corporate halls, we show up wherever you need us.
          </p>
          <p>
            Today, MakCik Barista is a family business in the truest sense. Every cup is made by
            hand, every event is set up with care, and every customer feels the warmth of Harom &amp;
            Hirup.
          </p>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic text-center mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#F9F4EC] rounded-2xl p-8 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#2D5A27] text-white flex items-center justify-center font-heading text-2xl italic font-semibold mb-4">
                  {member.initial}
                </div>
                <h3 className="font-semibold text-[#3B1F0E] text-lg mb-1">{member.name}</h3>
                <p className="text-xs text-[#2D5A27] font-medium uppercase tracking-widest mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#3B1F0E]/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F9F4EC] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl text-[#3B1F0E] italic text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.name} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <h3 className="font-heading text-2xl text-[#2D5A27] italic mb-3">{v.name}</h3>
                <p className="text-sm text-[#3B1F0E]/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2D5A27] text-white py-20 px-4 text-center">
        <h2 className="font-heading text-4xl italic mb-8">Come Say Hi</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={waLink("Hi MakCik Barista! Saya nak tanya. Boleh tolong? 😊")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-[#2D5A27] font-semibold px-8 py-3 hover:bg-[#F9F4EC] transition-colors"
          >
            WhatsApp Us
          </a>
          <a
            href="https://instagram.com/makcik.barista"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/@makcik.barista"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white text-white font-semibold px-8 py-3 hover:bg-white/10 transition-colors"
          >
            TikTok
          </a>
        </div>
      </section>
    </div>
  )
}
