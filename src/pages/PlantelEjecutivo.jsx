export default function PlantelEjecutivo() {
  return (
    <div className="section">
      <h2 className="text-center" style={{ color: 'navy' }}><u><b>PLANTEL EJECUTIVO</b></u></h2>
      <div className="organigrama">
        <div className="container text-center">
          <ul>
            <li>
              <a href="#"><u>DIRECTORIO</u></a>
              <ul>
                <li style={{ textAlign: 'center' }}>
                  <a href="#">GERENTE GENERAL
                    <div className="img-responsive" style={{ fontSize: 48 }}>👤</div>
                  </a>
                  <ul>
                    <li>
                      <a href="#">JEFATURA MÉDICA
                        <div className="img-responsive" style={{ fontSize: 48 }}>👤</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">JEFATURA RECURSOS HUMANOS
                        <div className="img-responsive" style={{ fontSize: 48 }}>👤</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">JEFATURA SERVICIOS GENERALES
                        <div className="img-responsive" style={{ fontSize: 48 }}>👤</div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
