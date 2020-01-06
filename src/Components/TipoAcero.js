import React from 'react';
import Titulo from './Titulo';

function TipoAcero(props) {
  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.titulo} />
    </div>
  );
}

export default TipoAcero;