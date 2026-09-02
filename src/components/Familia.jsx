import "./Familia.css";
import Animacion from "./Animacion";

function Familia({ datos }) {
  return (
    <section className="seccion familia">

      {/* ETIQUETA */}
      <Animacion
        tipo="fade-down"
        duracion={800}
      >
        <p className="eyebrow">
          {datos.textos.familia.etiqueta}
        </p>
      </Animacion>


      {/* PADRES - TÍTULO */}
      <Animacion
        tipo="fade-up"
        retraso={100}
        duracion={1000}
        distancia={25}
      >
        <h2>
          {datos.textos.familia.padres}
        </h2>
      </Animacion>


      {/* PADRES - NOMBRES */}
      <Animacion
        tipo="fade-up"
        retraso={250}
        duracion={1100}
        distancia={25}
      >
        <div className="nombres">

          <p>
            <span>
              {datos.textos.familia.textoPadres}
            </span>

            {datos.padres.madre}
            <br />
            &amp;
            <br />
            {datos.padres.padre}
          </p>

        </div>
      </Animacion>


      {/* SEPARADOR */}
      <Animacion
        tipo="zoom-suave"
        retraso={400}
        duracion={900}
      >
        <div className="separador-familia">
          ✦
        </div>
      </Animacion>


      {/* PADRINOS - TÍTULO */}
      <Animacion
        tipo="fade-up"
        retraso={500}
        duracion={1000}
        distancia={25}
      >
        <h2>
          {datos.textos.familia.padrinos}
        </h2>
      </Animacion>


      {/* PADRINOS - NOMBRES */}
      <Animacion
        tipo="fade-up"
        retraso={650}
        duracion={1100}
        distancia={25}
      >
        <div className="nombres">

          <p>
            <span>
              {datos.textos.familia.textoPadrinos}
            </span>

            {datos.padrinos.madrina}
            <br />
            &amp;
            <br />
            {datos.padrinos.padrino}
          </p>

        </div>
      </Animacion>

    </section>
  );
}

export default Familia;