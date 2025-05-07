
import { useNavigate, Link } from "react-router-dom"


function MenuLateral(){
 let useNavigate = useNavigate() 

    return(
      <div>
        <aside className="menu_lateral">
          <h1>Home</h1>
          <nav>
            <button onClick={()=> setSesionActiva ('Servicos')} className = "navegacion_item" >Servicios</button>
            <button onClick={()=> setSesionActiva ('Contacto')}  className = "navegacion_item" >Contacto</button>
            <button onClick={()=> setSesionActiva ('Acerca de')} className = "navegacion_item" >Acerca de</button>
            <button className = "navegacion_item" >cerrar sesion</button>
          </nav>
        </aside>
        <main>
            {renderContenido()}
        </main>
    </div>   
    )
}
export default MenuLateral