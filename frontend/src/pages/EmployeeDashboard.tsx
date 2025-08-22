import { useEffect, useState } from 'react'
import { api } from '../lib/api'

type Ticket = { id: number, origin: string, destination: string, travelDate: string, status: string }

export default function EmployeeDashboard() {
  const [pending, setPending] = useState<Ticket[]>([])

  useEffect(() => { load() }, [])

  async function load() {
    const res = await api.get('/tickets/pending')
    setPending(res.data)
  }

  async function approve(id: number) {
    await api.post(`/tickets/${id}/approve?count=2`)
    await load()
  }

  async function confirm(id: number) {
    await api.post(`/tickets/${id}/confirm?pnr=PNR123`)
    await load()
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-3">Pending Requests</h2>
      <table className="w-full text-left">
        <thead><tr><th>Origin</th><th>Destination</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>
          {pending.map(t => (
            <tr key={t.id} className="border-t">
              <td>{t.origin}</td><td>{t.destination}</td><td>{t.travelDate}</td>
              <td className="space-x-2">
                <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => approve(t.id)}>Approve</button>
                <button className="px-3 py-1 bg-green-600 text-white rounded" onClick={() => confirm(t.id)}>Confirm</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


