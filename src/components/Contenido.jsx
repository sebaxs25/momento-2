import AcercaDe from "./AcercaDe"
import Contacto from "./Contacto"
import Servicio from "./Servicio"

function Contenido (){
    return (
        <section className="contenido">
            <Servicio/>
            <Contacto/>
            <AcercaDe/>
            
        </section>
    )
}
export default Contenido