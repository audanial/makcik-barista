import { addOns } from '@/lib/menuData'

export default function AddOnsSection() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {addOns.map((addon) => (
        <div
          key={addon.name}
          className="bg-[#F0EBE1] rounded-full px-4 py-2 flex items-center gap-2"
        >
          <span className="text-sm text-[#1C1008] font-medium">{addon.name}</span>
          <span className="text-[#B8692E] font-semibold text-sm">+RM{addon.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  )
}
