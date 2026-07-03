import { useState } from 'react'
import { api } from '../services/api'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      await api.post('/contacto', { nombre, email, mensaje })
      setEnviado(true)
      setNombre('')
      setEmail('')
      setMensaje('')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 500 }}>
        <h3 className="title"><b><u>CONTACTO</u></b></h3>

        {enviado && <p style={{ color: 'green' }}><b>¡Gracias! Tu mensaje fue enviado.</b></p>}
        {error && <p style={{ color: 'crimson' }}><b>{error}</b></p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Mensaje</label>
            <textarea className="form-control" rows="4" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
          </div>
          <button type="submit" className="btn" style={{ background: 'navy', color: '#fff' }}>Enviar</button>
        </form>
      </div>
    </div>
  )
}
