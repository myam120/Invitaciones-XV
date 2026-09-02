import "./Portada.css";

function Portada({ datos, abrirInvitacion }) {
  return (
    <section className="portada">

      <div className="portada-overlay" />

      <div className="particulas">
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
      </div>

      <div className="portada-contenido">

        <p className="mini-titulo">
          {datos.textos.portada.etiqueta}
        </p>

        <div className="ornamento">
          ✦
        </div>

        <h1>
          {datos.nombre}
        </h1>

        <p className="fecha-portada">
          {datos.fecha}
        </p>

        <div className="linea-dorada" />

        <p className="frase-portada">
          {datos.textos.portada.frase}
        </p>

        <button
          className="boton-entrada"
          onClick={abrirInvitacion}
        >
          <span>
            {datos.textos.portada.boton}
          </span>

          <span className="flecha">
            ↓
          </span>
        </button>

      </div>

    </section>
  );
}

export default Portada;