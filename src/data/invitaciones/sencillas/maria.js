// Datos de Maria
const maria = {

  // =========================================================
  // IDENTIFICACIÓN
  // =========================================================

  slug: "maria",
  nombre: "Maria Hernández López",


  // =========================================================
  // TEMA
  // =========================================================
  tema: {

    principal: "#6f8fb8",      // azul elegante
    acento: "#b99a5a",         // dorado suave
    oscuro: "#263852",         // azul noche
    oscuroClaro: "#405a7a",    // azul medio oscuro
    claro: "#eef4fa",          // azul muy claro
    blanco: "#ffffff",

  },


  // =========================================================
  // PORTADA / TEXTOS
  // =========================================================

  portada: {

    titulo: "Mis XV Años",
    subtitulo: "Te invito a celebrar conmigo este momento tan especial",
    frase: "¡Será una noche inolvidable!",
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
    fecha: "2026-12-12",
    fechaTexto: {
      diaSemana: "Sábado",
      dia: "12",
      mes: "Diciembre",
      anio: "2026",
    },

    ceremonia: {
      activa: true,
      titulo: "Ceremonia Religiosa",
      hora: "17:00 Hrs",
      lugar: "Parroquia de San Sebastián",
      maps: "https://maps.app.goo.gl/YrSq4ui5NULjGMdU7",
    },


    recepcion: {
      activa: true,
      titulo: "Recepción",
      hora: "19:00 Hrs",
      lugar: "Salón De Eventos Sociales Villa Fernanda Mérida",
      maps: "https://maps.app.goo.gl/zHLufHUiyFoS5rjg8",
    },
  },


  // =========================================================
  // CONFIRMACIÓN
  // =========================================================

  confirmacion: {
    activa: true,
    telefono: "529999999999",
    mensaje: "Hola, quiero confirmar mi asistencia a los XV años de Maria.",
    textoBoton: "Confirmar Asistencia",
  },

  // =========================================================
  // MÚSICA
  // =========================================================

  musica: {
    activa: true,
    archivo: "/music/sencillas/maria.mp3",
    titulo: "Mis XV Años",
    autoplay: true,
    loop: true,
  },

  // =========================================================
  // RECURSOS
  // =========================================================

  recursos: {
    fondo: "/images/sencillas/maria/fondo.jpg",
    personaje: "/images/sencillas/maria/personaje.png",
    corona: "/images/sencillas/maria/corona.png",
  },
};

export default maria;