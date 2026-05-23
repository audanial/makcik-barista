'use client'
import { useState } from 'react'
import { Plus, X, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import type { MenuItem } from '@/lib/menuData'

function CartPill({
  qty,
  onRemove,
  onAdd,
  label,
}: {
  qty: number
  onRemove: () => void
  onAdd: () => void
  label?: string
}) {
  return (
    <div className="bg-white border border-[#1E3D1A] rounded-full px-2 py-1 flex items-center gap-1.5">
      <button onClick={onRemove} className="hover:opacity-70 transition" aria-label="Remove">
        <Trash2 size={13} className="text-[#1C1008]/60" />
      </button>
      {label && <span className="text-[10px] text-[#1C1008]/50 font-medium">{label}</span>}
      <span className="text-sm font-medium text-[#1C1008] min-w-[16px] text-center">{qty}</span>
      <button
        onClick={onAdd}
        className="bg-[#1E3D1A] text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-[#2D5A27] transition"
        aria-label="Add one more"
      >
        <Plus size={10} />
      </button>
    </div>
  )
}

export default function MenuCard({ item }: { item: MenuItem }) {
  const { name, category, hotPrice, icedPrice, price } = item
  const { items, addItem, removeItem, updateQty } = useCart()
  const [pickerOpen, setPickerOpen] = useState(false)

  const hasBothVariants = hotPrice != null && icedPrice != null
  const hasPrice = hotPrice != null || icedPrice != null || price != null

  const hotItem = items.find(i => i.name === name && i.variant === 'hot')
  const icedItem = items.find(i => i.name === name && i.variant === 'iced')
  const singleItem = items.find(i => i.name === name && i.variant === 'single')

  // Show + button if there's still a variant not yet in cart
  const showAddButton = hasBothVariants
    ? !hotItem || !icedItem
    : !hotItem && !icedItem && !singleItem

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
    if (hasBothVariants) { setPickerOpen(true); return }
    if (icedPrice != null) addItem({ name, price: icedPrice, variant: 'iced' })
    else if (hotPrice != null) addItem({ name, price: hotPrice, variant: 'hot' })
    else if (price != null) addItem({ name, price, variant: 'single' })
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

      {hasPrice && (
        <div className="mt-auto flex flex-wrap gap-2 justify-end items-center">
          {pickerOpen ? (
            <>
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
            </>
          ) : (
            <>
              {hotItem && (
                <CartPill
                  label={hasBothVariants ? 'Hot' : undefined}
                  qty={hotItem.quantity}
                  onRemove={() => removeItem(name, 'hot')}
                  onAdd={() => updateQty(name, 'hot', hotItem.quantity + 1)}
                />
              )}
              {icedItem && (
                <CartPill
                  label={hasBothVariants ? 'Iced' : undefined}
                  qty={icedItem.quantity}
                  onRemove={() => removeItem(name, 'iced')}
                  onAdd={() => updateQty(name, 'iced', icedItem.quantity + 1)}
                />
              )}
              {singleItem && (
                <CartPill
                  qty={singleItem.quantity}
                  onRemove={() => removeItem(name, 'single')}
                  onAdd={() => updateQty(name, 'single', singleItem.quantity + 1)}
                />
              )}
              {showAddButton && (
                <button
                  onClick={handleAdd}
                  className="bg-[#1E3D1A] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#2D5A27] transition"
                  aria-label={`Add ${name} to cart`}
                >
                  <Plus size={16} />
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
