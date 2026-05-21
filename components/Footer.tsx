import { waLink } from "@/lib/whatsapp"

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl italic mb-1">MakCik Barista</h2>
            <p className="text-brand-cream/60 text-sm">Harom & Hirup</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3 text-brand-cream/50">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-brand-cream/80">
              <li>
                <a
                  href={waLink("Hi MakCik Barista! Saya nak tanya. Boleh tolong? 😊")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cream transition-colors"
                >
                  WhatsApp: +60 12-326 0160
                </a>
              </li>
              <li>
                <a
                  href="mailto:makcik.barista@gmail.com"
                  className="hover:text-brand-cream transition-colors"
                >
                  makcik.barista@gmail.com
                </a>
              </li>
              <li className="text-brand-cream/60">Kepong, Kuala Lumpur</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3 text-brand-cream/50">
              Follow Us
            </h3>
            <ul className="space-y-2 text-sm text-brand-cream/80">
              <li>
                <a
                  href="https://instagram.com/makcik.barista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cream transition-colors"
                >
                  Instagram @makcik.barista
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@makcik.barista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-cream transition-colors"
                >
                  TikTok @makcik.barista
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-cream/10 mt-10 pt-6 text-center text-xs text-brand-cream/40">
          © {new Date().getFullYear()} MakCik Barista. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
