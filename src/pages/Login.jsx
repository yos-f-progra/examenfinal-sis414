import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const data = await api.post('/auth/login', { correo: email, contrasena })
      iniciarSesion(data)
      navigate('/reservas')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 420 }}>
        <h3 className="title text-center"><b>Ingreso a Fichaje / Reservas</b></h3>

        {error && <p style={{ color: 'crimson', textAlign: 'center' }}><b>{error}</b></p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><b>&nbsp;CORREO ELECTRÓNICO&nbsp;</b></label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label><b>&nbsp;CONTRASEÑA&nbsp;</b></label>
            <input type="password" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-block" style={{ background: 'navy', color: '#fff' }}>
            <b>INGRESAR</b>
          </button>
        </form>

        <p className="text-center" style={{ marginTop: 15 }}>
          ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  )
}
