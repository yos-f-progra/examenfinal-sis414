import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [email, setEmail] = useState('')
  const [nombreCompleto, setNombreCompleto] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const data = await api.post('/auth/register', { correo: email, nombreCompleto, contrasena })
      iniciarSesion(data)
      navigate('/reservas')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 420 }}>
        <h3 className="title text-center"><b>Crear cuenta</b></h3>

        {error && <p style={{ color: 'crimson', textAlign: 'center' }}><b>{error}</b></p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><b>Nombre completo</b></label>
            <input className="form-control" value={nombreCompleto} onChange={(e) => setNombreCompleto(e.target.value)} required />
          </div>
          <div className="form-group">
            <label><b>Correo electrónico</b></label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label><b>Contraseña</b></label>
            <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-block" style={{ background: 'navy', color: '#fff' }}>
            <b>Registrarme</b>
          </button>
        </form>
      </div>
    </div>
  )
}
