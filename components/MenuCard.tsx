'use client'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import type { MenuItem } from '@/lib/menuData'

export default function MenuCard({ item }: { item: MenuItem }) {
  const { name, category, hotPrice, icedPrice, price, eventOnly } = item
  const { addItem } = useCart()
  const [pickerOpen, setPickerOpen] = useState(false)

  const hasBothVariants = hotPrice != null && icedPrice != null
  const hasPrice = hotPrice != null || icedPrice != null || price != null

  const displayPrice =
    category === 'food' && price != null
      ? `RM${price.toFixed(2)}`
      : hotPrice != null && icedPrice != null
      ? `Hot RM${hotPrice.toFixed(2)} / Iced RM${icedPrice.toFixed(2)}`
      : icedPrice != null
      ? `Iced RM${icedPrice.toFixed(2)}`
      : hotPrice != null
      ? `RM${hotPrice.toFixed(2)}`
      : null

  const handleAdd = () => {
    if (hasBothVariants) {
      setPickerOpen(true)
      return
    }
    if (icedPrice != null) {
      addItem({ name, price: icedPrice, variant: 'iced' })
    } else if (hotPrice != null) {
      addItem({ name, price: hotPrice, variant: 'hot' })
    } else if (price != null) {
      addItem({ name, price, variant: 'single' })
    }
  }

  const handleVariantPick = (variant: 'hot' | 'iced') => {
    const p = variant === 'hot' ? hotPrice! : icedPrice!
    addItem({ name, price: p, variant })
    setPickerOpen(false)
  }

  return (
    <div className="bg-[#FFFEF9] rounded-2xl p-5 border-l-4 border-[#1E3D1A] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-[#1C1008] leading-tight">{name}</h3>
          {displayPrice && (
            <p className="text-sm text-[#B8692E] mt-0.5">{displayPrice}</p>
          )}
        </div>
        <div className="flex gap-1 flex-wrap justify-end shrink-0">
          {hotPrice != null && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1C1008] text-white">Hot</span>
          )}
          {icedPrice != null && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#1E3D1A] text-white">Iced</span>
          )}
        </div>
      </div>

      {eventOnly && (
        <p className="text-xs text-amber-700 bg-amber-50 rounded-full px-3 py-1 w-fit">
          Available at events only
        </p>
      )}

      {hasPrice && (
        <div className="mt-auto flex justify-end">
          {pickerOpen ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleVariantPick('hot')}
                className="text-xs px-3 py-1.5 rounded-full bg-[#1C1008] text-white hover:opacity-80 transition font-medium"
              >
                Hot
              </button>
              <button
                onClick={() => handleVariantPick('iced')}
                className="text-xs px-3 py-1.5 rounded-full bg-[#1E3D1A] text-white hover:opacity-80 transition font-medium"
              >
                Iced
              </button>
              <button
                onClick={() => setPickerOpen(false)}
                className="p-1 rounded-full hover:bg-[#F0EBE1] transition"
                aria-label="Cancel"
              >
                <X size={14} className="text-[#1C1008]/50" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-[#1E3D1A] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#2D5A27] transition"
              aria-label={`Add ${name} to cart`}
            >
              <Plus size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
