import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'
import { getStoredBookings } from '../data/bookings'

const initialForm = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  address: '',
  instructions: '',
}

export default function BookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = services.find((item) => item.id === id) || services[0]

  const [formData, setFormData] = useState({
    ...initialForm,
    service: service.name,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const booking = {
      id: Date.now(),
      customerName: formData.name,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      address: formData.address,
      instructions: formData.instructions,
      status: 'Pending',
    }

    const existingBookings = getStoredBookings()
    const updatedBookings = [booking, ...existingBookings]
    window.localStorage.setItem('homeease-bookings', JSON.stringify(updatedBookings))
    setSubmitted(true)

    setTimeout(() => {
      navigate('/my-bookings')
    }, 1800)
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="page-heading mb-10">
        <p className="eyebrow">Booking</p>
        <h1 className="font-black text-slate-900">Book your service</h1>
        <p className="text-base text-slate-600">Tell us where to go and what you need. We&apos;ll take it from there.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-xl">
          <p className="text-sm uppercase tracking-[0.12em] text-[#87c9c5]">Selected service</p>
          <h2 className="mt-3 text-3xl font-black">{service.name}</h2>
          <p className="mt-4 text-slate-300">{service.description}</p>

          <div className="mt-6 rounded-2xl bg-white/5 p-4">
            <p className="text-sm text-slate-300">Starting from</p>
            <p className="mt-1 text-3xl font-black text-white">${service.price}</p>
          </div>

          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <p>• Estimated time: {service.time}</p>
            <p>• Rating: {service.rating}/5</p>
            <p>• Includes: {service.included.join(', ')}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
              Service
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              >
                {services.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700">
              Time
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
              Address
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
              Additional instructions
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows="3"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-[#87c9c5] focus:bg-white"
              />
            </label>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="rounded-full bg-[#087f8c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06616b]"
            >
              Confirm Booking
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-emerald-600"
              >
                Booking confirmed!
              </motion.p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
