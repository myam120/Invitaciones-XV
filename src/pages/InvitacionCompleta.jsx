import { useEffect, useRef, useState } from "react";
import "../App.css";

import Portada from "../components/completa/Portada";
import ReproductorMusica from "../components/completa/ReproductorMusica";
import Hero from "../components/completa/Hero";
import Mensaje from "../components/completa/Mensaje";
import Countdown from "../components/completa/Countdown";
import Evento from "../components/completa/Evento";
import Galeria from "../components/completa/Galeria";
import Familia from "../components/completa/Familia";
import Regalos from "../components/completa/Regalos";
import Confirmacion from "../components/completa/Confirmacion";
import Footer from "../components/completa/Footer";


function InvitacionCompleta({ datos }) {

  const [abierta, setAbierta] = useState(false);
  const [musica, setMusica] = useState(false);
  const [tiempo, setTiempo] = useState({});
  const [progresoMusica, setProgresoMusica] = useState(0);

  const audioRef = useRef(null);

  // ===== SEO ===== //

  useEffect(() => {

    if (!datos) return;

    document.title = datos.seo?.titulo || `Mis XV Años | ${datos.nombre}`;

    const actualizarMeta = (nombre, contenido) => {

      let meta = document.querySelector(
        `meta[name="${nombre}"]`
      );

      if (!meta) {

        meta = document.createElement("meta");

        meta.setAttribute("name", nombre);

        document.head.appendChild(meta);

      }

      meta.setAttribute("content", contenido);

    };


    const actualizarOpenGraph = (propiedad, contenido) => {

      let meta = document.querySelector(
        `meta[property="${propiedad}"]`
      );

      if (!meta) {

        meta = document.createElement("meta");

        meta.setAttribute("property", propiedad);

        document.head.appendChild(meta);

      }

      meta.setAttribute("content", contenido);

    };

    const actualizarTwitter = (nombre, contenido) => {

      let meta = document.querySelector(
        `meta[name="${nombre}"]`
      );

      if (!meta) {

        meta = document.createElement("meta");

        meta.setAttribute("name", nombre);

        document.head.appendChild(meta);

      }

      meta.setAttribute("content", contenido);

    };

    const titulo =
      datos.seo?.titulo ||
      `Mis XV Años | ${datos.nombre}`;

    const descripcion =
      datos.seo?.descripcion ||
      `Acompáñame a celebrar mis XV años, ${datos.nombre}.`;

    const imagen =
      datos.seo?.imagen ||
      datos.recursos?.hero;


    // DESCRIPTION

    actualizarMeta(
      "description",
      descripcion
    );

    // TWITTER / X

    actualizarTwitter(
      "twitter:card",
      "summary_large_image"
    );

    actualizarTwitter(
      "twitter:title",
      titulo
    );

    actualizarTwitter(
      "twitter:description",
      descripcion
    );

    actualizarTwitter(
      "twitter:image",
      imagen
    );

    // OPEN GRAPH

    actualizarOpenGraph(
      "og:title",
      titulo
    );

    actualizarOpenGraph(
      "og:description",
      descripcion
    );

    actualizarOpenGraph(
      "og:image",
      imagen
    );

    actualizarOpenGraph(
      "og:image:alt",
      `Invitación de XV años de ${datos.nombre}`
    );

    actualizarOpenGraph(
      "og:type",
      "website"
    );


  }, [datos]);


  // ===== CUENTA REGRESIVA ===== //

  useEffect(() => {

    if (!datos) return;

    const calcularTiempo = () => {

      const ahora = new Date();

      const evento = new Date(
        datos.evento.fecha
      );

      const diferencia = evento - ahora;

      if (diferencia <= 0) {

        setTiempo({
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });

        return;
      }

      const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
      );

      const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
      );

      const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
      );

      const segundos = Math.floor(
        (diferencia / 1000) % 60
      );

      setTiempo({
        dias,
        horas,
        minutos,
        segundos,
      });

    };

    calcularTiempo();

    const intervalo = setInterval(
      calcularTiempo,
      1000
    );

    return () => clearInterval(intervalo);

  }, [datos]);


  // ===== MÚSICA ===== //

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const actualizarProgreso = () => {

      if (audio.duration) {

        const porcentaje =
          (audio.currentTime / audio.duration) * 100;

        setProgresoMusica(porcentaje);

      }

    };

    const cuandoTermina = () => {

      setMusica(false);
      setProgresoMusica(0);

    };

    audio.addEventListener(
      "timeupdate",
      actualizarProgreso
    );

    audio.addEventListener(
      "ended",
      cuandoTermina
    );

    return () => {

      audio.removeEventListener(
        "timeupdate",
        actualizarProgreso
      );

      audio.removeEventListener(
        "ended",
        cuandoTermina
      );

    };

  }, [datos, abierta]);


  // ===== ABRIR INVITACIÓN ===== //

  const abrirInvitacion = () => {

    setAbierta(true);

    if (
      !datos.musica.activa ||
      !datos.musica.autoplay
    ) {
      return;
    }

    setTimeout(() => {

      if (audioRef.current) {

        audioRef.current
          .play()
          .then(() => {

            setMusica(true);

          })
          .catch((error) => {

            console.log(
              "No se pudo reproducir la música:",
              error
            );

          });

      }

    }, 300);

  };


  // ===== CAMBIAR MÚSICA ===== //

  const cambiarMusica = () => {

    if (!datos.musica.activa) return;

    if (!audioRef.current) return;

    if (musica) {

      audioRef.current.pause();

      setMusica(false);

    } else {

      audioRef.current
        .play()
        .then(() => {

          setMusica(true);

        })
        .catch((error) => {

          console.log(
            "No se pudo reproducir:",
            error
          );

        });

    }

  };


  return (

    <div
      className="app"
      style={{

        "--fondo-portada":
          `url("${datos.recursos.fondos.portada}")`,

        "--fondo-countdown":
          `url("${datos.recursos.fondos.countdown}")`,

        "--fondo-familia":
          `url("${datos.recursos.fondos.familia}")`,

        "--color-principal":
          datos.tema.principal,

        "--color-principal-claro":
          datos.tema.principalClaro,

        "--color-oscuro":
          datos.tema.oscuro,

        "--color-acento":
          datos.tema.acento,

        "--color-fondo":
          datos.tema.fondo,

        "--color-texto":
          datos.tema.texto,

        "--color-blanco":
          datos.tema.blanco,

      }}
    >

      {/* ===== PORTADA ===== */}

      {!abierta && (

        <Portada
          datos={datos}
          abrirInvitacion={abrirInvitacion}
        />

      )}


      {/* ===== INVITACIÓN ===== */}

      {abierta && (

        <main className="invitacion">

          {/* MÚSICA */}

          {datos.musica.activa && (

            <ReproductorMusica
              audioRef={audioRef}
              musica={musica}
              progresoMusica={progresoMusica}
              cambiarMusica={cambiarMusica}
              titulo={datos.musica.titulo}
              archivo={datos.musica.archivo}
              loop={datos.musica.loop}
            />

          )}


          {/* HERO */}

          <Hero datos={datos} />


          {/* MENSAJE */}

          <Mensaje datos={datos} />


          {/* CUENTA REGRESIVA */}

          <Countdown
            tiempo={tiempo}
            datos={datos}
          />


          {/* EVENTO */}

          <Evento datos={datos} />


          {/* GALERÍA */}

          <Galeria datos={datos} />


          {/* FAMILIA */}

          <Familia datos={datos} />


          {/* REGALOS */}

          <Regalos datos={datos} />


          {/* CONFIRMACIÓN */}

          <Confirmacion datos={datos} />


          {/* FOOTER */}

          <Footer datos={datos} />

        </main>

      )}

    </div>

  );

}

export default InvitacionCompleta;