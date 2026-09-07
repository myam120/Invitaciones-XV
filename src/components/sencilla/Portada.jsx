import "./Portada.css";

function Portada({
  datos,
  abrirInvitacion,
}) {

  return (

    <section
      className="portada-entrada-sencilla"
      style={{
        "--entrada-fondo":
          `url("${datos.recursos?.fondo || ""}")`,
      }}
    >

      {/* DECORACIÓN SUPERIOR */}

      {datos.recursos?.decoracionSuperior && (

        <img
          className="entrada-decoracion-superior"
          src={datos.recursos.decoracionSuperior}
          alt=""
          aria-hidden="true"
        />

      )}


      {/* CORONA */}

      {datos.recursos?.corona && (

        <img
          className="entrada-corona"
          src={datos.recursos.corona}
          alt=""
          aria-hidden="true"
        />

      )}


      {/* CONTENIDO */}

      <div className="entrada-contenido">

        <p className="entrada-titulo">
          {datos.portada?.titulo}
        </p>


        <h1 className="entrada-nombre">
          {datos.nombre}
        </h1>


        <p className="entrada-subtitulo">
          {datos.portada?.subtitulo}
        </p>


        <button
          type="button"
          className="btn-abrir-invitacion"
          onClick={abrirInvitacion}
        >
          Abrir invitación
        </button>


        <p className="entrada-frase">
          {datos.portada?.frase}
        </p>

      </div>


      {/* PERSONAJE */}

      {datos.recursos?.personaje && (

        <img
          className="entrada-personaje"
          src={datos.recursos.personaje}
          alt=""
          aria-hidden="true"
        />

      )}


      {/* DECORACIÓN INFERIOR */}

      {datos.recursos?.decoracionInferior && (

        <img
          className="entrada-decoracion-inferior"
          src={datos.recursos.decoracionInferior}
          alt=""
          aria-hidden="true"
        />

      )}

    </section>

  );

}

export default Portada;