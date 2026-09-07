import "./Footer.css";
import Animacion from "./Animacion";

function Footer({ datos }) {
  return (
    <footer className="final">

      {/* ORNAMENTO */}
      <Animacion
        tipo="zoom-suave"
        duracion={1000}
      >
        <div className="final-ornamento">
          ✦
        </div>
      </Animacion>


      {/* MENSAJE */}
      <Animacion
        tipo="fade-up"
        retraso={150}
        duracion={1100}
        distancia={20}
      >
        <p className="footer-mensaje">
          {datos.textos.footer.mensaje}
        </p>
      </Animacion>


      {/* ETIQUETA */}
      <Animacion
        tipo="fade-up"
        retraso={300}
        duracion={900}
        distancia={20}
      >
        <p>
          {datos.textos.footer.etiqueta}
        </p>
      </Animacion>


      {/* NOMBRE */}
      <Animacion
        tipo="fade-up"
        retraso={450}
        duracion={1100}
        distancia={25}
      >
        <h2>
          {datos.nombre}
        </h2>
      </Animacion>


      {/* FECHA */}
      <Animacion
        tipo="fade-up"
        retraso={600}
        duracion={900}
        distancia={15}
      >
        <span>
          {datos.fecha}
        </span>
      </Animacion>

    </footer>
  );
}

export default Footer;