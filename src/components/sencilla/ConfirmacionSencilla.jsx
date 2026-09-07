import "./ConfirmacionSencilla.css";

function ConfirmacionSencilla({ datos }) {

  const cfg = datos.confirmacion || {};


  // =========================================================
  // CONFIRMAR ASISTENCIA
  // =========================================================

  const confirmar = () => {

    if (!cfg.activa) return;

    const texto = encodeURIComponent(
      cfg.mensaje ||
      `Hola, confirmo mi asistencia a los XV años de ${datos.nombre}`
    );

    const tel = cfg.telefono || "";

    const url =
      `https://wa.me/${tel}?text=${texto}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (

    <div className="acciones">

      {cfg.activa && (

        <button
          type="button"
          className="btn-confirmar"
          onClick={confirmar}
        >

          {cfg.textoBoton ||
            "Confirmar Asistencia"}

        </button>

      )}


      <p className="frase-final">
        {datos.portada?.frase}
      </p>

    </div>

  );

}

export default ConfirmacionSencilla;