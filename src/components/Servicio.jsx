import MenuLateral from "./MenuLateral"
import '../pages/Principal.css'
const servicios = [
    { nombre: 'Consulta Médica', icono: '🩺' },
    { nombre: 'Laboratorio', icono: '🧪' },
    { nombre: 'Farmacia', icono: '💊' }
  ];
function Servicio (){
    return(
           
        <section>
          <div>
          <MenuLateral/>
          </div>
            <h1>Servicio</h1>
            <ul>
            {servicios.map((s, i) => (
          <li key={i}>{s.icono} {s.nombre}</li>
        ))}
      </ul>
        </section>
    )
}
export default Servicio