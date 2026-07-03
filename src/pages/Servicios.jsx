import { useEffect, useState } from 'react'
import { api } from '../services/api'

export default function Servicios() {
  const [especialidades, setEspecialidades] = useState([])

  useEffect(() => {
    api.get('/especialidades').then(setEspecialidades).catch(() => {})
  }, [])

  return (
    <div className="section">
      <div className="container">
        <h3 className="title"><b><u>SERVICIOS</u></b></h3>

        <div className="row">
          {especialidades.map((e) => (
            <div className="col-md-4 col-sm-6" key={e.id} style={{ marginBottom: 20 }}>
              <div style={{ border: '1px solid #eee', borderRadius: 4, padding: 15, height: '100%' }}>
                <h4 style={{ color: 'navy' }}><b>{e.nombre}</b></h4>
                <p>{e.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
