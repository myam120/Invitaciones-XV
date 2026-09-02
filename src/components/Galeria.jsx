import { useEffect, useState } from "react";
import "./Galeria.css";
import Animacion from "./Animacion";

function Galeria({ datos }) {

  const [fotoActiva, setFotoActiva] = useState(null);


  // =================================
  // ABRIR FOTO
  // =================================

  const abrirFoto = (index) => {
    setFotoActiva(index);
  };


  // =================================
  // CERRAR FOTO
  // =================================

  const cerrarFoto = () => {
    setFotoActiva(null);
  };


  // =================================
  // FOTO ANTERIOR
  // =================================

  const fotoAnterior = (e) => {

    e.stopPropagation();

    setFotoActiva((actual) => {

      if (actual === 0) {
        return datos.recursos.fotos.length - 1;
      }

      return actual - 1;

    });

  };


  // =================================
  // FOTO SIGUIENTE
  // =================================

  const fotoSiguiente = (e) => {

    e.stopPropagation();

    setFotoActiva((actual) => {

      if (actual === datos.recursos.fotos.length - 1) {
        return 0;
      }

      return actual + 1;

    });

  };


  // =================================
  // TECLA ESC
  // =================================

  useEffect(() => {

    const manejarTecla = (e) => {

      if (fotoActiva === null) return;

      if (e.key === "Escape") {
        cerrarFoto();
      }

      if (e.key === "ArrowLeft") {
        fotoAnterior(e);
      }

      if (e.key === "ArrowRight") {
        fotoSiguiente(e);
      }

    };


    window.addEventListener(
      "keydown",
      manejarTecla
    );


    return () => {

      window.removeEventListener(
        "keydown",
        manejarTecla
      );

    };

  }, [fotoActiva]);


  // =================================
  // BLOQUEAR SCROLL
  // =================================

  useEffect(() => {

    if (fotoActiva !== null) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }


    return () => {

      document.body.style.overflow = "";

    };

  }, [fotoActiva]);


  return (
    <section className="seccion galeria">

      {/* =================================
          ENCABEZADO
      ================================= */}

      <Animacion
        tipo="fade-up"
        duracion={800}
      >
        <p className="eyebrow">
          {datos.textos.galeria.etiqueta}
        </p>
      </Animacion>


      <Animacion
        tipo="fade-up"
        retraso={100}
        duracion={1000}
        distancia={25}
      >
        <h2>
          {datos.textos.galeria.titulo}
        </h2>
      </Animacion>


      {/* =================================
          GALERÍA
      ================================= */}

      <div className="grid-fotos">

        {datos.recursos.fotos.map((foto, index) => (

          <Animacion
            key={index}
            tipo="zoom"
            retraso={index * 100}
            duracion={900}
          >

            <button
              className="foto-item"
              onClick={() => abrirFoto(index)}
              aria-label={`Ver foto ${index + 1}`}
            >

              <img
                src={foto}
                alt={`${datos.nombre} - Foto ${index + 1}`}
              />

              <span className="foto-overlay">
                +
              </span>

            </button>

          </Animacion>

        ))}

      </div>


      {/* =================================
          LIGHTBOX
      ================================= */}

      {fotoActiva !== null && (

        <div
          className="lightbox"
          onClick={cerrarFoto}
          role="dialog"
          aria-modal="true"
          aria-label="Galería de fotografías"
        >

          {/* CERRAR */}

          <button
            className="lightbox-cerrar"
            onClick={cerrarFoto}
            aria-label="Cerrar galería"
          >
            ×
          </button>


          {/* ANTERIOR */}

          <button
            className="lightbox-anterior"
            onClick={fotoAnterior}
            aria-label="Fotografía anterior"
          >
            ‹
          </button>


          {/* IMAGEN */}

          <div
            className="lightbox-imagen-contenedor"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={datos.recursos.fotos[fotoActiva]}
              alt={`${datos.nombre} - Foto ${fotoActiva + 1}`}
              className="lightbox-imagen"
            />

            <span className="lightbox-contador">
              {fotoActiva + 1} / {datos.recursos.fotos.length}
            </span>

          </div>


          {/* SIGUIENTE */}

          <button
            className="lightbox-siguiente"
            onClick={fotoSiguiente}
            aria-label="Fotografía siguiente"
          >
            ›
          </button>

        </div>

      )}

    </section>
  );
}

export default Galeria;