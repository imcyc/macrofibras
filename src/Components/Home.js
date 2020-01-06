import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home(props) {
  return (
    <div>
      <h1>CALCULADORA DE</h1>
      <h2>MACROFIBRAS DE CONCRETO</h2>
      <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <Link to="/seleccionar-estructura">
        <Button variant="dark" className="mt-3">  
          SELECCIONAR ESTRUCTURA
        </Button>
      </Link>
    </div>
  )
} 

export default Home;