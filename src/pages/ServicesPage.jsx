import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { categories, services } from '../data/services'
import ServiceCard from '../components/ServiceCard'

export default function ServicesPage() {
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState('all')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const query = params.get('search') || ''
    setSearchTerm(query)
  }, [location.search])

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory

      const matchesPrice =
        priceFilter === 'all' ||
        (priceFilter === 'low' && service.price <= 50) ||
        (priceFilter === 'mid' && service.price > 50 && service.price <= 75) ||
        (priceFilter === 'high' && service.price > 75)

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, priceFilter])

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="page-heading mb-8">
        <p className="eyebrow">Our services</p>
        <h1 className="font-black text-slate-900">Home services for every need</h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">Reliable help for the jobs that keep your home running beautifully.</p>
      </div>

      <div className="mb-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.3fr_1fr_1fr]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search services"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#87c9c5] focus:bg-white"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#87c9c5] focus:bg-white"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#87c9c5] focus:bg-white"
        >
          <option value="all">All prices</option>
          <option value="low">Under $50</option>
          <option value="mid">$50 - $75</option>
          <option value="high">Above $75</option>
        </select>
      </div>

      {filteredServices.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center">
          <p className="text-lg font-semibold text-slate-700">No services match your filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}
