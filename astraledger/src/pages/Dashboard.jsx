import { useAuth } from '../context/AuthContext'
import VirtualTable from '../components/VirtualTable'

export default function Dashboard() {
  const { user, logout } = useAuth()
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
          <button 
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Portfolio Overview</h2>
          <VirtualTable data={[]} />
        </div>
      </div>
    </div>
  )
}