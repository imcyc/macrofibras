import React from 'react';
import Titulo from './Titulo';
import SeccionAcero from './SeccionAcero';

function TipoAcero(props) {
  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.titulo} />
      <h2 style={{color: '#ea8823'}}>{props.match.params.tipo}</h2>
      <hr/>
      <div className="estructuras">
        {props.tipoAcero.map((acero, index) => (
          <SeccionAcero 
            key={index} 
            nombre={acero.nombre} 
            imagen={acero.imagen} 
            enlace={'/calcular'} 
            eltipo={props.match.params.tipo} 
          />
        ))}
      </div>
    </div>
  );
}

export default TipoAcero;