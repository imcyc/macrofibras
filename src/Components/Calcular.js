import React, { useState, useEffect } from 'react';
import Titulo from './Titulo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import './Calcular.css';

function Calcular(props) {
  const { eltipo, acero } = props.match.params;

  const [ espesor, setEspesor ] = useState(0);
  const [ resistencia, setResistencia ] = useState(0);
  const [ total, setTotal ] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
  });

  const calcularDosificacion = (e) => {
    e.preventDefault();
    setTotal(Number(espesor) + Number(resistencia))
  }

  return(
    <div className="wpestructuras">
      <Titulo tituloEstructura={props.titulo} />
      <h2 style={{color: '#dedede'}}>{eltipo}</h2>
      <h2 style={{color: '#ea8823'}}>{acero}</h2>
      {/*
      <Image src={props.location.laimagen} alt="Logo" style={{width: '100px'}} className="mt-3" roundedCircle fluid/>
       */}
      <hr/>
      <div className="calcular">
        <div style={{width:'100%'}}>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>SELECCIONE TIPO DE MAYA ELECTROSOLDADA:</Form.Label>
              <Form.Control as="select" onChange={props.tipoMalla}>
                <option value="61">Malla 6 x 6 - 10/10</option>
                <option value="87">Malla 6 x 6 - 08/08</option>
                <option value="123">Malla 6 x 6 - 06/06</option>
                <option value="169">Malla 6 x 6 - 04/04</option>
                <option value="198">Malla 6 x 6 - 03/03</option>
                <option value="228">Malla 6 x 6 - 02/02</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
        <div style={{width:'100%'}}>
          {props.valorAcero ? 
            <div>
              <h2>Área de acero en mm<sup>2</sup>/m</h2>
              <h5 style={{fontWeight: 'bold',fontSize:'2em'}}>{props.valorAcero}</h5>
              {total === 0 ? 
                <Form onSubmit={calcularDosificacion}>
                  <Form.Group controlId="formBasicEspesor">
                    <Form.Control 
                      name="espesor" 
                      type="number" 
                      placeholder="Ingresar espesor de la LOSA en cm" 
                      onChange={(e) => setEspesor(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicResistencia">
                    <Form.Control 
                      name="resistencia" 
                      type="number" 
                      placeholder="Ingresar resistencia a la compresión del concreto en Kg/cm2"
                      onChange={(e) => setResistencia(e.target.value)} 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    CALCULAR
                  </Button>
                </Form>
                : 
                <div>
                  <div className="resultados">
                    <div>
                      <h3>RESULTADO</h3><h1>{total}</h1>
                    </div>
                    <div>
                      <h3>DOSIFICACIÓN EQUIVALENTE</h3><h1>{total}</h1>
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <h2>NOTAS IMPORTANTES</h2>
                      <p>Estas dosificaciones corresponden a MACROFIBRAS validadas por su ingeniería y desempeño ductil por los laboratorios del Instituto Mexicano del Cemento y del Concreto, A.C. en el periodo 2016-2018.</p>
                    </div>
                  </div>
                  <div className="resultados">
                    <div>
                      <p>Estás MACROFIBRAS deben cumplir con una eficiencia espacial de la fibra de 0.0395 a 0.0506 en 0.25% del vol. y de 0.3511 a 0.4119 en 0.50% del volúmen del concreto.</p>
                    </div>
                  </div>
                </div>
                
              }
            </div> 
            : 
            ''
          }
        </div>
      </div>
      
    </div>
  )
}

export default Calcular;