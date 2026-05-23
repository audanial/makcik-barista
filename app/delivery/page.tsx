import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart, MessageCircle, MapPin } from 'lucide-react'
import { deliveryAreas, deliveryHours, minimumOrder } from '@/lib/deliveryData'
import { waLink } from '@/lib/whatsapp'
import AnimateOnScroll from '@/components/AnimateOnScroll'

export const metadata: Metadata = {
  title: 'Delivery Info | MakCik Barista',
  description: 'MakCik Barista delivery areas, fees and hours. Serving Kepong and surrounding KL areas.',
}

const steps = [
  {
    num: '01',
    title: 'Add to Cart',
    desc: 'Browse our menu and add drinks or food to your cart.',
    Icon: ShoppingCart,
  },
  {
    num: '02',
    title: 'Send via WhatsApp',
    desc: 'Fill in your delivery details and send the order directly to us.',
    Icon: MessageCircle,
  },
  {
    num: '03',
    title: 'We Deliver to You',
    desc: 'We confirm your order and deliver fresh to your door.',
    Icon: MapPin,
  },
]

export default function DeliveryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#1E3D1A] text-white pt-40 pb-24 px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl italic mb-4">We Deliver To You</h1>
        <p className="text-white/60 text-xs tracking-widest uppercase">
          Kepong &amp; surrounding KL areas
        </p>
      </section>

      {/* Delivery areas */}
      <section className="bg-[#FAF7F2] py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl italic text-[#1C1008] text-center mb-10">
              Delivery Areas &amp; Fees
            </h2>
            <div className="rounded-2xl overflow-hidden border border-[#F0EBE1]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E3D1A] text-white">
                    <th className="text-left px-5 py-3 font-medium">Area</th>
                    <th className="text-right px-5 py-3 font-medium">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryAreas.map((row, i) => (
                    <tr
                      key={row.area}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F2]'}
                    >
                      <td className="px-5 py-3 text-[#1C1008]">{row.area}</td>
                      <td className="px-5 py-3 text-[#B8692E] font-semibold text-right">
                        RM{row.fee.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Delivery hours */}
      <section className="bg-[#F0EBE1] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl italic text-[#1C1008] text-center mb-10">
              Delivery Hours
            </h2>
            <div className="space-y-2">
              {deliveryHours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-3 border border-[#F0EBE1]"
                >
                  <span className="text-sm font-medium text-[#1C1008]">{row.day}</span>
                  <span className={`text-sm font-semibold ${row.hours === 'Closed' ? 'text-red-500' : 'text-[#1E3D1A]'}`}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Minimum order */}
      <section className="bg-[#FAF7F2] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-heading text-4xl italic text-[#1C1008] text-center mb-8">
              Minimum Order
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-[#F0EBE1] text-center">
                <p className="text-xs uppercase tracking-widest text-[#1C1008]/40 mb-2">Drinks Only</p>
                <p className="font-heading text-4xl italic text-[#B8692E]">RM{minimumOrder.drinksOnly.toFixed(2)}</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#F0EBE1] text-center">
                <p className="text-xs uppercase tracking-widest text-[#1C1008]/40 mb-2">Food + Drinks</p>
                <p className="font-heading text-4xl italic text-[#B8692E]">RM{minimumOrder.foodAndDrinks.toFixed(2)}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#1E3D1A] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-[#B8692E] text-xs tracking-[0.3em] uppercase mb-3">Simple &amp; Easy</p>
            <h2 className="font-heading text-4xl italic text-white mb-16">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full border border-[#B8692E]/40 flex items-center justify-center mb-4">
                    <step.Icon size={24} color="#B8692E" />
                  </div>
                  <p className="text-[#B8692E] text-xs tracking-widest mb-1">{step.num}</p>
                  <p className="text-white font-medium text-sm mb-2">{step.title}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F2] py-20 px-4 text-center">
        <AnimateOnScroll>
          <h2 className="font-heading text-4xl italic text-[#1C1008] mb-4">Ready to Order?</h2>
          <p className="text-[#1C1008]/60 text-sm mb-8">
            Browse our menu, add to cart, and send your order via WhatsApp.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/menu"
              className="bg-[#1E3D1A] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#2D5A27] transition"
            >
              View Menu
            </Link>
            <a
              href={waLink('Hi MakCik Barista! Saya nak tanya tentang delivery. Boleh tolong? 😊')}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#1E3D1A] text-[#1E3D1A] px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#1E3D1A]/5 transition"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  )
}
