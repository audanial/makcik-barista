import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { CartProvider } from "@/lib/cartContext"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | MakCik Barista",
    default: "MakCik Barista — Harom & Hirup",
  },
  description:
    "MakCik Barista — your favourite mobile coffee & food truck in Kepong, KL. Harom & Hirup.",
  openGraph: {
    siteName: "MakCik Barista",
    locale: "en_MY",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-brand-cream text-brand-brown">
        <CartProvider>
          <Navbar />
          <main className="flex-1 pt-0">{children}</main>
          <Footer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
