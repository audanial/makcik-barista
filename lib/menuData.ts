export type MenuItem = {
  name: string
  category: "coffee" | "non-coffee" | "food"
  hotPrice?: number
  icedPrice?: number
  price?: number
  eventOnly?: boolean
}

export type AddOn = {
  name: string
  price: number
}

export const coffeeItems: MenuItem[] = [
  { name: "Latte", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
  { name: "Mocha", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
  { name: "Americano", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
]

export const nonCoffeeItems: MenuItem[] = [
  { name: "Iced Chocolate", category: "non-coffee", icedPrice: 7.90 },
  { name: "Milk Shake", category: "non-coffee", icedPrice: 7.90 },
  { name: "Strawberry Shake", category: "non-coffee", icedPrice: 7.90 },
  { name: "Dirty Matcha", category: "non-coffee", icedPrice: 7.90 },
]

export const foodItems: MenuItem[] = [
  { name: "Nasi Lemak", category: "food", price: 4.00, eventOnly: true },
  { name: "Ayam Korea", category: "food", price: 8.00, eventOnly: true },
  { name: "Ramen", category: "food", price: 9.00, eventOnly: true },
  { name: "Hotdog", category: "food", price: 5.00, eventOnly: true },
  { name: "Croffle", category: "food", price: 7.00, eventOnly: true },
  { name: "Pasta", category: "food", price: 8.00, eventOnly: true },
]

export const addOns: AddOn[] = [
  { name: "Whipped Cream", price: 1.80 },
  { name: "Chocolate Syrup", price: 1.50 },
  { name: "Caramel Syrup", price: 1.50 },
  { name: "Vanilla/Hazelnut Syrup", price: 1.50 },
]
