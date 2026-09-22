import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoredBookings } from '../data/bookings'

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    setBookings(getStoredBookings())
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="page-heading mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">My bookings</p>
          <h1 className="font-black text-slate-900">Your upcoming appointments</h1>
          <p className="text-base text-slate-600">A clear view of your upcoming home care appointments.</p>
        </div>
        <Link
          to="/"
          className="inline-flex w-fit items-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#87c9c5] hover:text-[#087f8c]"
        >
          Back to Home
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-600">
          No bookings yet.
        </div>
      ) : (
        <div className="space-y-5">
          {bookings.map((booking) => (
            <div key={booking.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Service</p>
                  <h2 className="text-2xl font-bold text-slate-900">{booking.service}</h2>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    booking.status === 'Confirmed'
                      ? 'bg-emerald-50 text-emerald-700'
                      : booking.status === 'Pending'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {booking.status}
                </span>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Date</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{booking.date}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Time</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{booking.time}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Phone</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{booking.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Customer</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{booking.customerName}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Booking details</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{booking.address}</p>
                {booking.instructions && (
                  <p className="mt-2 text-sm leading-6 text-slate-700">Note: {booking.instructions}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
