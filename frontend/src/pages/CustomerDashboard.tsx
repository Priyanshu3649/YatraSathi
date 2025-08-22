import { useEffect, useState } from 'react'
import { api } from '../lib/api'

type Ticket = {
  id: number
  origin: string
  destination: string
  travelDate: string
  status: string
}

export default function CustomerDashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [form, setForm] = useState({ origin: '', destination: '', travelDate: '', travelClass: 'SLEEPER', berthPreference: 'NONE', specialRequirements: '' })

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const res = await api.get('/tickets/my')
    setTickets(res.data)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    await api.post('/tickets', form)
    setForm({ origin: '', destination: '', travelDate: '', travelClass: 'SLEEPER', berthPreference: 'NONE', specialRequirements: '' })
    await load()
  }

  return (
    <div className="grid gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Create Ticket Request</h2>
        <form onSubmit={submit} className="grid grid-cols-2 gap-3">
          <input className="border p-2" placeholder="Origin" value={form.origin} onChange={e => setForm({ ...form, origin: e.target.value })} />
          <input className="border p-2" placeholder="Destination" value={form.destination} onChange={e => setForm({ ...form, destination: e.target.value })} />
          <input className="border p-2" type="date" value={form.travelDate} onChange={e => setForm({ ...form, travelDate: e.target.value })} />
          <input className="border p-2 col-span-2" placeholder="Special Requirements" value={form.specialRequirements} onChange={e => setForm({ ...form, specialRequirements: e.target.value })} />
          <button className="bg-green-600 text-white px-4 py-2 rounded col-span-2" type="submit">Submit</button>
        </form>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">My Requests</h2>
        <table className="w-full text-left">
          <thead>
            <tr><th>Origin</th><th>Destination</th><th>Date</th><th>Status</th></tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id} className="border-t">
                <td>{t.origin}</td>
                <td>{t.destination}</td>
                <td>{t.travelDate}</td>
                <td>{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


