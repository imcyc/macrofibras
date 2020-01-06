import React, { useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Estructura from './Components/Estructura';

import './App.css';

function App() {
  const [ tituloEstructura, useTituloEstructura ] =  useState("¿QUE TIPO DE ESTRUCTURA VA A ELABORAR?");

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
