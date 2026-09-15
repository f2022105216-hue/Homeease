import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'My Bookings', to: '/my-bookings' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087f8c] shadow-md shadow-[#b8dedb]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5 text-white"
                aria-label="HomeEase logo"
                role="img"
              >
                <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 9.5V19h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 19v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-black tracking-tight text-slate-900">HomeEase</p>
              <p className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">Home, handled.</p>
            </div>
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-[#087f8c]' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="order-3 flex basis-full items-center justify-between border-t border-slate-100 pt-3 md:order-none md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={`mobile-${item.to}`}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs font-semibold ${isActive ? 'text-[#087f8c]' : 'text-slate-500'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/services"
            className="order-2 rounded-xl bg-[#087f8c] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#b8dedb] transition hover:bg-[#06616b] md:order-none"
          >
            Book Service
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#087f8c]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 text-white"
                  aria-label="HomeEase logo"
                  role="img"
                >
                  <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 9.5V19h14V9.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 19v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-xl font-black text-slate-900">HomeEase</p>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Trusted home services for cleaning, repairs, maintenance, and upgrades.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-900">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>About us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Plumbing</li>
              <li>Electrician</li>
              <li>Home Cleaning</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-900">Support</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Help center</li>
              <li>Privacy policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-5 text-center text-sm text-slate-500">
          © 2026 HomeEase. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
