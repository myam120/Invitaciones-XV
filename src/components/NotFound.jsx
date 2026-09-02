import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">

      <div className="not-found-contenido">

        <span className="not-found-ornamento">
          ✦
        </span>

        <p className="not-found-eyebrow">
          INVITACIÓN DIGITAL
        </p>

        <h1>
          404
        </h1>

        <div className="not-found-linea" />

        <h2>
          Esta invitación no existe
        </h2>

        <p className="not-found-mensaje">
          Parece que el enlace que estás buscando
          no es válido o la invitación ya no está disponible.
        </p>

        <a
          href="/"
          className="not-found-boton"
        >
          VOLVER AL INICIO
        </a>

      </div>

    </main>
  );
}

export default NotFound;