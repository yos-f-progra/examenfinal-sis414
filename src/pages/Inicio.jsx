import { Link } from 'react-router-dom'

const novedades = [
  { href: '/login', interno: true, img: '/img/ingreso.png', titulo: <>INGRESO A<br />FICHAJE<br />EN LÍNEA</> },
  { href: 'http://certificaciones.ssupotosi.com.bo/persona/verificar', img: '/img/afiliaciones.png', titulo: <><u>CERTIFICADOS</u><br />AFILIACIÓN<br />NO AFILIACIÓN</> },
  
  { href: 'https://ssupotosi.com.bo/informes/solvencias/solvencia.pdf', img: '/img/word.png', titulo: <><u>SOLVENCIAS</u><br />PARA<br />AFILIACIONES</> },
  { href: 'http://certificaciones.ssupotosi.com.bo/verificar', img: '/img/pdf.png', titulo: <><u>MANUAL</u><br />RESERVA<br />DE FICHAS<br />EN LÍNEA</> },
]

const fotosServicios = ['ambulancia.png', 'emergencias.jpg', 'medicina_gral.jpg', 'ecografia.jpg', 'laboratorio.jpg', 'farmacia.jpg']

const medicos = [
  { img: 'oscar_lafuente.png', nombre: 'OSCAR LA FUENTE', rol: 'MEDICO GENERAL', color: 'navy' },
  { img: 'grinez_rocio.jpg', nombre: 'GRINEZ ROCIO', rol: 'MÉDICO CENTINELA', color: 'crimson' },
  { img: 'melva_magne.jpg', nombre: 'MELVA MAGNE', rol: 'REGENTE DE FARMACIA', color: 'crimson' },
  { img: 'erick_lennis.png', nombre: 'ERICK LENNIS', rol: 'MÉDICO PEDIATRA', color: 'navy' },
  
]

const tiles = [
  { img: 'pediatria.jpg', label: 'PEDIATRÍA' },
  { img: 'emergencias.jpg', label: 'EMERGENCIAS' },
  { img: 'medicina_gral.jpg', label: 'CONSULTA GENERAL' },
  { img: 'ecografia.jpg', label: 'ECOGRAFÍA' },
  { img: 'laboratorio.jpg', label: 'LABORATORIO' },
  { img: 'farmacia.jpg', label: 'FARMACIA' },
]

export default function Inicio() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <h3 className="title"><b><u>ULTIMAS NOVEDADES Y CONSULTAS EXTERNAS</u></b></h3>
            <p style={{ color: 'navy' }}><b>Estimado usuario, le comunicamos que los enlaces para los diferentes servicios se encuentran <u style={{ color: 'crimson' }}>A CONTINUACIÓN</u></b></p>

            <div className="row">
              {novedades.map((n, i) => (
                <div className="col-md-3 col-sm-6" key={i}>
                  <div className="product">
                    <div className="product-img">
                      {n.interno ? (
                        <Link to={n.href}>
                          <div className="shop">
                            <div className="shop-header">
                              <div className="shop-img"><img src={n.img} className="img-responsive" alt="" /></div>
                            </div>
                            <div className="shop-body text-center">
                              <h3><b>{n.titulo}</b></h3>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <a href={n.href} target="_blank" rel="noreferrer">
                          <div className="shop">
                            <div className="shop-header">
                              <div className="shop-img"><img src={n.img} className="img-responsive" alt="" /></div>
                            </div>
                            <div className="shop-body">
                              <h3><b>{n.titulo}</b></h3>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="section">
        <div className="container">
          <div className="heading">
            <h2>Brindando los mejores servicios</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="message-box">
                <h5 className="text-justify">
                  Servicio de ambulancia las 24 Hrs. de la semana
                  <br />
                  Les brindamos los mejores servicios y médicos para su confort con calidad y calidez.
                  <br />
                  24/7 la formula perfecta al servicio de nuestos asegurados y la población en general.
                  <br />
                  Las 24 horas y los 7 días de la semana, en caso de necesitarnos llamar al +591-2-6224161.
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                {fotosServicios.map((f) => (
                  <div className="col-md-4 col-sm-4" key={f}>
                    <div className="shop-img"><img src={`/images/${f}`} className="img-responsive" alt="" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />
          <h4><b><u>AUTORIDADES</u></b></h4>
          <Link to="/organigrama">
            <h5 style={{ backgroundColor: 'crimson', color: 'navy' }}>
              Conosca a nuestras autoridades ingresando al enlace &nbsp;
              <i className="fa fa-hand-o-right" aria-hidden="true" style={{ fontSize: 25 }}></i>
            </h5>
          </Link>
        </div>
      </div>

      <div id="doctorsgrales" className="section" style={{ background: '#fff' }}>
        <div className="container">
          <h2>
            <span className="icon-logo" style={{ color: 'navy' }}><i className="fas fa-user-md"></i></span>
            {' '}Contamos con médicos especialistas preparados al servicio de la sociedad
          </h2>
          <div className="row dev-list text-center">
            {medicos.map((m) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6" key={m.nombre}>
                <div className="clearfix" style={{ boxShadow: `0 0 0 0.4em ${m.color}`, margin: '1em auto', padding: 0, borderTopLeftRadius: '1em 1em', maxWidth: 200 }}>
                  <img
                    src={`/images/medicos/${m.img}`}
                    alt=""
                    className="img-responsive img-rounded"
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                  <div className="widget-title">
                    <h5>{m.nombre}</h5>
                    <p>{m.rol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {tiles.map((t) => (
            <div className="col-md-3 col-sm-6" key={t.label}>
              <div className="shop-img"><img src={`/images/${t.img}`} style={{ width: '100%' }} alt="" /></div>
              <div className="shop-body">
                <h3><b>{t.label}</b></h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
