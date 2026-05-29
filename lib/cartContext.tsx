'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type CartAddOn = {
  name: string
  price: number
}

export type CartItem = {
  cartId: string
  name: string
  price: number
  variant: 'hot' | 'iced' | 'single'
  quantity: number
  addOns: CartAddOn[]
}

export type DeliveryInfo = {
  name: string
  phone: string
  address: string
  area: string
  deliveryFee: number
  notes: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'cartId' | 'quantity' | 'addOns'>, forceNew?: boolean) => void
  removeItem: (cartId: string) => void
  updateQty: (cartId: string, qty: number) => void
  toggleAddOn: (cartId: string, addOn: CartAddOn) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  deliveryInfo: DeliveryInfo
  setDeliveryInfo: (info: DeliveryInfo) => void
  orderType: 'delivery' | 'pickup'
  setOrderType: (type: 'delivery' | 'pickup') => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const defaultDeliveryInfo: DeliveryInfo = {
  name: '',
  phone: '',
  address: '',
  area: '',
  deliveryFee: 0,
  notes: '',
}

let _nextCartId = 0
const genCartId = () => `ci-${++_nextCartId}`

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>(defaultDeliveryInfo)
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (item: Omit<CartItem, 'cartId' | 'quantity' | 'addOns'>, forceNew = false) => {
    setItems(prev => {
      if (!forceNew) {
        // Deduplicate: find an existing plain entry (no add-ons) for same name+variant
        const existing = prev.find(
          i => i.name === item.name && i.variant === item.variant && i.addOns.length === 0
        )
        if (existing) {
          return prev.map(i => i.cartId === existing.cartId ? { ...i, quantity: i.quantity + 1 } : i)
        }
      }
      return [...prev, { ...item, cartId: genCartId(), quantity: 1, addOns: [] }]
    })
  }

  const removeItem = (cartId: string) => {
    setItems(prev => prev.filter(i => i.cartId !== cartId))
  }

  const updateQty = (cartId: string, qty: number) => {
    if (qty <= 0) { removeItem(cartId); return }
    setItems(prev => prev.map(i => i.cartId === cartId ? { ...i, quantity: qty } : i))
  }

  const toggleAddOn = (cartId: string, addOn: CartAddOn) => {
    setItems(prev => prev.map(i => {
      if (i.cartId !== cartId) return i
      const exists = i.addOns.some(a => a.name === addOn.name)
      return {
        ...i,
        addOns: exists ? i.addOns.filter(a => a.name !== addOn.name) : [...i.addOns, addOn],
      }
    }))
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => {
    const addOnsTotal = i.addOns.reduce((s, a) => s + a.price, 0)
    return sum + (i.price + addOnsTotal) * i.quantity
  }, 0)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, toggleAddOn, clearCart,
      totalItems, totalPrice,
      deliveryInfo, setDeliveryInfo,
      orderType, setOrderType,
      isCartOpen, setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
