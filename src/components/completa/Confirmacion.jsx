import "./Confirmacion.css";
import Animacion from "./Animacion";

function Confirmacion({ datos }) {

  const configuracion = datos.enlaces.confirmacion;

  // Si la confirmación está desactivada,
  // no mostramos la sección.
  if (!configuracion.activa) {
    return null;
  }


  const confirmarAsistencia = () => {

    const mensaje = encodeURIComponent(
      configuracion.mensaje
    );

    const telefono = configuracion.telefono;

    const url =
      `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };


  return (
    <section className="seccion confirmacion">

      {/* ETIQUETA */}

      <Animacion
        tipo="fade-down"
        duracion={800}
      >
        <p className="eyebrow">
          {datos.textos.confirmacion.etiqueta}
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
          {datos.textos.confirmacion.titulo}
        </h2>
      </Animacion>


      {/* DESCRIPCIÓN */}

      <Animacion
        tipo="fade-up"
        retraso={250}
        duracion={1100}
        distancia={20}
      >
        <p className="descripcion-confirmacion">
          {datos.textos.confirmacion.descripcion}
        </p>
      </Animacion>


      {/* BOTÓN */}

      <Animacion
        tipo="zoom-suave"
        retraso={450}
        duracion={900}
      >
        <button
          type="button"
          className="boton-whatsapp"
          onClick={confirmarAsistencia}
        >
          {datos.textos.confirmacion.boton}
        </button>
      </Animacion>

    </section>
  );
}

export default Confirmacion;