
import { Link,Outlet } from "react-router-dom"
import '../pages/Principal.css'
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
        
      <main className="contenido-principal">
        <Outlet/>
      </main>
    </div>   
    )
}
export default MenuLateral