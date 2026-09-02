import "./Regalos.css";
import Animacion from "./Animacion";

function Regalos({ datos }) {
  return (
    <section className="seccion regalos">

      {/* ICONO */}
      <Animacion
        tipo="zoom-suave"
        duracion={1000}
      >
        <div className="regalo-icono">
          ♡
        </div>
      </Animacion>


      {/* ETIQUETA */}
      <Animacion
        tipo="fade-down"
        retraso={100}
        duracion={800}
      >
        <p className="eyebrow">
          {datos.textos.regalos.etiqueta}
        </p>
      </Animacion>


      {/* TÍTULO */}
      <Animacion
        tipo="fade-up"
        retraso={200}
        duracion={1000}
        distancia={25}
      >
        <h2>
          {datos.textos.regalos.titulo}
        </h2>
      </Animacion>


      {/* DESCRIPCIÓN */}
      <Animacion
        tipo="fade-up"
        retraso={350}
        duracion={1100}
        distancia={20}
      >
        <p>
          {datos.textos.regalos.descripcion}
        </p>
      </Animacion>


      {/* BOTÓN */}
      {datos.enlaces.regalos.activa && (
        <Animacion
          tipo="zoom-suave"
          retraso={500}
          duracion={900}
        >
          <a
            href={datos.enlaces.regalos.url}
            target="_blank"
            rel="noreferrer"
            className="boton-regalos"
          >
            {datos.textos.regalos.boton}
          </a>
        </Animacion>
      )}

    </section>
  );
}

export default Regalos;