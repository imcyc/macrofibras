import React from 'react';
import Titulo from './Titulo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

function Calcular(props) {
  const { eltipo, acero } = props.match.params;
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
              <Form onSubmit={props.calcularDosificacion}>
                <Form.Group controlId="formBasicEspesor">
                  <Form.Control name="espesor" type="number" placeholder="Ingresar espesor de la LOSA en cm" />
                </Form.Group>
                <Form.Group controlId="formBasicResistencia">
                  <Form.Control name="resistencia" type="number" placeholder="Ingresar resistencia a la compresión del concreto en Kg/cm2" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  CALCULAR
                </Button>
              </Form>
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