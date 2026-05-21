import { waLink } from "@/lib/whatsapp"
import type { MenuItem } from "@/lib/menuData"

export default function MenuCard({ item }: { item: MenuItem }) {
  const { name, category, hotPrice, icedPrice, price, eventOnly } = item

  const displayPrice =
    category === "food" && price != null
      ? `RM${price.toFixed(2)}`
      : hotPrice != null && icedPrice != null
      ? `Hot RM${hotPrice.toFixed(2)} / Iced RM${icedPrice.toFixed(2)}`
      : icedPrice != null
      ? `Iced RM${icedPrice.toFixed(2)}`
      : hotPrice != null
      ? `RM${hotPrice.toFixed(2)}`
      : null

  return (
    <div className="bg-[#FFFEF9] rounded-2xl p-5 border-l-4 border-[#1E3D1A] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-lg font-semibold text-[#1C1008] leading-tight">{name}</h3>
        <div className="flex gap-1 flex-wrap justify-end shrink-0">
          {hotPrice != null && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1C1008] text-white">Hot</span>
          )}
          {icedPrice != null && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1E3D1A] text-white">Iced</span>
          )}
        </div>
      </div>

      {displayPrice && (
        <p className="text-[#B8692E] font-semibold text-lg">{displayPrice}</p>
      )}

      {eventOnly && (
        <p className="text-xs text-amber-700 bg-amber-50 rounded-full px-3 py-1 w-fit">
          Available at events only
        </p>
      )}

      <a
        href={waLink(
          `Hi MakCik Barista! Saya nak tanya tentang ${name}. Ada available? 😊`
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1E3D1A] text-white text-sm font-medium py-2 px-4 hover:bg-[#2D5A27] transition-colors"
      >
        Order via WhatsApp
      </a>
    </div>
  )
}
