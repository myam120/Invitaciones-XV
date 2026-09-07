import "./Countdown.css";
import Animacion from "./Animacion";

function Countdown({ tiempo, datos }) {
  return (
    <section className="seccion countdown">

      {/* ETIQUETA */}
      <Animacion tipo="fade-down" duracion={800}>
        <p className="eyebrow">
          {datos.textos.countdown.etiqueta}
        </p>
      </Animacion>


      {/* TÍTULO */}
      <Animacion
        tipo="fade-up"
        retraso={100}
        duracion={1000}
        distancia={25}
      >
        <h2>
          {datos.textos.countdown.titulo}
        </h2>
      </Animacion>


      {/* CONTADOR */}
      <div className="contador">

        {/* DÍAS */}
        <Animacion
          tipo="fade-up"
          retraso={200}
          duracion={900}
          distancia={20}
        >
          <div>
            <strong>
              {String(tiempo.dias || 0).padStart(2, "0")}
            </strong>

            <span>
              {datos.textos.countdown.dias}
            </span>
          </div>
        </Animacion>


        {/* HORAS */}
        <Animacion
          tipo="fade-up"
          retraso={300}
          duracion={900}
          distancia={20}
        >
          <div>
            <strong>
              {String(tiempo.horas || 0).padStart(2, "0")}
            </strong>

            <span>
              {datos.textos.countdown.horas}
            </span>
          </div>
        </Animacion>


        {/* MINUTOS */}
        <Animacion
          tipo="fade-up"
          retraso={400}
          duracion={900}
          distancia={20}
        >
          <div>
            <strong>
              {String(tiempo.minutos || 0).padStart(2, "0")}
            </strong>

            <span>
              {datos.textos.countdown.minutos}
            </span>
          </div>
        </Animacion>


        {/* SEGUNDOS */}
        <Animacion
          tipo="fade-up"
          retraso={500}
          duracion={900}
          distancia={20}
        >
          <div>
            <strong
              key={tiempo.segundos}
              className="numero-cambio"
            >
              {String(tiempo.segundos || 0).padStart(2, "0")}
            </strong>

            <span>
              {datos.textos.countdown.segundos}
            </span>
          </div>
        </Animacion>

      </div>

    </section>
  );
}

export default Countdown;