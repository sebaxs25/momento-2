
import { Link } from "react-router-dom"
import Contenido from "./Contenido"


function MenuLateral(){


    return(
      <div>
        <aside className="menu_lateral">
          <h1>Home</h1>
          <nav>
            <Link to="/servicio"  className = "navegacion_item" >Servicios</Link>
            <Link to="/contacto" className = "navegacion_item" >Contacto</Link>
            <Link to="/acercade" className = "navegacion_item" >Acerca de</Link>
            <Link to="/" className = "navegacion_item" >Cerrar Sesion</Link>
          </nav>
        </aside>
        
    </div>   
    )
}
export default MenuLateral