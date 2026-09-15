export const defaultBookings = [
  {
    id: 101,
    customerName: 'Emma Johnson',
    phone: '+1 (304) 555-0188',
    service: 'Plumbing',
    date: '2026-09-12',
    time: '10:00 AM',
    address: '45 Maple Avenue, Austin',
    instructions: 'Please check the kitchen sink leak first.',
    status: 'Confirmed',
  },
  {
    id: 102,
    customerName: 'Daniel Smith',
    phone: '+1 (415) 555-0142',
    service: 'Home Cleaning',
    date: '2026-09-15',
    time: '9:30 AM',
    address: '18 Riverstone Lane, Seattle',
    instructions: 'Focus on kitchen and bathroom deep cleaning.',
    status: 'Pending',
  },
]

export const getStoredBookings = () => {
  if (typeof window === 'undefined') {
    return defaultBookings
  }

  const saved = window.localStorage.getItem('homeease-bookings')
  if (!saved) {
    return defaultBookings
  }

  try {
    const parsed = JSON.parse(saved)
    return Array.isArray(parsed) && parsed.length ? parsed : defaultBookings
  } catch {
    return defaultBookings
  }
}
