import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { popularServices } from '../data/services'
import ServiceCard from '../components/ServiceCard'

const reviews = [
  {
    name: 'Aisha M.',
    quote: 'The team arrived quickly and fixed our plumbing issue without any hassle.',
  },
  {
    name: 'James T.',
    quote: 'HomeEase made booking a cleaning service so simple and stress-free.',
  },
  {
    name: 'Priya K.',
    quote: 'Professional, on time, and very transparent with pricing and scheduling.',
  },
]

const stats = [
  { value: '5k+', label: 'Happy homes' },
  { value: '4.9/5', label: 'Customer rating' },
  { value: '24/7', label: 'Support' },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleSearch = () => {
    const trimmedQuery = query.trim()
    if (trimmedQuery) {
      navigate(`/services?search=${encodeURIComponent(trimmedQuery)}`)
      return
    }
    navigate('/services')
  }

  return (
    <div>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f7f6]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#087f8c] shadow-lg shadow-[#b8dedb]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-9 w-9 text-white"
                aria-label="HomeEase logo"
                role="img"
              >
                <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 9.5V19h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 19v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-3xl font-black tracking-tight text-slate-900">HomeEase</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#087f8c]">
                trusted home care
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#e2f3f1] via-white to-[#f1fbfa]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex rounded-full border border-[#b8dedb] bg-white/80 px-4 py-2 text-sm font-medium text-[#06616b] shadow-sm">
              Trusted home care experts
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Hassle-free home services at your fingertips.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Book qualified professionals for repairs, cleaning, maintenance, and upgrades with just a few clicks.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="rounded-full bg-[#087f8c] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#b8dedb] transition hover:bg-[#06616b]"
              >
                Explore Services
              </Link>
              <Link
                to="/my-bookings"
                className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                View Bookings
              </Link>
            </div>

            <div className="grid gap-5 pt-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-black text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-[#d9eeec] ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                alt="Home service worker"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
              <p className="text-sm text-slate-500">Next available</p>
              <p className="mt-1 text-lg font-bold text-slate-900">Today, 3:30 PM</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#087f8c]">Search</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Find the right service</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-[#087f8c] hover:text-[#06616b]">
            Browse all services →
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_0.7fr_0.5fr]">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a service"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#87c9c5] focus:bg-white"
            />
            <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-[#87c9c5] focus:bg-white">
              <option>Any category</option>
              <option>Repair</option>
              <option>Cleaning</option>
              <option>Maintenance</option>
            </select>
            <button
              onClick={handleSearch}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#087f8c]">Popular</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Most booked services</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#87c9c5]">Why choose us</p>
            <h2 className="mt-2 text-3xl font-black">Your home, cared for with confidence</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Verified experts', 'Skilled professionals with proven home service experience.'],
              ['Transparent pricing', 'Clear, upfront rates with no hidden costs.'],
              ['Easy scheduling', 'Flexible booking slots designed around your routine.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087f8c]/20 text-xl text-[#87c9c5]">
                  ✓
                </div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#087f8c]">Reviews</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">What our customers say</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-[#087f8c]">★★★★★</div>
              <p className="text-base leading-7 text-slate-600">“{review.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#06616b] to-[#087f8c] px-6 py-12 text-center text-white shadow-xl shadow-[#b8dedb]">
          <h2 className="text-3xl font-black sm:text-4xl">Ready to refresh your home?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#d9eeec]">
            Book trusted professionals for repairs, cleaning, and maintenance with simple scheduling and upfront pricing.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06616b] transition hover:bg-[#f1fbfa]"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </div>
  )
}
