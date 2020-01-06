import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Estructura from './Components/Estructura';

import './App.css';

function App() {

  const seleccionarEstructura = (e) => {
    e.preventDefault();
    console.log("hola");
  }

  return (
    <div className="App">
      <header className="App-header">
        <HashRouter basename={process.env.PUBLIC_URL}>
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
