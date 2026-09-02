import "./Hero.css";
import Animacion from "./Animacion";

function Hero({ datos }) {

  return (
    <section className="hero">

      <Animacion tipo="zoom-suave" duracion={1200}>

        <div className="hero-imagen">

          <img
            src={datos.recursos.hero}
            alt={datos.nombre}
          />

        </div>

      </Animacion>


      <div className="hero-contenido">

        <Animacion tipo="fade-up" retraso={200}>

          <p className="eyebrow">
            {datos.textos.hero.etiqueta}
          </p>

        </Animacion>


        <Animacion tipo="fade-up" retraso={300} duracion={1000} distancia={30}>

          <h2>
            {datos.nombre}
          </h2>

        </Animacion>


        <Animacion tipo="zoom" retraso={400}>

          <div className="ornamento">
            ✦
          </div>

        </Animacion>


        <Animacion tipo="fade-up" retraso={500} duracion={1000} distancia={25}>

          <p>
            {datos.textos.hero.mensaje}
          </p>

        </Animacion>

      </div>

    </section>
  );
}

export default Hero;