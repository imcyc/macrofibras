import React, { useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Estructura from './Components/Estructura';
import TipoAcero from './Components/TipoAcero';
import Calcular from './Components/Calcular';
import piso from './images/piso_industrial.jpg';
import capas from './images/capas_compresion.jpg';
import losas from './images/losas_cimentacion.jpg';
import muro from './images/muro_concreto.jpg';
import prefabricados from './images/prefabricados.jpg';
import malla from './images/malla.jpg';
import varilla from './images/varilla.jpg';

import './App.css';

function App() {
  const [ tituloEstructura ] =  useState("¿QUE TIPO DE ESTRUCTURA VA A ELABORAR?");
  const [ valorAcero, setValorAcero ] = useState();
  const [ espesor, setEspesor ] = useState(0);
  const [ resistencia, setResistencia ] = useState();
  
  const secciones = [
    {
      nombre: 'PISO INDUSTRIAL',
      imagen: piso
    },
    {
      nombre: 'CAPAS DE COMPRESIÓN',
      imagen: capas
    },
    {
      nombre: 'LOSAS DE CIMENTACIÓN',
      imagen: losas
    },
    {
      nombre: 'MUROS DE CONCRETO',
      imagen: muro
    },
    {
      nombre: 'ELEMENTOS PREFABRICADOS',
      imagen: prefabricados
    }
  ]

  const tipoAcero = [
    {
      nombre: 'MALLA ELECTROSOLDADA',
      imagen: malla
    },
    {
      nombre: 'VARILLA',
      imagen: varilla
    }
  ]

  const seleccionarEstructura = (e) => {
    e.preventDefault();
  }

  const tipoMalla= (e) => {
    e.preventDefault();
    setValorAcero(e.target.value)
  }

  const calcularDosificacion = (e) => {
    e.preventDefault();
    setEspesor(e.target.espesor.value);
    console.log('espesor ' + espesor);
  }

  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Switch>
              <Route 
                exact 
                path="/" 
                component={(props) => <Home 
                  seleccionarEstructura={seleccionarEstructura}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/seleccionar-estructura" 
                component={(props) => <Estructura
                  tituloEstructura={tituloEstructura}
                  secciones={secciones}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/tipo-de-acero/:tipo" 
                component={(props) => <TipoAcero
                  titulo={"¿QUE TIPO DE ACERO DE REFUERZO QUEREMOS SUSTITUIR?"}
                  tipoAcero={tipoAcero}
                  {...props}
                />}
              />
              <Route 
                exact 
                path="/calcular/:acero/:eltipo" 
                component={(props) => <Calcular
                  tipoMalla={tipoMalla}
                  valorAcero={valorAcero}
                  calcularDosificacion={calcularDosificacion}
                  {...props}
                />}
              />
          </Switch>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
