import React, { useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Estructura from './Components/Estructura';
import TipoAcero from './Components/TipoAcero';
import piso from './images/piso_industrial.jpg';
import capas from './images/capas_compresion.jpg';
import losas from './images/losas_cimentacion.jpg';
import muro from './images/muro_concreto.jpg';
import prefabricados from './images/prefabricados.jpg';

import './App.css';

function App() {
  const [ tituloEstructura, useTituloEstructura ] =  useState("¿QUE TIPO DE ESTRUCTURA VA A ELABORAR?");
  
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

  const seleccionarEstructura = (e) => {
    e.preventDefault();
    console.log("hola");
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
                path="/tipo-de-acero" 
                component={(props) => <TipoAcero
                  titulo={"El acero"}
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
