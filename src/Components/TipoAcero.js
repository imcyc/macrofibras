import React from 'react';
import Titulo from './Titulo';
import Seccion from './Seccion';

function TipoAcero(props) {
  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.titulo} />
      <hr/>
      <div className="estructuras">
        {props.tipoAcero.map((acero, index) => (
          <Seccion key={index} nombre={acero.nombre} imagen={acero.imagen} />
        ))}
      </div>
    </div>
  );
}

export default TipoAcero;