export default function Afiliaciones() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="title text-center"><b><u>REQUISITOS PARA AFILIACIONES</u></b></h3>
        <p className="text-center">(click en el nombre para ver el detalle)</p>

        <details style={{ marginBottom: 15 }}>
          <summary style={{ fontWeight: 'bold', color: 'navy', cursor: 'pointer' }}>TITULAR</summary>
          <ul>
            <li>1. Solvencia Institucional adquirida en la Institución</li>
            <li>2. Contrato de Trabajo, Memorando de Designación de funciones ó certificación de la empresa donde presta sus servicios, invitación a la docencia en caso de docentes</li>
            <li>3. Certificado Original de Nacimiento</li>
            <li>4. Fotocopia de CI</li>
            <li>5. Fotocopia de última papeleta de pago</li>
            <li>6. Fotografía a colores de 2 ½ x 3 con fondo celeste</li>
            <li>7. Certificado Médico Preocupacional otorgado por la institución</li>
            <li>8. Grupo Sanguíneo</li>
            <li style={{ color: '#b8860b' }}>NOTA: Presentar todo en un fólder amarillo tamaño oficio asegurado con fasteners</li>
          </ul>
        </details>

        <details>
          <summary style={{ fontWeight: 'bold', color: 'navy', cursor: 'pointer' }}>BENEFICIARIO</summary>
          <ul>
            <li><b>HIJOS</b></li>
            <li>1. Solicitud de afiliación dirigido al Gerente General del S.S.U.P.</li>
            <li>2. Solvencia Institucional adquirida en la Institución</li>
            <li>3. Carnet de asegurado del titular (fotocopia)</li>
            <li>4. Última boleta de pago del titular (fotocopia)</li>
            <li>5. Cédula de identidad (fotocopia)</li>
            <li>6. Certificado Original de Nacimiento de cada beneficiario</li>
            <li>7. Fotografía a colores de 2 ½ x 3 con fondo celeste de cada beneficiario</li>
            <li>8. Grupo Sanguíneo de cada beneficiario</li>
            <li>9. Boleta de cancelación de 10 Bs. por el carnet</li>

            <br />
            <li><b>CÓNYUGE - ESPOSA</b></li>
            <li>1. Solicitud de afiliación dirigido al Gerente General del S.S.U.P.</li>
            <li>2. Solvencia Institucional adquirida en la Institución</li>
            <li>3. Carnet de asegurado del titular (fotocopia)</li>
            <li>4. Última boleta de pago del titular (fotocopia)</li>
            <li>5. Cédula de identidad (fotocopia)</li>
            <li>6. Certificación negativa de cotización otorgada por la GESTORA (Original)</li>
            <li>7. Certificado Original de Nacimiento y de Matrimonio</li>
            <li>8. Fotografía a colores de 2 ½ x 3 con fondo celeste</li>
            <li>9. Grupo Sanguíneo</li>
            <li>10. Boleta de cancelación de 10 Bs. por el carnet</li>
          </ul>
        </details>
      </div>
    </div>
  )
}
