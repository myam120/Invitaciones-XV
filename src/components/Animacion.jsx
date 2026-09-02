import { useEffect, useRef, useState } from "react";
import "./Animacion.css";

function Animacion({
  children,
  tipo = "fade-up",
  retraso = 0,
  duracion = 800,
  distancia = 40,
}) {

  const elementoRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const elemento = elementoRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {

        if (entrada.isIntersecting) {

          setVisible(true);

          observer.unobserve(elemento);

        }

      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(elemento);

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <div
      ref={elementoRef}
      className={`animacion animacion-${tipo} ${
        visible ? "animacion-visible" : ""
      }`}
      style={{
        "--retraso": `${retraso}ms`,
        "--duracion": `${duracion}ms`,
        "--distancia": `${distancia}px`,
      }}
    >
      {children}
    </div>
  );
}

export default Animacion;