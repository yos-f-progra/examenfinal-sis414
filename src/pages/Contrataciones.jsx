const modalidades = [
  { titulo: 'MENOR CUANTÍA', icono: 'fa-file-invoice-dollar', detalle: 'Contrataciones de bienes, obras y servicios cuyo monto no supera el límite establecido para esta modalidad, mediante un proceso simplificado.' },
  { titulo: 'ANPE', icono: 'fa-handshake', detalle: 'Apoyo Nacional a la Producción y Empleo: modalidad orientada a fomentar la participación de proveedores nacionales.' },
  { titulo: 'LICITACIÓN PÚBLICA', icono: 'fa-gavel', detalle: 'Proceso de contratación para montos mayores, con convocatoria pública y evaluación de propuestas conforme a normativa vigente.' },
  { titulo: 'POR EXCEPCIÓN', icono: 'fa-exclamation-circle', detalle: 'Contrataciones que se realizan en situaciones especiales previstas expresamente por la normativa de contrataciones del Estado.' },
  { titulo: 'POR DESASTRES Y/O EMERGENCIAS', icono: 'fa-truck-medical', detalle: 'Procesos ágiles habilitados ante situaciones de desastre o emergencia que requieren una respuesta institucional inmediata.' },
  { titulo: 'CONTRATACIÓN DIRECTA', icono: 'fa-file-signature', detalle: 'Modalidad aplicable a casos específicos autorizados por normativa, sin necesidad de un proceso competitivo previo.' },
]

const iconoCirculo = {
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'navy',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 15px',
  fontSize: 22,
}

export default function Contrataciones() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center"><b><u>CONTRATACIONES</u></b></h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          El Seguro Social Universitario Potosí realiza sus procesos de contratación de bienes, obras
          y servicios conforme a la normativa vigente, a través de las siguientes modalidades:
        </b></p>

        <div className="row">
          {modalidades.map((m) => (
            <div className="col-md-4 col-sm-6" key={m.titulo} style={{ marginBottom: 20 }}>
              <div className="service-time text-center" style={{ padding: 20, border: '1px solid #eee', borderRadius: 4, height: '100%' }}>
                <div style={iconoCirculo}><i className={`fas ${m.icono}`}></i></div>
                <h4 style={{ color: 'crimson', textAlign: 'center' }}><b><u>{m.titulo}</u></b></h4>
                <p style={{ color: 'navy', textAlign: 'justify' }}>{m.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
