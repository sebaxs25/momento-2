import MenuLateral from "./MenuLateral";
import '../pages/Principal.css'
function AcercaDe() {
  return (
    <section className="parrafo_acercade"> 
      <div>
       <MenuLateral/>
    </div>
     
      <h1 >Acerca de</h1>
      <p >
       El componente Outlet en react-router-dom sirve para renderizar las rutas hijas dentro de una ruta principal o layout compartido.
      <br /><br />
🧠 ¿Qué hace exactamente?
    Cuando tienes una estructura de rutas anidadas, Outlet  es el lugar donde se va a mostrar el contenido de la subruta. Es como un "contenedor dinámico" que cambia según la ruta seleccionada, sin recargar toda la página.
      </p>
    </section>
  );
}
export default AcercaDe;
