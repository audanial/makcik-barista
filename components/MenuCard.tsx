'use client'
import { useState } from 'react'
import { Plus, X, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import type { CartAddOn } from '@/lib/cartContext'
import { addOns as addOnsList } from '@/lib/menuData'
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

function AddOnToggle({
  addon,
  active,
  onToggle,
}: {
  addon: CartAddOn
  active: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${
        active
          ? 'bg-[#1E3D1A] border-[#1E3D1A] text-white'
          : 'border-[#1C1008]/20 text-[#1C1008]/50 hover:border-[#1E3D1A]/50'
      }`}
    >
      {addon.name} +RM{addon.price.toFixed(2)}
    </button>
  )
}

export default function MenuCard({ item }: { item: MenuItem }) {
  const { name, description, category, hotPrice, icedPrice, price } = item
  const { items, addItem, removeItem, updateQty, toggleAddOn } = useCart()
  const [pickerOpen, setPickerOpen] = useState(false)

  const hasBothVariants = hotPrice != null && icedPrice != null
  const hasPrice = hotPrice != null || icedPrice != null || price != null

  // All cart entries for this menu item, grouped by variant
  const hotItems = items.filter(i => i.name === name && i.variant === 'hot')
  const icedItems = items.filter(i => i.name === name && i.variant === 'iced')
  const singleItems = items.filter(i => i.name === name && i.variant === 'single')

  const hasHot = hotItems.length > 0
  const hasIced = icedItems.length > 0
  const hasSingle = singleItems.length > 0

  // Coffee: always allow adding another entry (forceNew).
  // Others: allow only when no entry for that variant exists.
  const showAddButton = category === 'coffee'
    ? true
    : hasBothVariants
      ? !hasHot || !hasIced
      : !hasHot && !hasIced && !hasSingle

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

  // Coffee picker always uses forceNew so each pick creates a separate cart entry
  const handleVariantPick = (variant: 'hot' | 'iced') => {
    const p = variant === 'hot' ? hotPrice! : icedPrice!
    addItem({ name, price: p, variant }, true)
    setPickerOpen(false)
  }

  const isCoffeeInCart = category === 'coffee' && (hasHot || hasIced)

  // Add-on entries: hot entries first, then iced, each annotated with their variant
  const addOnEntries = [
    ...hotItems.map(entry => ({ entry, variant: 'hot' as const })),
    ...icedItems.map(entry => ({ entry, variant: 'iced' as const })),
  ]
  const showVariantLabel = hasHot && hasIced

  return (
    <div className="bg-[#FFFEF9] rounded-2xl p-5 border-l-4 border-[#1E3D1A] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2">
      {/* Name, price, description, badges */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold text-[#1C1008] leading-tight">{name}</h3>
          {displayPrice && (
            <p className="text-sm text-[#B8692E] mt-0.5">{displayPrice}</p>
          )}
          {description && (
            <p className="text-xs text-[#1C1008]/50 mt-1.5 leading-relaxed">{description}</p>
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

      {/* Cart controls */}
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
              {hotItems.map(entry => (
                <CartPill
                  key={entry.cartId}
                  label={showVariantLabel ? 'Hot' : undefined}
                  qty={entry.quantity}
                  onRemove={() => removeItem(entry.cartId)}
                  onAdd={() => updateQty(entry.cartId, entry.quantity + 1)}
                />
              ))}
              {icedItems.map(entry => (
                <CartPill
                  key={entry.cartId}
                  label={showVariantLabel ? 'Iced' : undefined}
                  qty={entry.quantity}
                  onRemove={() => removeItem(entry.cartId)}
                  onAdd={() => updateQty(entry.cartId, entry.quantity + 1)}
                />
              ))}
              {singleItems.map(entry => (
                <CartPill
                  key={entry.cartId}
                  qty={entry.quantity}
                  onRemove={() => removeItem(entry.cartId)}
                  onAdd={() => updateQty(entry.cartId, entry.quantity + 1)}
                />
              ))}
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

      {/* Add-on toggles — one section per cart entry, coffee only */}
      {isCoffeeInCart && (
        <div className="pt-3 border-t border-[#F0EBE1] space-y-2">
          <p className="text-[10px] uppercase tracking-widest text-[#1C1008]/40">Add-ons</p>

          {addOnEntries.map(({ entry, variant }, idx) => {
            const isFirstOfVariant =
              addOnEntries.findIndex(x => x.variant === variant) === idx
            const isFirst = idx === 0

            return (
              <div
                key={entry.cartId}
                className={!isFirst ? 'pt-2 border-t border-[#F0EBE1]' : ''}
              >
                {showVariantLabel && isFirstOfVariant && (
                  <p className="text-[10px] text-[#1C1008]/40 mb-1.5 capitalize">{variant}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {addOnsList.map(addon => (
                    <AddOnToggle
                      key={addon.name}
                      addon={addon}
                      active={entry.addOns.some(a => a.name === addon.name)}
                      onToggle={() => toggleAddOn(entry.cartId, addon)}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
