// Datos de Valeria
const yoana = {
  // IDENTIFICACIÓN
  slug: "yoana",
  nombre: "Yoana Hernández López",

  // =========================================================
  // TEMA
  // =========================================================
  // Rosa elegante para combinar con un vestido rosa
  // =========================================================
  tema: {
    principal: "#d9a7b5",      // rosa empolvado
    acento: "#b98a5a",         // dorado suave
    oscuro: "#422d35",         // vino/rosa oscuro
    oscuroClaro: "#673d59",    // vino suave
    claro: "#f9eef2",          // rosa muy claro
    blanco: "#ffffff",
  },

  // =========================================================
  // PORTADA / TEXTOS
  // =========================================================

  portada: {
    titulo: "Mis XV Años",

    subtitulo:
      "Te invito a celebrar conmigo este momento tan especial",

    frase:
      "¡Será una noche inolvidable!",
  },

  // =========================================================
  // FAMILIA
  // =========================================================

  familia: {

    padres: {
      activa: true,
      titulo: "Mis Padres",
      madre: "Laura López García",
      padre: "Miguel Hernández Pérez",
    },

    padrinos: {
      activa: true,
      titulo: "Mis Padrinos",
      madrina: "Ana García Torres",
      padrino: "Carlos Pérez Martínez",
    },

  },

  // =========================================================
  // EVENTO
  // =========================================================

  evento: {

    fecha: "2026-11-21",

    fechaTexto: {
      diaSemana: "Sábado",
      dia: "21",
      mes: "Noviembre",
      anio: "2026",
    },

    ceremonia: {
      activa: true,
      titulo: "Ceremonia Religiosa",
      hora: "17:00 Hrs",
      lugar: "Parroquia de San José",
      maps: "https://maps.app.goo.gl/",
    },

    recepcion: {
      activa: true,
      titulo: "Recepción",
      hora: "19:00 Hrs",
      lugar: "Salón de Eventos Villa Real",
      maps: "https://maps.app.goo.gl/",
    },

  },

  // =========================================================
  // CONFIRMACIÓN
  // =========================================================

  confirmacion: {

    activa: true,

    telefono: "529999999999",

    mensaje:
      "Hola, quiero confirmar mi asistencia a los XV años de Valeria.",

    textoBoton:
      "Confirmar Asistencia",

  },

  // =========================================================
  // MÚSICA
  // =========================================================

  musica: {

    activa: true,

    archivo:
      "/music/sencillas/yoana.mp3",

    titulo:
      "Mis XV Años",

    autoplay: true,

    loop: true,

  },

  recursos: {

    fondo: "/images/sencillas/yoana/fondo.jpg",
    personaje: "/images/sencillas/yoana/personaje.png",
    corona: "/images/sencillas/yoana/corona.png",

  },
};

export default yoana;