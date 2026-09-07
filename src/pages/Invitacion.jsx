import { useParams } from "react-router-dom";

import invitacionesCompletas
  from "../data/invitaciones/completas";

import invitacionesSencillas
  from "../data/invitaciones/sencillas";

import InvitacionCompleta from "./InvitacionCompleta";
import InvitacionSencilla from "./InvitacionSencilla";

import NotFound from "../components/completa/NotFound";


function Invitacion() {

  const { slug } = useParams();


  // Buscar primero en completas
  const datosCompletos =
    invitacionesCompletas[slug];


  // Buscar después en sencillas
  const datosSencillos =
    invitacionesSencillas[slug];


  // INVITACIÓN COMPLETA

  if (datosCompletos) {

    return (
      <InvitacionCompleta
        datos={datosCompletos}
      />
    );

  }


  // INVITACIÓN SENCILLA

  if (datosSencillos) {

    return (
      <InvitacionSencilla
        datos={datosSencillos}
      />
    );

  }


  // NO EXISTE

  return <NotFound />;

}

export default Invitacion;