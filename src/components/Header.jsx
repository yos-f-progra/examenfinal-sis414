import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const { usuario, cerrarSesion } = useAuth()

  return (
    <header>
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li><a href="tel:26224161"><i className="fa fa-phone"></i> Emergencias +591-2-6224161</a></li>
            <li><a href="mailto:segurosocialluniversitario@ssupotosi.com.bo"><i className="fa fa-envelope"></i> segurosocialluniversitario@ssupotosi.com.bo</a></li>
            <li><a href="#"><i className="fa fa-map-marker"></i> Calle Calama Nº 107</a></li>
          </ul>
        </div>
      </div>

      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/" className="logo">
                  <img src="/img/logo.png" style={{ width: 100, height: 95 }} alt="Logo SSU Potosí" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-logo">
                <Link to="/" className="logo" style={{ alignContent: 'center' }}>
                  <h1 className="text-center"><br /><b style={{ color: 'navy' }}>SEGURO SOCIAL UNIVERSITARIO POTOSÍ</b></h1>
                </Link>
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="/img/Escudo_de_Bolivia.png" style={{ width: 101, height: 101 }} alt="Escudo de Bolivia" />
                </a>
              </div>
              <br />
              <div className="header-ctn">
                <div>
                  <p><u><b>
                    <Link to="/convocatorias" target="_blank"><span style={{ fontSize: 24 }}><b><u><i>
                      <img src="/images/iconos/convocatorias-ico-final.jpg" width="128" height="128" alt="Convocatorias" />
                    </i></u></b></span></Link>
                  </b></u></p>
                </div>

                {usuario ? (
                  <div>
                    <span style={{ color: 'navy' }}><b>Hola, {usuario}</b></span>
                    {' '}
                    <button onClick={cerrarSesion} className="bg-red" style={{ border: 'none', background: 'none', color: 'crimson', cursor: 'pointer' }}>
                      <b>Salir</b>
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/reservas" style={{ color: 'crimson', fontSize: 20, textDecoration: 'underline' }}>
                      <b>Reservas</b>
                    </Link>
                    {' '}
                    <Link to="/login" style={{ color: 'crimson', fontSize: 20, textDecoration: 'underline' }}>
                      <b>Iniciar Sesión</b>
                    </Link>
                    {' '}
                    <Link to="/register" style={{ color: 'crimson', fontSize: 20, textDecoration: 'underline' }}>
                      <b>Registrarse</b>
                    </Link>
                  </div>
                )}

                <div className="dropdown">
                  <a className="dropdown-toggle">
                    <i className="fa fa-bell" style={{ color: 'crimson' }}></i>
                    <span className="text-primary" style={{ color: 'crimson' }}><b>Siguenos</b></span>
                  </a>
                  <div className="cart-dropdown" style={{ background: 'navy' }}>
                    <div className="cart-btns" style={{ padding: 0, margin: 0, border: 0 }}>
                      <a href="https://facebook.com/ssupotosi/" target="_blank" rel="noreferrer">Facebook <i className="fa fa-facebook"></i></a>
                      <a href="https://www.youtube.com/channel/UC2ymp6s2JzbrkGlnIpv9lbg" target="_blank" rel="noreferrer">Youtube <i className="fa fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav">
              <li><NavLink to="/" end>Inicio</NavLink></li>

              <li>
                <a className="dropdown-toggle"><b>Institucional</b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/institucional">Datos Generales</Link></li>
                  
                  <li><Link to="/plantel-ejecutivo">Plantel Ejecutivo</Link></li>
                  <li><Link to="/organigrama">Estructura Orgánica</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/directorio">Directorio</Link></li>
                </ul>
              </li>

              <li>
                <a className="dropdown-toggle"><b>Servicios</b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/servicios">Especialidades</Link></li>
                  <li><Link to="/afiliaciones">Afiliaciones</Link></li>
                  <li><Link to="/reservas" style={{ color: 'red' }}><b>Fichaje</b></Link></li>
                </ul>
              </li>

              <li>
                <a className="dropdown-toggle"><b>Personal de Salud</b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/personal-salud">Administrativo</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/personal-salud">Médico</Link></li>
                </ul>
              </li>

              <li>
                <a className="dropdown-toggle"><b>Contrataciones</b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/contrataciones">Menor</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/contrataciones">Anpe</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/contrataciones">Licitación Pública</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/contrataciones">Por Excepción</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/contrataciones">Por Desastres y/o Emergencias</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/contrataciones">Directa</Link></li>
                </ul>
              </li>

              <li>
                <a className="dropdown-toggle"><b>Transparencia</b></a>
                <ul className="dropdown-menu">
                  <li><Link to="/asesoria-legal">Asesoría Legal</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/historial-invitaciones">Historial de Avisos</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/rrhh">Recursos Humanos</Link></li>
                  <li className="divider"></li>
                  <li><Link to="/auditoria">Auditoría</Link></li>
                </ul>
              </li>

              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
