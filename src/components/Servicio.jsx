import MenuLateral from "./MenuLateral"
import '../pages/Principal.css'
const servicios = [
    { nombre: 'Consulta Médica', icono: '🩺' },
    { nombre: 'Laboratorio', icono: '🧪' },
    { nombre: 'Farmacia', icono: '💊' }
  ];
function Servicio (){
    return(
           
        <section className="servicio">
          <div>
          <MenuLateral/>
          </div>
           <h1 className="titulo-servicios">Nuestros Servicios</h1>
      <div className="servicios-grid">
        <div className="servicio-card">
          <h3>Consulta Médica</h3>
          <p>Atención personalizada con profesionales de la salud.</p>
        </div>
        <div className="servicio-card">
          <h3>Laboratorio Clínico</h3>
          <p>Análisis y exámenes con tecnología moderna.</p>
        </div>
        <div className="servicio-card">
          <h3>Urgencias</h3>
          <p>Atención 24/7 en situaciones críticas.</p>
        </div>
      </div>
        </section>
    )
}
export default Servicio