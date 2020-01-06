import React from 'react';
import Titulo from './Titulo';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home(props) {
  return (
    <div>
      <Titulo />
      <Link to="/seleccionar-estructura">
        <Button variant="dark" className="mt-3">  
          SELECCIONAR ESTRUCTURA
        </Button>
      </Link>
    </div>
  )
} 

export default Home;