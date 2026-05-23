'use client'
import { MessageCircle } from "lucide-react"
import { waLink } from "@/lib/whatsapp"
import { useCart } from "@/lib/cartContext"

export default function WhatsAppButton() {
  const { isCartOpen } = useCart()

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isCartOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-14 h-14 group">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        <a
          href={waLink("Hi MakCik Barista! Saya nak tanya. Boleh tolong? 😊")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] transition-colors"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>

        {/* Tooltip */}
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[#1C1008] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </div>
    </div>
  )
}
