const funciones = [
  'Reclutamiento, selección e inducción de personal administrativo y médico.',
  'Elaboración de planillas, contratos y seguimiento de la carrera laboral.',
  'Capacitación y desarrollo continuo del personal.',
  'Gestión del bienestar laboral y clima organizacional.',
]

export default function Rrhh() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center">
          <span className="icon-logo" style={{ color: 'navy' }}><i className="fas fa-users"></i></span>
          {' '}<b><u>RECURSOS HUMANOS</u></b>
        </h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          Área encargada de la gestión integral del personal del Seguro Social Universitario
          Potosí, promoviendo el desarrollo y bienestar de sus trabajadores.
        </b></p>

        <div className="row">
          {funciones.map((f) => (
            <div className="col-md-6" key={f} style={{ marginBottom: 15 }}>
              <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 4, height: '100%' }}>
                <i className="fas fa-check-circle" style={{ color: 'crimson', marginRight: 8 }}></i>
                <span style={{ color: 'navy' }}>{f}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
