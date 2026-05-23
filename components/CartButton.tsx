'use client'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/lib/cartContext'

type Props = {
  onOpen: () => void
}

export default function CartButton({ onOpen }: Props) {
  const { totalItems } = useCart()

  return (
    <button
      onClick={onOpen}
      className="relative p-2 rounded-full hover:bg-white/10 transition"
      aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ''}`}
    >
      <ShoppingCart size={22} className="text-white" />
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#1E3D1A] border-2 border-white text-white text-[10px] font-bold flex items-center justify-center leading-none">
          {totalItems > 9 ? '9+' : totalItems}
        </span>
      )}
    </button>
  )
}
