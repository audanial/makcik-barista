'use client'
import { useState } from 'react'
import { X, Plus, Minus } from 'lucide-react'
import type { CartAddOn } from '@/lib/cartContext'
import { addOns as addOnsList } from '@/lib/menuData'

type Props = {
  name: string
  hotPrice?: number
  icedPrice?: number
  onClose: () => void
  onAdd: (variant: 'hot' | 'iced', qty: number, addOns: CartAddOn[]) => void
}

export default function CoffeePicker({ name, hotPrice, icedPrice, onClose, onAdd }: Props) {
  const hasBoth = hotPrice != null && icedPrice != null
  const [variant, setVariant] = useState<'hot' | 'iced'>(icedPrice != null ? 'iced' : 'hot')
  const [qty, setQty] = useState(1)
  const [selectedAddOns, setSelectedAddOns] = useState<CartAddOn[]>([])

  const basePrice = variant === 'hot' ? (hotPrice ?? 0) : (icedPrice ?? 0)
  const addOnsTotal = selectedAddOns.reduce((s, a) => s + a.price, 0)
  const total = (basePrice + addOnsTotal) * qty

  const toggleAddOn = (addon: CartAddOn) => {
    setSelectedAddOns(prev =>
      prev.some(a => a.name === addon.name)
        ? prev.filter(a => a.name !== addon.name)
        : [...prev, addon]
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[95] bg-black/15 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Add ${name} to cart`}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[96] w-[calc(100vw-2rem)] max-w-sm bg-[#FAF7F2] border border-[#1C1008]/8 rounded-3xl shadow-[0_8px_40px_rgba(28,16,8,0.10),0_2px_8px_rgba(28,16,8,0.06)] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[#F0EBE1]">
          <h3 className="font-heading text-2xl italic text-[#1C1008]">{name}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F0EBE1] transition"
            aria-label="Close"
          >
            <X size={18} className="text-[#1C1008]/60" />
          </button>
        </div>

        <div className="px-5 py-5 space-y-5">
          {/* Variant */}
          {hasBoth && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#1C1008]/40 mb-2.5">Serve</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setVariant('hot')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition border ${
                    variant === 'hot'
                      ? 'bg-[#1C1008] border-[#1C1008] text-white'
                      : 'border-[#1C1008]/20 text-[#1C1008]/60 hover:border-[#1C1008]/40'
                  }`}
                >
                  Hot · RM{hotPrice!.toFixed(2)}
                </button>
                <button
                  onClick={() => setVariant('iced')}
                  className={`flex-1 py-2.5 rounded-full text-sm font-medium transition border ${
                    variant === 'iced'
                      ? 'bg-[#1E3D1A] border-[#1E3D1A] text-white'
                      : 'border-[#1C1008]/20 text-[#1C1008]/60 hover:border-[#1E3D1A]/40'
                  }`}
                >
                  Iced · RM{icedPrice!.toFixed(2)}
                </button>
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#1C1008]/40 mb-2.5">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                disabled={qty === 1}
                className="w-9 h-9 rounded-full border border-[#1C1008]/20 flex items-center justify-center hover:border-[#1C1008]/50 disabled:opacity-30 transition"
                aria-label="Decrease quantity"
              >
                <Minus size={14} className="text-[#1C1008]/60" />
              </button>
              <span className="text-lg font-semibold text-[#1C1008] w-6 text-center tabular-nums">
                {qty}
              </span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-9 h-9 rounded-full bg-[#1E3D1A] flex items-center justify-center hover:bg-[#2D5A27] transition"
                aria-label="Increase quantity"
              >
                <Plus size={14} className="text-white" />
              </button>
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#1C1008]/40 mb-2.5">
              Add-ons{' '}
              <span className="normal-case not-italic font-normal text-[#1C1008]/30">optional</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {addOnsList.map(addon => {
                const active = selectedAddOns.some(a => a.name === addon.name)
                return (
                  <button
                    key={addon.name}
                    onClick={() => toggleAddOn(addon)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      active
                        ? 'bg-[#1E3D1A] border-[#1E3D1A] text-white'
                        : 'border-[#1C1008]/20 text-[#1C1008]/60 hover:border-[#1E3D1A]/40'
                    }`}
                  >
                    {addon.name}
                    <span className={`ml-1 ${active ? 'text-white/70' : 'text-[#B8692E]'}`}>
                      +RM{addon.price.toFixed(2)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="px-5 pb-5">
          <button
            onClick={() => onAdd(variant, qty, selectedAddOns)}
            className="w-full bg-[#1E3D1A] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#2D5A27] transition flex items-center justify-between px-5"
          >
            <span>Add to Cart</span>
            <span className="font-bold">RM{total.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </>
  )
}
