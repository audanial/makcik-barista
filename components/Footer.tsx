import Image from "next/image"
import { MessageCircle, Mail, MapPin } from "lucide-react"
import { waLink } from "@/lib/whatsapp"

export default function Footer() {
  return (
    <footer className="bg-[#1C1008] text-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/logo3.png"
              alt="MakCik Barista"
              width={80}
              height={80}
              className="object-contain"
              unoptimized
            />
            <p className="font-heading italic text-[#FAF7F2] text-lg tracking-[0.08em] mt-2">MakCik Barista</p>
          </div>

          {/* Delivery areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#FAF7F2]/40">
              Delivery Areas
            </h3>
            <p className="text-sm text-[#FAF7F2]/70">Kepong · Sri Damansara · Segambut</p>
            <p className="text-sm text-[#FAF7F2]/70">Mont Kiara · Sentul · Jalan Ipoh</p>
            <a href="/delivery" className="text-xs text-[#B8692E] mt-2 inline-block hover:underline">
              View all areas →
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#FAF7F2]/40">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/70">
              <li>
                <a
                  href={waLink("Hi MakCik Barista! Saya nak tanya. Boleh tolong? 😊")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 shrink-0 text-[#B8692E]" />
                  +60 12-326 0160
                </a>
              </li>
              <li>
                <a
                  href="mailto:makcik.barista@gmail.com"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#B8692E]" />
                  makcik.barista@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 text-[#B8692E]" />
                Kepong, Kuala Lumpur
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-[#FAF7F2]/40">
              Follow Us
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF7F2]/70">
              <li>
                <a
                  href="https://instagram.com/makcik.barista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  {/* Instagram brand icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 text-[#B8692E]" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  @makcik.barista
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@makcik.barista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 shrink-0 text-[#B8692E]"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                  </svg>
                  @makcik.barista
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FAF7F2]/10 mt-10 pt-6 text-center text-xs text-[#FAF7F2]/30">
          © {new Date().getFullYear()} MakCik Barista. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
