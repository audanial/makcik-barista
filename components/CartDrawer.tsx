'use client'
import { X, Coffee, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import { waLink } from '@/lib/whatsapp'

type Props = {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart()

  const handleSendOrder = () => {
    const message = `Hi MakCik Barista! Saya nak order:\n\n${items.map(i => `• ${i.name} (${i.variant}) x${i.quantity} — RM${(i.price * i.quantity).toFixed(2)}`).join('\n')}\n\nJumlah: RM${totalPrice.toFixed(2)}\n\nBoleh confirm availability?`
    window.open(waLink(message), '_blank')
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[89] bg-black/30"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 z-[90] bg-[#FAF7F2] shadow-2xl transform transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Cart drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0EBE1]">
          <h2 className="font-heading text-2xl italic text-[#1C1008]">
            Your Order
            {totalItems > 0 && (
              <span className="ml-2 text-sm font-sans font-normal text-[#1C1008]/50">
                ({totalItems} item{totalItems !== 1 ? 's' : ''})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F0EBE1] transition"
            aria-label="Close cart"
          >
            <X size={20} className="text-[#1C1008]" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <Coffee size={48} className="text-[#1C1008]/20" />
              <p className="text-[#1C1008]/50 text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.name}-${item.variant}`}
                  className="bg-white rounded-xl p-4 border border-[#F0EBE1] flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-[#1C1008] text-sm">{item.name}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#1E3D1A] text-white capitalize">
                        {item.variant}
                      </span>
                    </div>
                    <button
                      onClick={() => removeItem(item.name, item.variant)}
                      className="p-1 rounded-full hover:bg-red-50 transition"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={15} className="text-red-400" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.name, item.variant, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-[#F0EBE1] flex items-center justify-center hover:bg-[#F0EBE1] transition"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-5 text-center text-sm font-medium text-[#1C1008]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.name, item.variant, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-[#1E3D1A] text-white flex items-center justify-center hover:bg-[#2D5A27] transition"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-[#B8692E]">
                      RM{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-[#F0EBE1] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#1C1008]/60">Total</span>
              <span className="font-semibold text-[#1C1008] text-lg">
                RM {totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleSendOrder}
              className="w-full bg-[#1E3D1A] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#2D5A27] transition"
            >
              Send Order via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-[#1C1008]/40 hover:text-red-400 transition py-1"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
