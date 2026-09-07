import { useEffect, useState } from "react";
import Portada from "../components/sencilla/Portada";
import PortadaSencilla from "../components/sencilla/PortadaSencilla";
import MusicaSencilla from "../components/sencilla/MusicaSencilla";

function InvitacionSencilla({ datos }) {

  const [abierta, setAbierta] =
    useState(false);


  // =========================================================
  // SEO
  // =========================================================

  useEffect(() => {

    if (!datos) return;

    document.title =
      datos.seo?.titulo ||
      `Mis XV Años | ${datos.nombre}`;

  }, [datos]);


  // =========================================================
  // ABRIR INVITACIÓN
  // =========================================================

  const abrirInvitacion = () => {

    setAbierta(true);

  };


  return (

    <div
      className="invitacion-sencilla"
      style={{

        "--sencilla-principal":
          datos.tema.principal,

        "--sencilla-acento":
          datos.tema.acento,

        "--sencilla-oscuro":
          datos.tema.oscuro,

        "--sencilla-claro":
          datos.tema.claro,

        "--sencilla-blanco":
          datos.tema.blanco,

        "--sencilla-oscuroClaro":
          datos.tema.oscuroClaro,

      }}
    >


      {/* =====================================================
          PORTADA DE ENTRADA
      ===================================================== */}

      {!abierta && (

        <Portada
          datos={datos}
          abrirInvitacion={abrirInvitacion}
        />

      )}


      {/* =====================================================
          INVITACIÓN
      ===================================================== */}

      {abierta && (

        <>

          <PortadaSencilla
            datos={datos}
          />


          <MusicaSencilla
            datos={datos}
            abierta={abierta}
          />

        </>

      )}

    </div>

  );

}

export default InvitacionSencilla;