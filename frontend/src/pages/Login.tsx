import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/api'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    try {
      const res = await api.post('/auth/login', { username, password })
      const { token, role } = res.data
      localStorage.setItem('token', token)
      if (role === 'ADMIN') navigate('/admin')
      else if (role === 'EMPLOYEE') navigate('/employee')
      else navigate('/customer')
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="border p-2 w-full" placeholder="Email or Phone" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="border p-2 w-full" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
      </form>
    </div>
  )
}


