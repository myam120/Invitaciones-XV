import "./EventoSencillo.css";

function EventoSencillo({ datos }) {

  const evento = datos.evento || {};


  // =========================================================
  // MAPA
  // =========================================================

  const abrirMapa = (url) => {

    if (!url) return;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (

    <>

      {/* =====================================================
          FECHA ELEGANTE
      ===================================================== */}

      <div className="fecha-evento">

        <div className="fecha-contenido">

          {/* ================================================
              FILA PRINCIPAL
          ================================================= */}

          <div className="fecha-principal">

            {/* DÍA DE LA SEMANA */}

            <span className="fecha-dia-semana">
              {evento.fechaTexto?.diaSemana}
            </span>


            {/* DIVISOR IZQUIERDO */}

            <span className="fecha-divisor"></span>


            {/* DÍA */}

            <span className="fecha-dia">
              {evento.fechaTexto?.dia}
            </span>


            {/* DIVISOR DERECHO */}

            <span className="fecha-divisor"></span>


            {/* MES */}

            <span className="fecha-mes">
              {evento.fechaTexto?.mes}
            </span>

          </div>


          {/* ================================================
              AÑO
          ================================================= */}

          <div className="fecha-anio">
            {evento.fechaTexto?.anio}
          </div>

        </div>

      </div>

      {/* =====================================================
          EVENTOS
      ===================================================== */}

      <div className="eventos-area">

        {evento.ceremonia?.activa && (

          <div className="evento-block">

            <h4 className="evento-titulo">
              {evento.ceremonia.titulo}
            </h4>

            <p className="evento-hora">
              {evento.ceremonia.hora}
            </p>

            <p className="evento-lugar">
              {evento.ceremonia.lugar}
            </p>

            {evento.ceremonia.maps && (

              <button
                type="button"
                className="btn-mapa"
                onClick={() =>
                  abrirMapa(
                    evento.ceremonia.maps
                  )
                }
                aria-label="Ver mapa de la ceremonia"
              >
                Ver Mapa
              </button>

            )}

          </div>

        )}


        {evento.recepcion?.activa && (

          <div className="evento-block">

            <h4 className="evento-titulo">
              {evento.recepcion.titulo}
            </h4>

            <p className="evento-hora">
              {evento.recepcion.hora}
            </p>

            <p className="evento-lugar">
              {evento.recepcion.lugar}
            </p>

            {evento.recepcion.maps && (

              <button
                type="button"
                className="btn-mapa"
                onClick={() =>
                  abrirMapa(
                    evento.recepcion.maps
                  )
                }
                aria-label="Ver mapa de la recepción"
              >
                Ver Mapa
              </button>

            )}

          </div>

        )}

      </div>

    </>

  );

}

export default EventoSencillo;