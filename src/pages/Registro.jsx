import { useState } from "react"
import { Link } from "react-router-dom"
import './Registro.css'

function Registro (){
const [getUsuario,setUsuario] = useState("")
const [getContrasena,setContrasena]=useState("")
const [getNombre,setNombre]=useState("")
const [ getEmail,setEmail]=useState("")
    return(
        <form className="from"> 
            <input type="text" className="input" onChange={(e)=> setUsuario(e.target.value)} placeholder="Usuario" />
            <input type="text" className="input" onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
            <input type="text" className="input" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input type="text" className="input" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button type="button">Registrate</button>
            <Link to="/"> ¿ya tienes cuenta?</Link>
        </form>
    )
}
export default Registro