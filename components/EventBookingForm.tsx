"use client"

import { useState } from "react"
import { waLink } from "@/lib/whatsapp"

const eventTypes = [
  "Wedding",
  "Corporate",
  "Birthday",
  "School & Campus",
  "Community",
  "Private Gathering",
  "Other",
]

type FormState = {
  name: string
  contact: string
  date: string
  location: string
  pax: string
  eventType: string
  notes: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

export default function EventBookingForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    contact: "",
    date: "",
    location: "",
    pax: "",
    eventType: "",
    notes: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(): FormErrors {
    const errs: FormErrors = {}
    if (!form.name.trim()) errs.name = "Full name is required."
    if (!form.contact.trim()) errs.contact = "Contact number is required."
    if (!form.date) errs.date = "Event date is required."
    if (!form.location.trim()) errs.location = "Location is required."
    if (!form.pax || Number(form.pax) < 1) errs.pax = "Please enter estimated pax."
    if (!form.eventType) errs.eventType = "Please select an event type."
    return errs
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const message = `Hi MakCik Barista! Saya nak buat tempahan event.

Nama: ${form.name}
Kontak: ${form.contact}
Tarikh: ${form.date}
Lokasi: ${form.location}
Anggaran Pax: ${form.pax}
Jenis Event: ${form.eventType}
Notes: ${form.notes || "Tiada"}`

    window.open(waLink(message), "_blank")
    setSubmitted(true)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <p className="text-xl font-semibold text-[#2D5A27] mb-2">Terima kasih!</p>
        <p className="text-[#3B1F0E]/70">We&apos;ll be in touch shortly via WhatsApp.</p>
      </div>
    )
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-[#3B1F0E] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5A27] transition ${
      errors[field] ? "border-red-400" : "border-[#3B1F0E]/20"
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Siti Aminah"
          className={inputClass("name")}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Contact Number */}
      <div>
        <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
          Contact Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="e.g. 012-345 6789"
          className={inputClass("contact")}
        />
        {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
          Event Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={inputClass("date")}
        />
        {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="e.g. Dewan Felda, Kepong"
          className={inputClass("location")}
        />
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      {/* Pax + Event Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
            Estimated Pax <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="pax"
            value={form.pax}
            onChange={handleChange}
            min={1}
            placeholder="e.g. 100"
            className={inputClass("pax")}
          />
          {errors.pax && <p className="text-red-500 text-xs mt-1">{errors.pax}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
            Event Type <span className="text-red-500">*</span>
          </label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className={inputClass("eventType")}
          >
            <option value="">Select type…</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-[#3B1F0E] mb-1">
          Notes{" "}
          <span className="text-[#3B1F0E]/40 font-normal">(optional)</span>
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={3}
          placeholder="Anything else we should know?"
          className="w-full rounded-xl border border-[#3B1F0E]/20 px-4 py-3 text-sm text-[#3B1F0E] bg-white focus:outline-none focus:ring-2 focus:ring-[#2D5A27] resize-none transition"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-[#2D5A27] text-white font-semibold py-3.5 hover:bg-[#2D5A27]/90 transition-colors"
      >
        Send Booking Request via WhatsApp
      </button>
    </form>
  )
}
