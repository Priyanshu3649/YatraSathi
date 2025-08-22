import { useEffect, useState } from 'react'
import { api } from '../lib/api'

export default function AdminDashboard() {
  const [summary, setSummary] = useState<any>({})

  useEffect(() => { load() }, [])

  async function load() {
    const res = await api.get('/dashboard/admin')
    setSummary(res.data)
  }

  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-3 gap-3">
        <Stat label="Pending" value={summary.pendingTickets} />
        <Stat label="Approved" value={summary.approvedTickets} />
        <Stat label="Confirmed" value={summary.confirmedTickets} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-3">Exports</h2>
        <div className="space-x-3">
          <a className="px-3 py-2 bg-gray-800 text-white rounded" href="/api/admin/export/tickets.csv">Download Tickets CSV</a>
          <a className="px-3 py-2 bg-gray-800 text-white rounded" href="/api/admin/export/payments.csv">Download Payments CSV</a>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string, value: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-gray-500 text-sm">{label}</div>
      <div className="text-2xl font-semibold">{value ?? '-'}</div>
    </div>
  )
}


