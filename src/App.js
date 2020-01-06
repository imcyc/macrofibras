import React from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {

  const seleccionarEstructura = (e) => {
    e.preventDefault();
    console.log("hola");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CALCULADORA DE</h1>
        <h2>MACROFIBRAS DE CONCRETO</h2>
        <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <Button variant="dark" className="mt-3" onClick={seleccionarEstructura}>  
          SELECCIONAR ESTRUCTURA
        </Button>
      </header>
    </div>
  );
}

export default App;
