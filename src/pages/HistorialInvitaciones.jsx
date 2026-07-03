export default function HistorialInvitaciones() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center"><b><u>HISTORIAL DE AVISOS</u></b></h3>
        <p style={{ color: 'navy', textAlign: 'justify' }}><b>
          En esta sección se publican las convocatorias, invitaciones y avisos de procesos de
          contratación del Seguro Social Universitario Potosí.
        </b></p>

        <div className="service-time text-center" style={{ padding: 20, border: '1px dashed crimson', borderRadius: 4 }}>
          <i className="fa fa-info-circle" style={{ color: 'crimson', fontSize: 30 }}></i>
          <p style={{ color: 'crimson', marginTop: 10 }}><b>Por el momento no hay avisos ni invitaciones vigentes.</b></p>
        </div>
      </div>
    </div>
  )
}
