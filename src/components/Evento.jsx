import "./Evento.css";
import Animacion from "./Animacion";

function Evento({ datos }) {
  return (
    <section className="seccion evento">

      {/* ETIQUETA */}
      <Animacion
        tipo="fade-down"
        duracion={800}
      >
        <p className="eyebrow">
          {datos.textos.evento.etiqueta}
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
          {datos.textos.evento.titulo}
        </h2>
      </Animacion>


      {/* TARJETAS */}
      <div className="tarjetas-evento">

        {/* FECHA */}
        <Animacion
          tipo="fade-up"
          retraso={200}
          duracion={900}
          distancia={30}
        >
          <div className="tarjeta-evento">

            <span className="icono">
              ♡
            </span>

            <h3>
              {datos.textos.evento.fecha}
            </h3>

            <p>
              {datos.fecha}
            </p>

          </div>
        </Animacion>


        {/* HORA */}
        <Animacion
          tipo="fade-up"
          retraso={300}
          duracion={900}
          distancia={30}
        >
          <div className="tarjeta-evento">

            <span className="icono">
              ◷
            </span>

            <h3>
              {datos.textos.evento.hora}
            </h3>

            <p>
              {datos.evento.hora}
            </p>

          </div>
        </Animacion>


        {/* LUGAR */}
        <Animacion
          tipo="fade-up"
          retraso={400}
          duracion={900}
          distancia={30}
        >
          <div className="tarjeta-evento">

            <span className="icono">
              ♧
            </span>

            <h3>
              {datos.textos.evento.lugar}
            </h3>

            <p>
              {datos.evento.lugar}
              <br />
              {datos.evento.direccion}
            </p>

          </div>
        </Animacion>

      </div>


      {/* BOTÓN GOOGLE MAPS */}
      {datos.enlaces.maps.activa && datos.enlaces.maps.url && (

        <Animacion
          tipo="fade-up"
          retraso={550}
          duracion={900}
          distancia={20}
        >
          <div className="botones-ubicacion">

            <a
              href={datos.enlaces.maps.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {datos.enlaces.maps.texto}
            </a>

          </div>
        </Animacion>

      )}

    </section>
  );
}

export default Evento;