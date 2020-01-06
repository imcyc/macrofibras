import React from 'react';
import Titulo from './Titulo';
import Image from 'react-bootstrap/Image'
import './Estructura.css';
import piso from '../images/piso_industrial.jpg';
import capas from '../images/capas_compresion.jpg';
import losas from '../images/losas_cimentacion.jpg';
import muro from '../images/muro_concreto.jpg';
import prefabricados from '../images/prefabricados.jpg';

function Estructura(props) {
  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.tituloEstructura} />
      <hr/>
      <div className="estructuras">
        <div className="secciones">
          <Image src={piso} alt="Logo" roundedCircle fluid/>
          <h2>PISO INDUSTRIAL</h2>
        </div>
        <div className="secciones">
          <Image src={capas} alt="Logo" roundedCircle fluid/>
          <h2>CAPAS DE COMPRESIÓN</h2>
        </div>
        <div className="secciones">
          <Image src={losas} alt="Logo" roundedCircle fluid/>
          <h2>LOSAS DE CIMENTACIÓN</h2>
        </div>
        <div className="secciones">
          <Image src={muro} alt="Logo" roundedCircle fluid/>
          <h2>MUROS DE CONCRETO</h2>
        </div>
        <div className="secciones">
          <Image src={prefabricados} alt="Logo" roundedCircle fluid/>
          <h2>ELEMENTOS PREFABRICADOS</h2>
        </div>
      </div>
    </div>
  );
}

export default Estructura;