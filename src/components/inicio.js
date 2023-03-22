import React from "react";
import {Styledbutton, Iniciot, Iniciob} from "./button";

export const Inicio = ({start}) => {

  return(
  <div>
    <Iniciot>Bienbenid@, quieres jugar</Iniciot>
    <Iniciob onClick={start}>Iniciar</Iniciob>
  </div>);
};