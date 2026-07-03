export default function Footer() {
  return (
    <footer id="footer">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="footer">
                <h3 className="footer-title">Acerca de Nosotros</h3>
                <ul className="footer-links">
                  <li><a href="https://www.google.com/maps/place/Seguro+Social+Universitario/@-19.5813492,-65.7571323,323m" target="_blank" rel="noreferrer"><i className="fa fa-map-marker"></i>Dirección: Calama Nº. 107</a></li>
                  <li><a href="#"><i className="fa fa-phone"></i>Teléfono: +591-2-6223227</a></li>
                  <li><a href="#"><i className="fa fa-phone"></i>Informaciones - Fichaje: +591-2-6223597</a></li>
                  <li><a href="#"><i className="fa fa-phone"></i>Emergencias - Clinica: +591-2-6224161</a></li>
                  <li><a href="#"><i className="fa fa-envelope-o"></i>segurosocialuniversitario@<br />ssupotosi.com.bo</a></li>
                </ul>
              </div>
            </div>
            <div className="clearfix visible-xs"></div>
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Servicios</h3>
                <ul className="footer-links">
                  <li><a href="/servicios">Consulta Externa</a></li>
                  <li><a href="/servicios">Laboratorio Clínico</a></li>
                  <li><a href="/servicios">Imagenología</a></li>
                  <li><a href="/servicios">Enfermería</a></li>
                  <li><a href="/servicios">Farmacia</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">&nbsp;</h3>
                <ul className="footer-links">
                  <li><a href="/servicios">Fisioterapia</a></li>
                  <li><a href="/servicios">Ecografía</a></li>
                  <li><a href="/servicios">Internación Clínica y Quirúrgica</a></li>
                  <li><a href="/afiliaciones">Afiliaciones</a></li>
                  <li><a href="/reservas"><b>Fichaje En Linea</b></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom-footer" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <span className="copyright">
                Copyright &copy;{new Date().getFullYear()} Todos los derechos reservados - Seguro Social Universitario Potosí<br />
                <i className="fa fa-university" aria-hidden="true"></i> <a href="#" style={{ color: 'white' }}>S.S.U.P.</a>
                <br />SIS 414 UATF TECNOLOGIAS EMERGENTES.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
