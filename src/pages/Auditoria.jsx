const areas = [
  'Auditoría financiera y presupuestaria.',
  'Auditoría operativa a los servicios de salud.',
  'Evaluación del control interno institucional.',
  'Seguimiento al cumplimiento de la normativa vigente.',
]

export default function Auditoria() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center">
          <span className="icon-logo" style={{ color: 'navy' }}><i className="fas fa-clipboard-check"></i></span>
          {' '}<b><u>AUDITORÍA</u></b>
        </h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          La Unidad de Auditoría Interna evalúa de forma independiente y objetiva la gestión
          institucional del Seguro Social Universitario Potosí, con el fin de mejorar la
          eficiencia y transparencia de sus procesos.
        </b></p>

        <div className="row">
          {areas.map((a) => (
            <div className="col-md-6" key={a} style={{ marginBottom: 15 }}>
              <div style={{ padding: 15, border: '1px solid #eee', borderRadius: 4, height: '100%' }}>
                <i className="fas fa-check-circle" style={{ color: 'crimson', marginRight: 8 }}></i>
                <span style={{ color: 'navy' }}>{a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
