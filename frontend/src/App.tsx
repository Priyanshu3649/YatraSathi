import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CustomerDashboard from './pages/CustomerDashboard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AdminDashboard from './pages/AdminDashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow mb-6">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4">
          <Link to="/" className="font-semibold">YatraSathi</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  )
}



