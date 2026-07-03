const areas = [
  {
    titulo: 'ADMINISTRATIVO',
    icono: 'fa-briefcase',
    detalle:
      'Personal encargado de la gestión, planificación y administración de los recursos institucionales, garantizando el correcto funcionamiento de los servicios que se brindan a los asegurados.',
  },
  {
    titulo: 'MÉDICO',
    icono: 'fa-user-md',
    detalle:
      'Equipo de médicos generales y especialistas, personal de enfermería y técnicos en salud, comprometidos con brindar una atención oportuna, humana y de calidad a los asegurados y beneficiarios.',
  },
]

const iconoCirculo = {
  width: 70,
  height: 70,
  borderRadius: '50%',
  background: 'crimson',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px',
  fontSize: 26,
}

export default function PersonalSalud() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center"><b><u>PERSONAL DE SALUD</u></b></h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          El Seguro Social Universitario Potosí cuenta con personal administrativo y médico
          altamente calificado y preparado al servicio de sus asegurados.
        </b></p>

        <div className="row">
          {areas.map((a) => (
            <div className="col-md-6" key={a.titulo} style={{ marginBottom: 20 }}>
              <div className="service-time text-center" style={{ padding: 20, border: '1px solid #eee', borderRadius: 4, height: '100%' }}>
                <div style={iconoCirculo}><i className={`fas ${a.icono}`}></i></div>
                <h4 style={{ color: 'crimson', textAlign: 'center' }}><b><u>{a.titulo}</u></b></h4>
                <p style={{ color: 'navy', textAlign: 'justify' }}>{a.detalle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-md-4 col-sm-4"><div className="shop-img"><img src="/images/medicina_gral.jpg" className="img-responsive" alt="" /></div></div>
          <div className="col-md-4 col-sm-4"><div className="shop-img"><img src="/images/emergencias.jpg" className="img-responsive" alt="" /></div></div>
          <div className="col-md-4 col-sm-4"><div className="shop-img"><img src="/images/laboratorio.jpg" className="img-responsive" alt="" /></div></div>
        </div>
      </div>
    </div>
  )
}
