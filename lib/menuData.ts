export type MenuItem = {
  name: string
  description?: string
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
  { name: "Latte", description: "Smooth espresso balanced with creamy milk.", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
  { name: "Mocha", description: "Coffee and chocolate combined into one comforting drink.", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
  { name: "Americano", description: "Bold espresso with a clean and robust finish.", category: "coffee", hotPrice: 6.90, icedPrice: 7.90 },
]

export const nonCoffeeItems: MenuItem[] = [
  { name: "Iced Chocolate", description: "Rich chocolate served cold and refreshing.", category: "non-coffee", icedPrice: 7.90 },
  { name: "Milk Shake", description: "Creamy, sweet, and easy to enjoy anytime.", category: "non-coffee", icedPrice: 7.90 },
  { name: "Strawberry Shake", description: "Sweet strawberry flavour blended into a refreshing treat.", category: "non-coffee", icedPrice: 7.90 },
  { name: "Dirty Matcha", description: "Matcha and espresso brought together in one cup.", category: "non-coffee", icedPrice: 7.90 },
]

export const foodItems: MenuItem[] = [
  { name: "Nasi Lemak", description: "A Malaysian favourite with fragrant rice and classic sides.", category: "food", price: 4.00, eventOnly: true },
  { name: "Ayam Korea", description: "Crispy chicken coated with a sweet and savoury Korean-style sauce.", category: "food", price: 8.00, eventOnly: true },
  { name: "Ramen", description: "Warm noodles served with a comforting broth.", category: "food", price: 9.00, eventOnly: true },
  { name: "Hotdog", description: "Simple, familiar, and easy to enjoy at any event.", category: "food", price: 5.00, eventOnly: true },
  { name: "Croffle", description: "A crispy waffle-style croissant with a light buttery bite.", category: "food", price: 7.00, eventOnly: true },
  { name: "Pasta", description: "A comforting pasta option for casual event meals.", category: "food", price: 8.00, eventOnly: true },
]

export const addOns: AddOn[] = [
  { name: "Whipped Cream", price: 1.80 },
  { name: "Chocolate Syrup", price: 1.50 },
  { name: "Caramel Syrup", price: 1.50 },
  { name: "Vanilla/Hazelnut Syrup", price: 1.50 },
]
