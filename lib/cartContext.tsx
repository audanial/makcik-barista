'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type CartItem = {
  name: string
  price: number
  variant: 'hot' | 'iced' | 'single'
  quantity: number
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
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (name: string, variant: string) => void
  updateQty: (name: string, variant: string, qty: number) => void
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

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>(defaultDeliveryInfo)
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.name === item.name && i.variant === item.variant)
      if (existing) return prev.map(i => i.name === item.name && i.variant === item.variant ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (name: string, variant: string) => {
    setItems(prev => prev.filter(i => !(i.name === name && i.variant === variant)))
  }

  const updateQty = (name: string, variant: string, qty: number) => {
    if (qty <= 0) { removeItem(name, variant); return }
    setItems(prev => prev.map(i => i.name === name && i.variant === variant ? { ...i, quantity: qty } : i))
  }

  const clearCart = () => setItems([])
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
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
