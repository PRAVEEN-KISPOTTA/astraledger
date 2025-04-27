import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          AstraLedger Portfolio Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Institutional-grade portfolio management with real-time analytics
        </p>
        <Link 
          to="/auth" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}