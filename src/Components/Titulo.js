import React from 'react';
import {Link} from "react-router-dom";

function Titulo(props) {
  return(
    <div>
      <h1>CALCULADORA DE</h1>
      <h2><Link to="/">MACROFIBRAS DE CONCRETO</Link></h2>
      <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <hr/>
      <h3>{props.tituloEstructura}</h3>
    </div>
  )
}

export default Titulo;