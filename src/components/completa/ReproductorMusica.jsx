import "./ReproductorMusica.css";

function ReproductorMusica({
  audioRef,
  musica,
  progresoMusica,
  cambiarMusica,
  titulo,
  archivo,
  loop,
}) {
  return (
    <>
      {/* AUDIO */}

      <audio
        ref={audioRef}
        src={archivo}
        loop={loop}
      />

      {/* REPRODUCTOR */}

      <div className={`reproductor-musica ${musica ? "activo" : "" }`}>

        <div className="musica-info">

          <div className="vinilo">
            <span>♫</span>
          </div>

          <div className="musica-texto">

            <span className="musica-label">
              MÚSICA
            </span>

            <strong>
              {titulo}
            </strong>

            <div className="ondas">

              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>

            </div>

          </div>

        </div>

        <button
          className="boton-musica"
          onClick={cambiarMusica}
          aria-label={
            musica
              ? "Pausar música"
              : "Reproducir música"
          }
        >
          {musica ? "Ⅱ" : "▶"}
        </button>

        <div
          className="progreso-musica"
          style={{
            width: `${progresoMusica}%`,
          }}
        />

      </div>
    </>
  );
}

export default ReproductorMusica;