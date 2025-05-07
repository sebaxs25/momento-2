import MenuLateral from "../components/MenuLateral";
import Contenido from "../components/Contenido"
function Principal(){
    return (
        <div className="principal">
            <MenuLateral/>
            <div className="contenido">
                <main>
                    <section>
                        <h2></h2>
                    </section>
                    <Contenido/>
                </main>
            </div>
        </div>
    )
}
export default Principal