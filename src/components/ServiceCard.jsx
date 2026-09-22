import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_12px_35px_rgba(23,33,43,0.06)]"
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.name}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {service.category}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
          <span className="rounded-lg bg-[#e2f3f1] px-2.5 py-1 text-xs font-semibold text-[#06616b]">
            ★ {service.rating}
          </span>
        </div>

        <p className="text-sm leading-6 text-slate-600">{service.description}</p>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Starts at</span>
          <span className="text-lg font-bold text-[#087f8c]">${service.price}</span>
        </div>

        <div className="flex gap-3 pt-2">
          <Link
            to={`/service/${service.id}`}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-[#b8dedb] hover:bg-[#f1fbfa]"
          >
            View Details
          </Link>
          <Link
            to={`/booking/${service.id}`}
            className="flex-1 rounded-xl bg-[#087f8c] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#06616b]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
