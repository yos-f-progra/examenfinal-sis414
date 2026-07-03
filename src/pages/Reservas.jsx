import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import Login from './Login'

export default function Reservas() {
  const { usuario } = useAuth()

  if (!usuario) {
    return <Login />
  }

  return <ReservasPanel />
}

function ReservasPanel() {
  const [reservas, setReservas] = useState([])
  const [especialidades, setEspecialidades] = useState([])
  const [especialidadId, setEspecialidadId] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [error, setError] = useState('')
  const [editandoId, setEditandoId] = useState(null)

  function cargar() {
    api.get('/reservas').then(setReservas).catch((e) => setError(e.message))
  }

  useEffect(() => {
    cargar()
    api.get('/especialidades').then(setEspecialidades).catch(() => {})
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const body = { especialidadId: Number(especialidadId), fecha, hora }
    try {
      if (editandoId) {
        await api.put('/reservas/' + editandoId, body)
        setEditandoId(null)
      } else {
        await api.post('/reservas', body)
      }
      setFecha('')
      setHora('')
      setEspecialidadId('')
      cargar()
    } catch (err) {
      setError(err.message)
    }
  }

  function editar(r) {
    setEditandoId(r.id)
    setEspecialidadId(String(r.especialidadId))
    setFecha(r.fecha)
    setHora(r.hora)
  }

  function cancelarEdicion() {
    setEditandoId(null)
    setEspecialidadId('')
    setFecha('')
    setHora('')
  }

  async function cancelar(id) {
    try {
      await api.del('/reservas/' + id)
      if (editandoId === id) cancelarEdicion()
      cargar()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="section">
      <div className="container">
        <h3 className="title"><b><u>MIS RESERVAS DE FICHA</u></b></h3>
        {error && <p style={{ color: 'crimson' }}><b>{error}</b></p>}

        <div className="row">
          <div className="col-md-5">
            <h4><b>{editandoId ? 'Reprogramar reserva' : 'Nueva reserva'}</b></h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Especialidad</label>
                <select className="form-control" value={especialidadId} onChange={(e) => setEspecialidadId(e.target.value)} required>
                  <option value="">Seleccione...</option>
                  {especialidades.map((esp) => (
                    <option key={esp.id} value={esp.id}>{esp.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Fecha</label>
                <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Hora</label>
                <input type="time" className="form-control" value={hora} onChange={(e) => setHora(e.target.value)} required />
              </div>
              <button type="submit" className="btn" style={{ background: 'navy', color: '#fff' }}>
                {editandoId ? 'Guardar cambios' : 'Reservar Ficha'}
              </button>
              {editandoId && (
                <button type="button" className="btn" style={{ background: 'crimson', color: '#fff', marginLeft: 10 }} onClick={cancelarEdicion}>
                  Cancelar edición
                </button>
              )}
            </form>
          </div>

          <div className="col-md-7">
            <h4><b>Reservas activas</b></h4>
            {reservas.length === 0 && <p>No tiene reservas activas.</p>}
            {reservas.map((r) => (
              <div key={r.id} style={{ border: '1px solid #ddd', borderRadius: 4, padding: 12, marginBottom: 10 }}>
                <p><b>{r.especialidadNombre}</b> — {r.fecha} {r.hora}</p>
                <button className="btn btn-sm" style={{ background: 'navy', color: '#fff' }} onClick={() => editar(r)}>Editar</button>
                {' '}
                <button className="btn btn-sm" style={{ background: 'crimson', color: '#fff' }} onClick={() => cancelar(r.id)}>Cancelar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
