import "./FamiliaSencilla.css";

function FamiliaSencilla({ datos }) {

  return (

    <div
      className="familia-portada"
      role="list"
    >

      {datos.familia?.padres?.activa && (

        <div
          role="listitem"
          className="familia-col"
        >

          <h3>
            {datos.familia.padres.titulo}
          </h3>

          <p className="miembros">
            {datos.familia.padres.madre}
          </p>

          <span className="and">
            &amp;
          </span>

          <p className="miembros">
            {datos.familia.padres.padre}
          </p>

        </div>

      )}


      {datos.familia?.padrinos?.activa && (

        <div
          role="listitem"
          className="familia-col"
        >

          <h3>
            {datos.familia.padrinos.titulo}
          </h3>

          <p className="miembros">
            {datos.familia.padrinos.madrina}
          </p>

          <span className="and">
            &amp;
          </span>

          <p className="miembros">
            {datos.familia.padrinos.padrino}
          </p>

        </div>

      )}

    </div>

  );

}

export default FamiliaSencilla;