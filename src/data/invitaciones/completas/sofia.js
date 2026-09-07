const sofia = {
    
  // IDENTIFICACIÓN
  slug: "sofia",
  nombre: "Sofía",
  fecha: "24 de octubre de 2026",

  // SEO
  seo: {
    titulo: "Mis XV años | Sofía",
    descripcion:
      "Acompáñame a celebrar mis XV años en una noche mágica llena de alegría y recuerdos inolvidables.",
    imagen: "/images/sofia/hero.jpg",
  },

  // DISEÑO
  tema: {
    principal: "#b8899e",
    principalClaro: "#f6e9ee",
    oscuro: "#432b37",
    acento: "#b99a68",
    fondo: "#fcf8f5",
    texto: "#432b37",
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
    fecha: "2026-10-24T19:00:00",
    hora: "7:00 PM",
    lugar: "Salón De Eventos Sociales Villa Fernanda",
    direccion: "Mérida, Yucatán",
  },

  // MENSAJE
  mensaje:
    "Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que amamos los convierte en momentos inolvidables.",
  
    // FAMILIA
  padres: {
    madre: "María Flores",
    padre: "Carlos Hernández",
  },

  padrinos: {
    madrina: "Laura Nah",
    padrino: "José Pérez",
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
      url: "https://www.amazon.com/",
    },

    confirmacion: {
      activa: true,
      telefono: "529999999999",
      mensaje:
        "Hola, quiero confirmar mi asistencia a los XV años de Sofía.",
    },
  },
  // MULTIMEDIA
  recursos: {
    fondos: {
    portada: "/images/sofia/portada.jpg",
    countdown: "/images/sofia/countdown.jpg",
    familia: "/images/sofia/familia.jpg",
    },

    hero: "/images/sofia/hero.jpg",

    fotos: [
      "/invitaciones/sofia/foto1.jpg",
      "/invitaciones/sofia/foto2.jpg",
      "/invitaciones/sofia/foto3.jpg",
      "/invitaciones/sofia/foto4.jpg",
    ],
  },

  musica: {
    activa: true,
    archivo: "/music/sofia.mp3",
    titulo: "Mis XV Años",
    autoplay: true,
    loop: true,
  },
};

export default sofia;