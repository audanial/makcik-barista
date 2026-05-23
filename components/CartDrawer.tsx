'use client'
import { useEffect } from 'react'
import { X, Coffee, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cartContext'
import { waLink } from '@/lib/whatsapp'
import { deliveryAreas, minimumOrder } from '@/lib/deliveryData'

type Props = {
  open: boolean
  onClose: () => void
}

const inputCls = 'w-full rounded-xl border border-[#F0EBE1] bg-white px-3 py-2 text-sm text-[#1C1008] focus:outline-none focus:border-[#1E3D1A] transition'

export default function CartDrawer({ open, onClose }: Props) {
  const {
    items, removeItem, clearCart,
    totalItems, totalPrice,
    deliveryInfo, setDeliveryInfo,
    setIsCartOpen,
  } = useCart()

  useEffect(() => { setIsCartOpen(open) }, [open, setIsCartOpen])

  const hasFood = items.some(i => i.variant === 'single')
  const minimum = hasFood ? minimumOrder.foodAndDrinks : minimumOrder.drinksOnly
  const meetsMinimum = totalPrice >= minimum
  const formComplete = deliveryInfo.name.trim() !== '' &&
    deliveryInfo.phone.trim() !== '' &&
    deliveryInfo.address.trim() !== '' &&
    deliveryInfo.area !== ''
  const canSend = meetsMinimum && formComplete

  const handleField = (field: keyof typeof deliveryInfo, value: string | number) => {
    setDeliveryInfo({ ...deliveryInfo, [field]: value })
  }

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = deliveryAreas.find(a => a.area === e.target.value)
    setDeliveryInfo({
      ...deliveryInfo,
      area: e.target.value,
      deliveryFee: selected?.fee ?? 0,
    })
  }

  const handleSendOrder = () => {
    const message = `Hi MakCik Barista! Saya nak order untuk delivery. 🛵\n\n📋 ORDER:\n${items.map(i => `• ${i.name} (${i.variant}) x${i.quantity} — RM${(i.price * i.quantity).toFixed(2)}`).join('\n')}\n\n🧾 Subtotal: RM${totalPrice.toFixed(2)}\n🚗 Delivery fee: RM${deliveryInfo.deliveryFee.toFixed(2)}\n💰 Total: RM${(totalPrice + deliveryInfo.deliveryFee).toFixed(2)}\n\n📍 DELIVERY INFO:\nNama: ${deliveryInfo.name}\nNo. Tel: ${deliveryInfo.phone}\nKawasan: ${deliveryInfo.area}\nAlamat: ${deliveryInfo.address}\nNotes: ${deliveryInfo.notes || 'Tiada'}\n\nBoleh confirm availability dan masa delivery? 🙏`
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

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          {/* Cart items */}
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 gap-4 text-center">
              <Coffee size={48} className="text-[#1C1008]/20" />
              <p className="text-[#1C1008]/50 text-sm">Your cart is empty</p>
            </div>
          ) : (
            <ul className="space-y-3">
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
                    <span className="text-sm text-[#1C1008]/50">x{item.quantity}</span>
                    <p className="text-sm font-semibold text-[#B8692E]">
                      RM{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Delivery form — shown when cart has items */}
          {items.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1C1008]/40">Delivery Info</p>

              <input
                type="text"
                placeholder="Full Name *"
                value={deliveryInfo.name}
                onChange={e => handleField('name', e.target.value)}
                className={inputCls}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={deliveryInfo.phone}
                onChange={e => handleField('phone', e.target.value)}
                className={inputCls}
              />

              <div>
                <select
                  value={deliveryInfo.area}
                  onChange={handleAreaChange}
                  className={`${inputCls} text-[#1C1008]`}
                >
                  <option value="" disabled>Delivery Area *</option>
                  {deliveryAreas.map(a => (
                    <option key={a.area} value={a.area}>
                      {a.area} — RM{a.fee.toFixed(2)}
                    </option>
                  ))}
                </select>
                {deliveryInfo.area && (
                  <p className="text-xs text-[#1C1008]/50 mt-1 pl-1">
                    Delivery fee: RM{deliveryInfo.deliveryFee.toFixed(2)}
                  </p>
                )}
              </div>

              <textarea
                placeholder="Full Address *"
                value={deliveryInfo.address}
                onChange={e => handleField('address', e.target.value)}
                rows={3}
                className={`${inputCls} resize-none`}
              />
              <textarea
                placeholder="Notes (optional)"
                value={deliveryInfo.notes}
                onChange={e => handleField('notes', e.target.value)}
                rows={2}
                className={`${inputCls} resize-none`}
              />
            </div>
          )}

          {/* Delivery hours */}
          {items.length > 0 && (
            <div className="text-xs text-center text-[#1C1008]/50">
              <p className="font-medium mb-1">Delivery Hours</p>
              <p>Tue – Fri: 10am – 6pm</p>
              <p>Sat: 9am – 7pm</p>
              <p>Sun: 10am – 4pm</p>
              <p className="text-[#B8692E]">Closed on Mondays</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-5 border-t border-[#F0EBE1] space-y-3">
            {/* Minimum order warning */}
            {!meetsMinimum && (
              <p className="text-xs text-amber-700 bg-amber-50 rounded-xl px-3 py-2 text-center">
                Minimum order for {hasFood ? 'food + drinks' : 'drinks'}: RM{minimum.toFixed(2)}
              </p>
            )}

            {/* Subtotal + delivery fee + total */}
            <div className="space-y-1 text-sm">
              <div className="flex items-center justify-between text-[#1C1008]/60">
                <span>Subtotal</span>
                <span>RM {totalPrice.toFixed(2)}</span>
              </div>
              {deliveryInfo.deliveryFee > 0 && (
                <div className="flex items-center justify-between text-[#1C1008]/60">
                  <span>Delivery fee</span>
                  <span>RM {deliveryInfo.deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex items-center justify-between font-semibold text-[#1C1008] text-base pt-1 border-t border-[#F0EBE1]">
                <span>Total</span>
                <span>RM {(totalPrice + deliveryInfo.deliveryFee).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSendOrder}
              disabled={!canSend}
              className="w-full bg-[#1E3D1A] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#2D5A27] transition disabled:opacity-40 disabled:cursor-not-allowed"
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
