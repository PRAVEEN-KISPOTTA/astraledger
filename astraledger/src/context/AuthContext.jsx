import { createContext, useContext, useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const queryClient = useQueryClient()

  const login = async (credentials) => {
    // Implement login logic
  }

  const logout = () => {
    setUser(null)
    queryClient.clear()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}