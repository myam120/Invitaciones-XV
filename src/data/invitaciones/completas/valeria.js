const valeria = {

  // IDENTIFICACIÓN
  slug: "valeria",
  nombre: "Valeria",
  fecha: "26 de septiembre de 2026",

  // SEO  
  seo: {
    titulo: "Mis XV años | Valeria",
    descripcion:
      "Acompáñame a celebrar mis XV años en una noche mágica llena de alegría y recuerdos inolvidables.",
    imagen: "/images/valeria/hero.jpg",
  },

  // DISEÑO
  tema: {
    principal: "#6f8fa8",
    principalClaro: "#e8f0f5",
    oscuro: "#294354",
    acento: "#b99a68",
    fondo: "#f8f6f1",
    texto: "#294354",
    blanco: "#ffffff",
  },

  // TEXTOS
  textos: {

    portada: {
      etiqueta: "MIS XV AÑOS",
      frase: "Una noche para recordar",
      boton: "ABRIR INVITACIÓN",
    },

    hero: {
      etiqueta: "MIS XV AÑOS",
      mensaje: "Con mucha ilusión quiero compartir contigo una noche muy especial.",
    },

    mensaje: {
      etiqueta: "UN MOMENTO ESPECIAL",
      titulo: "Quiero compartirlo contigo",
      firma: "Con cariño,",
    },

    countdown: {
      etiqueta: "FALTA MUY POCO",
      titulo: "La gran noche",
      dias: "DÍAS",
      horas: "HORAS",
      minutos: "MIN",
      segundos: "SEG",
    },

    evento: {
      etiqueta: "RESERVA LA FECHA",
      titulo: "El evento",
      fecha: "Fecha",
      hora: "Hora",
      lugar: "Lugar",
      botonMaps: "Google Maps",
    },

    galeria: {
      etiqueta: "MOMENTOS",
      titulo: "Un poquito de mí",
    },

    familia: {
      etiqueta: "CON AMOR",
      padres: "Mis padres",
      padrinos: "Mis padrinos",
      textoPadres: "Con amor de mis padres",
      textoPadrinos: "Con cariño de mis padrinos",
    },

    regalos: {
      etiqueta: "UN DETALLE ESPECIAL",
      titulo: "Mesa de regalos",
      descripcion: "Tu presencia es mi mejor regalo, pero si deseas tener un detalle conmigo, aquí puedes encontrar mi mesa de regalos.",
      boton: "VER MESA DE REGALOS",
    },

    confirmacion: {
      etiqueta: "SERÍA UN HONOR",
      titulo: "¿Nos acompañas?",
      descripcion: "Confirma tu asistencia para celebrar juntos esta noche tan especial.",
      boton: "CONFIRMAR POR WHATSAPP",
    },

    footer: {
      etiqueta: "MIS XV AÑOS",  
      mensaje: "Gracias por acompañarme en este momento tan especial.",
    },

  },
  
  // EVENTO
  evento: {
    fecha: "2026-09-26T20:00:00",
    hora: "8:00 PM",
    lugar: "Salón De Eventos Sociales Villa Fernanda",
    direccion: "Mérida, Yucatán",
  },

  // MENSAJE
  mensaje:
    "Quiero compartir contigo una noche llena de alegría, ilusión y momentos que quedarán para siempre en mi corazón.",

  // FAMILIA
  padres: {
    madre: "Ana López",
    padre: "Miguel García",
  },

  padrinos: {
    madrina: "Carolina Pérez",
    padrino: "Juan Hernández",
  },

  // ENLACES
  enlaces: {

    maps: {
      activa: true,
      texto: "Ver en Google Maps",
      url: "https://maps.app.goo.gl/zHLufHUiyFoS5rjg8",
    },

    regalos: {
      activa: false,
      url: "",
    },
    
    confirmacion: {

      activa: true,

      telefono: "529999999999",

      mensaje:
        "Hola, quiero confirmar mi asistencia a los XV años de Valeria.",

    },
  },

  // MULTIMEDIA
  recursos: {

    fondos: {
      portada: "/images/valeria/portada.jpg",
      countdown: "/images/valeria/countdown.jpg",
      familia: "/images/valeria/familia.jpg",
    },

    hero: "/images/valeria/hero.jpg",

    fotos: [
      "/invitaciones/valeria/foto1.jpg",
      "/invitaciones/valeria/foto2.jpg",
      "/invitaciones/valeria/foto3.jpg",
      "/invitaciones/valeria/foto4.jpg",
      "/invitaciones/valeria/foto5.jpg",
      "/invitaciones/valeria/foto6.jpg",
      "/invitaciones/valeria/foto7.jpg",
      "/invitaciones/valeria/foto8.jpg",
    ],
  },

  musica: {
    activa: true,
    archivo: "/music/valeria.mp3",
    titulo: "Mis XV Años",
    autoplay: true,
    loop: true,
  },
};

export default valeria;