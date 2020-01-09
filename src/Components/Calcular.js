import React, { useState, useEffect } from 'react';
import Titulo from './Titulo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import LOGOTexto from '../images/LOGOTexto.svg';
import './Calcular.css';

function Calcular(props) {
  const { eltipo, acero } = props.match.params;

  const [ espesor, setEspesor ] = useState(0);
  const [ resistencia, setResistencia ] = useState(0);
  const [ resisDos, setResisDos ] = useState(0);
  const [ total, setTotal ] = useState(0);
  const [ dosificacion, setDosificacion ] = useState(0);
  
  const [ areaVarilla, setAreaVarilla ] = useState(0);

  const calcularDosificacion = (e) => {
    e.preventDefault();

    let resUno = ((Number(props.valorAcero) / Number(espesor) * 100)/100000).toFixed(7);
    let resDos = (((Number(resUno) * 491 / (6 * (Math.sqrt(resistencia/10)))) * 100)).toFixed(2);

    setResisDos(resDos);
    setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));

    if(resDos > 0 && resDos <= 9){
      setDosificacion('1.0');
    } else if(resDos > 9 && resDos <= 15){
      setDosificacion('1.6');
    } else if(resDos > 15 && resDos <= 20){
      setDosificacion('2.0');
    } else if(resDos > 20 && resDos <= 25){
      setDosificacion('2.5');
    } else if(resDos > 25 && resDos <= 30){
      setDosificacion('3.0');
    } else if(resDos > 30 && resDos <= 35){
      setDosificacion('3.5');
    } else if(resDos > 35 && resDos <= 40){
      setDosificacion('4.0');
    } else if(resDos > 40 && resDos <= 45){
      setDosificacion('4.5');
    } else if(resDos > 45 && resDos <= 50){
      setDosificacion('5.0');
    } else if(resDos > 50 && resDos <= 55){
      setDosificacion('5.5');
    } else if(resDos > 55 && resDos <= 60){
      setDosificacion('6.0');
    } else if(resDos > 60 && resDos <= 65){
      setDosificacion('6.5');
    } else if(resDos > 65 && resDos <= 70){
      setDosificacion('7.0');
    } else if(resDos > 70 && resDos <= 75){
      setDosificacion('7.5');
    } else if(resDos > 75 && resDos <= 80){
      setDosificacion('8.0');
    } else if(resDos > 80 && resDos <= 85){
      setDosificacion('8.5');
    } else if(resDos > 85 && resDos <= 90){
      setDosificacion('9.0');
    } else if(resDos > 90 && resDos <= 95){
      setDosificacion('9.5');
    } else if(resDos > 95 && resDos <= 100){
      setDosificacion('10.0');
    } else if(resDos > 100 && resDos <= 105){
      setDosificacion('10.5');
    } else if(resDos > 105 && resDos <= 110){
      setDosificacion('11.0');
    } else if(resDos > 110 && resDos <= 115){
      setDosificacion('11.5');
    } else if(resDos > 115 && resDos <= 120){
      setDosificacion('12.0');
    }
    //setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    //setDosificacion(((0.012 * 491 / 6 * Number(resistencia))/10).toFixed(2));
  }

  useEffect(() => {
      setAreaVarilla(props.tipoSeparacion);
  });

  const calcularDosificacionVarilla = (e) => {
    e.preventDefault();

    let resUno = ((Number(props.tipoSeparacion) / Number(espesor) * 100)/100000).toFixed(7);
    let resDos = (((Number(resUno) * 412 / (6 * (Math.sqrt(resistencia/10)))) * 100)).toFixed(2);

    setResisDos(resDos);
    setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));

    if(resDos > 0 && resDos <= 9){
      setDosificacion('1.0');
    } else if(resDos > 9 && resDos <= 15){
      setDosificacion('1.6');
    } else if(resDos > 15 && resDos <= 20){
      setDosificacion('2.0');
    } else if(resDos > 20 && resDos <= 25){
      setDosificacion('2.5');
    } else if(resDos > 25 && resDos <= 30){
      setDosificacion('3.0');
    } else if(resDos > 30 && resDos <= 35){
      setDosificacion('3.5');
    } else if(resDos > 35 && resDos <= 40){
      setDosificacion('4.0');
    } else if(resDos > 40 && resDos <= 45){
      setDosificacion('4.5');
    } else if(resDos > 45 && resDos <= 50){
      setDosificacion('5.0');
    } else if(resDos > 50 && resDos <= 55){
      setDosificacion('5.5');
    } else if(resDos > 55 && resDos <= 60){
      setDosificacion('6.0');
    } else if(resDos > 60 && resDos <= 65){
      setDosificacion('6.5');
    } else if(resDos > 65 && resDos <= 70){
      setDosificacion('7.0');
    } else if(resDos > 70 && resDos <= 75){
      setDosificacion('7.5');
    } else if(resDos > 75 && resDos <= 80){
      setDosificacion('8.0');
    } else if(resDos > 80 && resDos <= 85){
      setDosificacion('8.5');
    } else if(resDos > 85 && resDos <= 90){
      setDosificacion('9.0');
    } else if(resDos > 90 && resDos <= 95){
      setDosificacion('9.5');
    } else if(resDos > 95 && resDos <= 100){
      setDosificacion('10.0');
    } else if(resDos > 100 && resDos <= 105){
      setDosificacion('10.5');
    } else if(resDos > 105 && resDos <= 110){
      setDosificacion('11.0');
    } else if(resDos > 110 && resDos <= 115){
      setDosificacion('11.5');
    } else if(resDos > 115 && resDos <= 120){
      setDosificacion('12.0');
    }
    //setTotal(((props.valorAcero / Number(espesor) * 100)/1000000).toFixed(7));
    //setDosificacion(((0.012 * 491 / 6 * Number(resistencia))/10).toFixed(2));
  }
  
  return(
    <div className="wpestructuras">
      <img src={LOGOTexto} alt="Logo" className="mb-3 mt-3" style={{width: '90%'}} />
      <h2 style={{color: '#dedede'}}>{eltipo}</h2>
      <h2 style={{color: '#ea8823'}}>{acero}</h2>
      {/*
      <Image src={props.location.laimagen} alt="Logo" style={{width: '100px'}} className="mt-3" roundedCircle fluid/>
       */}
      <hr/>
      <div className="calcular">
        <div style={{width:'100%'}}>
          {acero === 'VARILLA' ? 
          <Form>
              {props.valorVarilla ? 
                <div>
                  <h2><i className="lni-check-mark-circle"></i> VARILLA SELECCIONADA # {props.valorVarilla}</h2> 
                  <hr/>
                </div>
                :
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="mb-3"><b>SELECCIONE TIPO DE VARILLA:</b></Form.Label>
                  <Form.Control as="select" onChange={props.tipoVarilla}>
                    <option>SELECCIONAR</option>
                    <option value="3">VAR #3 [3/8]</option>
                    <option value="4">VAR #4 [1/2]</option>
                    <option value="5">VAR #5 [5/8]</option>
                    <option value="6">VAR #6 [3/4]</option>
                  </Form.Control>
                </Form.Group>
              }
           
          </Form>
          : 
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label className="mb-3"><b>SELECCIONE TIPO DE MALLA ELECTROSOLDADA:</b></Form.Label>
              <Form.Control as="select" onChange={props.tipoMalla}>
                <option>SELECCIONAR</option>
                <option value="61">Malla 6 x 6 - 10/10</option>
                <option value="87">Malla 6 x 6 - 08/08</option>
                <option value="123">Malla 6 x 6 - 06/06</option>
                <option value="169">Malla 6 x 6 - 04/04</option>
                <option value="198">Malla 6 x 6 - 03/03</option>
                <option value="228">Malla 6 x 6 - 02/02</option>
              </Form.Control>
            </Form.Group>
          </Form>
          }
          {props.valorVarilla ?
            <Form>
              {props.tipoSeparacion ?
              <div>
                <h2><i className="lni-check-mark-circle"></i> SEPARACIÓN DEL EMPARRILLADO DE {props.valorEmparrillado} CM</h2> 
                <hr/>
              </div>
              :
              <Form.Group controlId="exampleForm.ControlSelect3">
                <Form.Label className="mb-3"><b>SELECCIONE SEPARACIÓN DEL EMPARRILLADO EN CM:</b></Form.Label>
                <Form.Control as="select" onChange={props.tipoSeparacionValor}>
                  <option>SELECCIONAR</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                </Form.Control>
              </Form.Group>
              }
            </Form>
          :
            ""
          }
        </div>
        <div style={{width:'100%'}}>



          



          {props.valorAcero ? 
            <div>
              <h2>Área de acero en mm<sup>2</sup>/m:</h2>
              <h5 style={{fontWeight: 'bold',fontSize:'2em'}}>{props.valorAcero}</h5>
              {total === 0 ? 
                <Form onSubmit={calcularDosificacion}>
                  <Form.Group controlId="formBasicEspesor">
                    <Form.Control 
                      name="espesor" 
                      type="number" 
                      placeholder="Espesor del elemento en cm" 
                      onChange={(e) => setEspesor(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicResistencia">
                    <Form.Control 
                      name="resistencia" 
                      type="number" 
                      placeholder="Ingresar f'c en Kg/cm2"
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
                      <h3>RESISTENCIA RESIDUAL NMX C-535</h3><h1>{resisDos} %</h1>
                    </div>
                    <div>
                      <h3>DOSIFICACIÓN MACROFIBRAS</h3><h1>{dosificacion} kg/m<sup>3</sup></h1>
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

          {areaVarilla ? 
            <div>
              <h2>Área de acero en mm<sup>2</sup>/m:</h2>
              <h5 style={{fontWeight: 'bold',fontSize:'2em'}}>{areaVarilla}</h5>
              {total === 0 ? 
                <Form onSubmit={calcularDosificacionVarilla}>
                  <Form.Group controlId="formBasicEspesor">
                    <Form.Control 
                      name="espesor" 
                      type="number" 
                      placeholder="Espesor del elemento en cm" 
                      onChange={(e) => setEspesor(e.target.value)} 
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicResistencia">
                    <Form.Control 
                      name="resistencia" 
                      type="number" 
                      placeholder="Ingresar f'c en Kg/cm2"
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
                      <h3>RESISTENCIA RESIDUAL NMX C-535</h3><h1>{resisDos} %</h1>
                    </div>
                    <div>
                      <h3>DOSIFICACIÓN MACROFIBRAS</h3><h1>{dosificacion} kg/m<sup>3</sup></h1>
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