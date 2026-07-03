import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Inicio from './pages/Inicio'
import Institucional from './pages/Institucional'
import Directorio from './pages/Directorio'
import PlantelEjecutivo from './pages/PlantelEjecutivo'
import Organigrama from './pages/Organigrama'
import Servicios from './pages/Servicios'
import PersonalSalud from './pages/PersonalSalud'
import Contrataciones from './pages/Contrataciones'
import AsesoriaLegal from './pages/AsesoriaLegal'
import HistorialInvitaciones from './pages/HistorialInvitaciones'
import Rrhh from './pages/Rrhh'
import Auditoria from './pages/Auditoria'
import Convocatorias from './pages/Convocatorias'
import Afiliaciones from './pages/Afiliaciones'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import Register from './pages/Register'
import Reservas from './pages/Reservas'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/directorio" element={<Directorio />} />
        <Route path="/plantel-ejecutivo" element={<PlantelEjecutivo />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/personal-salud" element={<PersonalSalud />} />
        <Route path="/contrataciones" element={<Contrataciones />} />
        <Route path="/asesoria-legal" element={<AsesoriaLegal />} />
        <Route path="/historial-invitaciones" element={<HistorialInvitaciones />} />
        <Route path="/rrhh" element={<Rrhh />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/convocatorias" element={<Convocatorias />} />
        <Route path="/afiliaciones" element={<Afiliaciones />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
