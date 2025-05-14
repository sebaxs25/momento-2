import { useState } from "react"
import { Link } from "react-router-dom"
import './Login.css'
function Login () {
    const [getUsuario,setUsuario] = useState("")
    const [getContrasena,setContrasena]=useState("")

    return (
        <form className="from">
            Iniciar sesion
            <input type="text" className="input" onChange={(e)=> setUsuario(e.target.value)} placeholder="Usuario" />
            <input type="text" className="input" onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
            <Link type="button" to ="/principal" className="button"  >Iniciar</Link>
            <Link to= "/registro"> ¿no tienes cuenta? </Link>
        </form>
    );
}
export default Login