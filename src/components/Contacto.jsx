import MenuLateral from "./MenuLateral"

function Contacto (){
    return(
        <section>
            <MenuLateral/>
            <h1>Contacto</h1>
        <form>
                <input type="text" placeholder="Nombre" /><br />
                <input type="email" placeholder="Correo" /><br />
                <textarea placeholder="Mensaje" /><br />
                <button type="submit">Enviar</button>
        </form>
        </section>
    )
}
export default Contacto