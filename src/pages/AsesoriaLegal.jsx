const funciones = [
  'Asesoramiento en la elaboración y revisión de contratos institucionales.',
  'Análisis y aplicación de la normativa legal vigente en materia de seguridad social.',
  'Representación legal de la institución ante instancias administrativas y judiciales.',
  'Apoyo en la resolución de conflictos legales y absolución de consultas jurídicas.',
]

export default function AsesoriaLegal() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center">
          <span className="icon-logo" style={{ color: 'navy' }}><i className="fas fa-balance-scale"></i></span>
          {' '}<b><u>ASESORÍA LEGAL</u></b>
        </h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          Área encargada de brindar asesoramiento legal institucional al Seguro Social
          Universitario Potosí, velando por el cumplimiento de la normativa vigente en todas
          las actividades de la institución.
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
