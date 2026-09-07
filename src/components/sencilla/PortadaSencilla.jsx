import FamiliaSencilla from "./FamiliaSencilla";
import EventoSencillo from "./EventoSencillo";
import ConfirmacionSencilla from "./ConfirmacionSencilla";

import "./PortadaSencilla.css";


function PortadaSencilla({ datos }) {

  return (

    <section
      className="portada-sencilla"
      style={{

        "--sencilla-fondo": `url("${datos.recursos?.fondo || ""}")`,
        "--sencilla-principal": datos.tema?.principal || "#a9bd72",
        "--sencilla-acento": datos.tema?.acento || "#b89a5a",
        "--sencilla-oscuro": datos.tema?.oscuro || "#1f2419",
        "--sencilla-oscuroClaro": datos.tema?.oscuroClaro || "#3b482e",
      }}

      aria-label={ `Invitación de ${datos.nombre}`} >


      {/* =====================================================
          DECORACIÓN SUPERIOR
      ===================================================== */}

      {datos.recursos?.decoracionSuperior && (

        <img
          className="decoracion-superior"
          src={
            datos.recursos.decoracionSuperior
          }
          alt="" aria-hidden="true"
        />
      )}


      {/* =====================================================
          CORONA
      ===================================================== */}

      {datos.recursos?.corona && (

        <img
          className="corona"
          src={datos.recursos.corona}
          alt="Corona decorativa"
        />

      )}


      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="portada-contenido">

        {/* =================================================
            TÍTULO
        ================================================= */}

        <h1 className="titulo-xxl">
          {datos.portada?.titulo}
        </h1>


        {/* =================================================
            NOMBRE
        ================================================= */}

        <h2 className="nombre">
          {datos.nombre}
        </h2>


        {/* =================================================
            SUBTÍTULO
        ================================================= */}

        <p className="subtitulo">
          {datos.portada?.subtitulo}
        </p>


        {/* =================================================
            FAMILIA
        ================================================= */}

        <FamiliaSencilla
          datos={datos}
        />


        {/* =================================================
            EVENTO
        ================================================= */}

        <EventoSencillo
          datos={datos}
        />


        {/* =================================================
            CONFIRMACIÓN
        ================================================= */}

        <ConfirmacionSencilla
          datos={datos}
        />
      </div>


      {/* =====================================================
          PERSONAJE
      ===================================================== */}

      {datos.recursos?.personaje && (

        <img
          className="personaje"
          src={datos.recursos.personaje}
          alt=""
          aria-hidden="true"
        />
      )}


      {/* =====================================================
          DECORACIÓN INFERIOR
      ===================================================== */}

      {datos.recursos?.decoracionInferior && (

        <img
          className="decoracion-inferior"
          src={
            datos.recursos.decoracionInferior
          }
          alt=""
          aria-hidden="true"
        />
      )}

    </section>

  );

}

export default PortadaSencilla;