import React from 'react';
import Titulo from './Titulo';
import Seccion from './Seccion';
import './Estructura.css';

function Estructura(props) {
  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.tituloEstructura} />
      <hr/>
      <div className="estructuras">
        {props.secciones.map((seccione, index) => (
          <Seccion key={index} nombre={seccione.nombre} imagen={seccione.imagen} enlace={'/tipo-de-acero'} />
        ))}
      </div>
    </div>
  );
}

export default Estructura;