import { useState } from 'react'
import { api } from '../lib/api'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [aadhaar, setAadhaar] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    try {
      await api.post('/auth/signup', { email, phone, aadhaar, password, role: 'CUSTOMER' })
      navigate('/login')
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Signup failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Signup</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
        <input className="border p-2 w-full" placeholder="Aadhaar" value={aadhaar} onChange={e => setAadhaar(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Create account</button>
      </form>
    </div>
  )
}


