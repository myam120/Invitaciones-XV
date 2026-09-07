import { useEffect, useRef, useState } from "react";
import "./MusicaSencilla.css";

function MusicaSencilla({
  datos,
  abierta,
}) {

  const musica = datos.musica || {};

  const audioRef = useRef(null);

  const [reproduciendo, setReproduciendo] =
    useState(false);

  const [progreso, setProgreso] =
    useState(0);


  // =========================================================
  // ACTUALIZAR PROGRESO
  // =========================================================

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;


    const actualizar = () => {

      if (!audio.duration) return;

      setProgreso(
        (audio.currentTime /
          audio.duration) * 100
      );

    };


    const cuandoTermina = () => {

      if (!musica.loop) {

        setReproduciendo(false);

        setProgreso(0);

      }

    };


    audio.addEventListener(
      "timeupdate",
      actualizar
    );

    audio.addEventListener(
      "ended",
      cuandoTermina
    );


    return () => {

      audio.removeEventListener(
        "timeupdate",
        actualizar
      );

      audio.removeEventListener(
        "ended",
        cuandoTermina
      );

    };

  }, [musica.loop]);


  // =========================================================
  // AUTOPLAY
  // =========================================================

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    if (!abierta) return;

    if (!musica.activa) return;

    if (!musica.autoplay) return;


    const reproducir = async () => {

      try {

        await audio.play();

        setReproduciendo(true);

      } catch (error) {

        console.log(
          "No se pudo reproducir automáticamente:",
          error
        );

      }

    };


    reproducir();

  }, [
    abierta,
    musica.activa,
    musica.autoplay
  ]);


  // =========================================================
  // REPRODUCIR / PAUSAR
  // =========================================================

  const cambiarMusica = async () => {

    const audio = audioRef.current;

    if (!audio) return;

    if (!musica.activa) return;


    if (audio.paused) {

      try {

        await audio.play();

        setReproduciendo(true);

      } catch (error) {

        console.log(
          "No se pudo reproducir:",
          error
        );

      }

    } else {

      audio.pause();

      setReproduciendo(false);

    }

  };


  // =========================================================
  // SI ESTÁ DESACTIVADA
  // =========================================================

  if (!musica.activa) {
    return null;
  }


  return (

    <>

      <audio
        ref={audioRef}
        src={musica.archivo}
        loop={musica.loop}
        preload="metadata"
      />


      {abierta && (

        <div
          className={`reproductor-musica-sencilla ${
            reproduciendo
              ? "activo"
              : ""
          }`}
        >

          {/* INFORMACIÓN */}

          <div className="musica-info-sencilla">


            {/* VINILO */}

            <div className="vinilo-sencillo">

              <span>
                ♫
              </span>

            </div>


            {/* TEXTO */}

            <div className="musica-texto-sencillo">

              <span className="musica-label-sencilla">
                MÚSICA
              </span>


              <strong>
                {musica.titulo ||
                  "Mis XV Años"}
              </strong>


              {/* ONDAS */}

              <div className="ondas-sencillas">

                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>

              </div>

            </div>

          </div>


          {/* BOTÓN */}

          <button
            type="button"
            className="boton-musica-sencilla"
            onClick={cambiarMusica}
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
          >

            {reproduciendo
              ? "Ⅱ"
              : "▶"}

          </button>


          {/* PROGRESO */}

          <div
            className="progreso-musica-sencilla"
            style={{
              width: `${progreso}%`,
            }}
          />

        </div>

      )}

    </>

  );

}

export default MusicaSencilla;