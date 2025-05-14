import MenuLateral from "./MenuLateral"
import '../pages/Principal.css'

function Contacto (){
    return(
        
        <section className="contacto">
            <div>
                 <MenuLateral/>
            </div>
            <h1 className="titulo-contacto">Contacto</h1>
        <form className="formulario-contacto">
                <input type="text" placeholder="Nombre" /><br />
                <input type="email" placeholder="Correo" /><br />
                <textarea placeholder="Mensaje" /><br />
                <button type="submit">Enviar</button>
        </form>
        </section>
    )
}
export default Contacto