import MenuLateral from "./MenuLateral";
import '../pages/Principal.css'
function AcercaDe() {
  return (
    <section className="parrafo_acercade"> 
      <div>
       <MenuLateral/>
      </div>
       <h1 className="acerca-titulo">Sobre Nosotros</h1>
      <div className="cuadros-grid">
        <div className="cuadro">
          <h3>Historia</h3>
          <p>Desde 2010 brindando atención de calidad y compromiso humano.</p>
        </div>
        <div className="cuadro">
          <h3>Misión</h3>
          <p>Ofrecer servicios de salud accesibles, confiables y humanos.</p>
        </div>
        <div className="cuadro">
          <h3>Visión</h3>
          <p>Ser líderes en atención médica integral y cercana al paciente.</p>
        </div>
        <div className="cuadro">
          <h3>Equipo</h3>
          <p>Contamos con médicos, enfermeros y especialistas comprometidos.</p>
        </div>
      </div>
    </section>
  );
}
export default AcercaDe;
