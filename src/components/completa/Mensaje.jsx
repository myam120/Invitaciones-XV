import "./Mensaje.css";
import Animacion from "./Animacion";

function Mensaje({ datos }) {

  return (
    <section className="seccion mensaje">

      <Animacion tipo="fade-up" duracion={800} retraso={30}>

        <p className="eyebrow">
          {datos.textos.mensaje.etiqueta}
        </p>

      </Animacion>


      <Animacion tipo="fade-up" retraso={100} duracion={1000} distancia={25}>

        <h2>
          {datos.textos.mensaje.titulo}
        </h2>

      </Animacion>


      <Animacion tipo="zoom-suave" retraso={200} duracion={1000}>

        <div className="decoracion">
          ✦
        </div>

      </Animacion>


      <Animacion tipo="fade-up" retraso={300}  duracion={1100} distancia={25}>

        <p className="texto-elegante">
          {datos.mensaje}
        </p>

      </Animacion>


      <Animacion tipo="fade-up" retraso={450} duracion={1000} distancia={20}>

        <p className="firma">
          {datos.textos.mensaje.firma}
          <br />
          <strong>
            {datos.nombre}
          </strong>
        </p>

      </Animacion>

    </section>
  );
}

export default Mensaje;