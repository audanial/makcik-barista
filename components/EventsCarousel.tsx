"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { src: "/images/school1.jpeg", alt: "MakCik Barista at a school sports day" },
  { src: "/images/school2.jpeg", alt: "MakCik Barista at a school celebration" },
  { src: "/images/event1.jpeg", alt: "MakCik Barista food truck at an outdoor event" },
  { src: "/images/event2.jpeg", alt: "Event stall with drinks on display" },
  { src: "/images/event3.jpeg", alt: "Guests enjoying coffee at a community event" },
  { src: "/images/event4.jfif", alt: "Catering setup at a gathering" },
]

export default function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = slideRefs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setCurrent(idx)
          }
        })
      },
      { root: track, threshold: 0.6 }
    )
    slideRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = useCallback((index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    })
    setCurrent(index)
  }, [])

  return (
    <div className="relative select-none">
      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex overflow-x-scroll snap-x snap-mandatory gap-4 px-[8%] md:px-[17%] py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            ref={(el) => { slideRefs.current[i] = el }}
            className={`snap-center shrink-0 w-[84%] md:w-[62%] relative rounded-2xl overflow-hidden aspect-video transition-[opacity,transform] duration-500 ease-in-out ${
              i === current
                ? "opacity-100 scale-100"
                : "opacity-40 scale-[0.94]"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Desktop arrows */}
      <button
        onClick={() => goTo(Math.max(0, current - 1))}
        disabled={current === 0}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md items-center justify-center text-[#1E3D1A] hover:bg-white transition-colors disabled:opacity-20 z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => goTo(Math.min(slides.length - 1, current + 1))}
        disabled={current === slides.length - 1}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md items-center justify-center text-[#1E3D1A] hover:bg-white transition-colors disabled:opacity-20 z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-1.5 bg-[#B8692E]"
                : "w-1.5 h-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
