import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-28 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#087f8c]">404</p>
      <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-slate-600">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-[#087f8c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06616b]"
      >
        Back to Home
      </Link>
    </div>
  )
}
