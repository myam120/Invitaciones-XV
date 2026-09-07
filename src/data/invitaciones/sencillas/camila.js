// Datos de Camila
const camila = {
  // IDENTIFICACIÓN
  slug: "camila",
  nombre: "Camila Lozano Vargas",

  // TEMA (colores reutilizables)
  tema: {
    principal: "#a9bd72", // verde suave
    acento: "#b89a5a",    // dorado suave
    oscuro: "#1f2419",
    oscuroClaro: "#576a43",
    claro: "#f5f7ec",
    blanco: "#ffffff",
  },

  // PORTADA / TEXTOS
  portada: {
    titulo: "Mis XV Años",
    subtitulo: "Te invitamos a la celebración en honor a mis XV años",
    frase: "¡No faltes!",
  },

  // FAMILIA
  familia: {
    padres: {
      activa: true,
      titulo: "Mis Padres",
      madre: "Karla Vargas Torres",
      padre: "Luis Lozano Martínez",
    },
    padrinos: {
      activa: true,
      titulo: "Mis Padrinos",
      madrina: "Irma Torres Solís",
      padrino: "José Limón Hernández",
    },
  },

  // EVENTO
  evento: {
    fecha: "2026-10-10",

    fechaTexto: {
      diaSemana: "Sábado",
      dia: "10",
      mes: "Octubre",
      anio: "2026",
    },

    ceremonia: {
      activa: true,
      titulo: "Ceremonia Religiosa",
      hora: "17:00 Hrs",
      lugar: "Iglesia de Santa Lucía",
      maps: "https://maps.app.goo.gl/9FzsT7NCSPPcx24e8", // reemplaza por la tuya
    },

    recepcion: {
      activa: true,
      titulo: "Recepción",
      hora: "18:00 Hrs",
      lugar: "Salón De Eventos Sociales Villa Fernanda Mérida",
      maps: "https://maps.app.goo.gl/zHLufHUiyFoS5rjg8", // reemplaza por la tuya
    },
  },

  // CONFIRMACIÓN
  confirmacion: {
    activa: true,
    telefono: "529999999999",
    mensaje: "Hola, quiero confirmar mi asistencia a los XV años de Camila.",
    textoBoton: "Confirmar Asistencia",
  },

  // MÚSICA (opcional, se mantiene por compatibilidad)
  musica: {
    activa: true,
    archivo: "/music/sencillas/camila.mp3",
    titulo: "Mis XV Años",
    autoplay: true,
    loop: true,
  },

  // RECURSOS (coloca los archivos en public/images/sencillas/)
  recursos: {
    fondo: "/images/sencillas/camila/fondo.jpg",
    personaje: "/images/sencillas/camila/personaje.png",
    corona: "/images/sencillas/camila/corona.png",

    // DECORACIONES OPCIONALES
    decoracionSuperior: "/images/sencillas/camila/decoracion-superior.png",
    decoracionInferior: "/images/sencillas/camila/decoracion-inferior.png",
  },
};

export default camila;