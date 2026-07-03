import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('usuario')
    if (stored) {
      setUsuario(stored)
    }
  }, [])

  function iniciarSesion({ token, usuario: nombreUsuario }) {
    localStorage.setItem('token', token)
    localStorage.setItem('usuario', nombreUsuario)
    setUsuario(nombreUsuario)
  }

  function cerrarSesion() {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
