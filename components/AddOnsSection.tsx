'use client'
import { Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import { addOns } from '@/lib/menuData'

export default function AddOnsSection() {
  const { items, addItem, removeItem, updateQty } = useCart()

  return (
    <div className="flex flex-wrap gap-3">
      {addOns.map((addon) => {
        const cartItem = items.find(i => i.name === addon.name && i.variant === 'single')

        return (
          <div
            key={addon.name}
            className="bg-[#F0EBE1] rounded-full px-4 py-2 flex items-center gap-2"
          >
            <span className="text-sm text-[#1C1008] font-medium">{addon.name}</span>
            <span className="text-[#B8692E] font-semibold text-sm">+RM{addon.price.toFixed(2)}</span>

            {cartItem ? (
              <div className="bg-white border border-[#1E3D1A] rounded-full px-2 py-0.5 flex items-center gap-1.5 ml-1">
                <button
                  onClick={() => removeItem(addon.name, 'single')}
                  className="hover:opacity-70 transition"
                  aria-label={`Remove ${addon.name}`}
                >
                  <Trash2 size={12} className="text-[#1C1008]/60" />
                </button>
                <span className="text-sm font-medium text-[#1C1008] min-w-[16px] text-center">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() => updateQty(addon.name, 'single', cartItem.quantity + 1)}
                  className="bg-[#1E3D1A] text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-[#2D5A27] transition"
                  aria-label={`Add more ${addon.name}`}
                >
                  <Plus size={10} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => addItem({ name: addon.name, price: addon.price, variant: 'single' })}
                className="bg-[#1E3D1A] text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-[#2D5A27] transition ml-1"
                aria-label={`Add ${addon.name}`}
              >
                <Plus size={12} />
              </button>
            )}
          </div>
        )
      })}
    </div>
  )
}
