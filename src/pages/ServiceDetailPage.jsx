import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { services } from '../data/services'

export default function ServiceDetailPage() {
  const { id } = useParams()

  const service = useMemo(
    () => services.find((item) => item.id === id),
    [id],
  )

  if (!service) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="text-3xl font-black text-slate-900">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block rounded-xl bg-[#087f8c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06616b]">
          Back to services
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-8">
        <Link to="/services" className="text-sm font-semibold text-[#087f8c] transition hover:text-[#06616b]">← All services</Link>
      </div>
      <div className="grid gap-10 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-[0_16px_45px_rgba(23,33,43,0.07)] lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="overflow-hidden rounded-[1.5rem]">
          <img src={service.image} alt={service.name} className="h-full min-h-[350px] w-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-flex w-fit rounded-full bg-[#e2f3f1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#06616b]">
            {service.category}
          </span>

          <h1 className="text-4xl font-black text-slate-900">{service.name}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
            <span>⭐ {service.rating}</span>
            <span>•</span>
            <span>{service.time}</span>
          </div>

          <p className="mt-5 text-lg leading-8 text-slate-600">{service.description}</p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Starting from</p>
            <p className="mt-1 text-3xl font-black text-slate-900">${service.price}</p>
          </div>

          <div className="mt-6 space-y-3">
            <h2 className="text-lg font-bold text-slate-900">What’s included</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {service.included.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#087f8c]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to={`/booking/${service.id}`}
              className="rounded-xl bg-[#087f8c] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#06616b]"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
