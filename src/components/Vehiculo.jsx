// import React, { useState } from 'react'
import { useState } from 'react';
import axios from "axios";

export const Vehiculo = () => {

  const url = 'http://localhost:4000/api/vehiculo';
  //Hooks
  const [anio, setAnio] = useState();
  const [tipo_combustible, setTipo_combustible] = useState();
  const [kilometraje, setKilometraje] = useState();
  const [num_puertas, setNum_puertas] = useState();
  const [num_asientos, setNum_asientos] = useState();

  const anioHandler = (event) => {
    const { name, value } = event.target;
    setAnio(value);
  }
  const tipo_combustibleHandler = (event) => {
    const { name, value } = event.target;
    setTipo_combustible(value);
  }
  const kilometrajeHandler = (event) => {
    const { name, value } = event.target;
    setKilometraje(value);
  }
  const num_puertasHandler = (event) => {
    const { name, value } = event.target;
    setNum_puertas(value);
  }
  const num_asientosHandler = (event) => {
    const { name, value } = event.target;
    setNum_asientos(value);
  }
  const submitHandler = async() => {
    event.preventDefault();
    const dataSend = {
      modelo_id: 6, 
      anio: anio, 
      tipo_combustible: tipo_combustible, 
      kilometraje: kilometraje, 
      num_puertas: num_puertas, 
      num_asientos: num_asientos
    }
    // console.log(dataSend);

    const result = await axios.post(url, dataSend);
    const resultData = (await result).data;

    console.log(result);
    console.log(resultData);
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center align-items-center' style={{height: `100vh`}}>
          <form onSubmit={submitHandler}>
            <fieldset>
              <legend>Vehículos</legend>
              <div className="mb-3">
                <label htmlFor="anio" className="form-label">Año</label>
                <input type="number" className="form-control" id="anio" name="anio" placeholder="2010" onChange={anioHandler}/>
              </div>

              <div className="mb-3">
                <label htmlFor="tipo_combustible" className="form-label">Tipo Combustible</label>
                <input type="text" className="form-control" id="tipo_combustible" name = "tipo_combustible" placeholder="Gasolina / Diesel / GAS" onChange={tipo_combustibleHandler}/>
              </div>

              <div className="mb-3">
                <label htmlFor="kilometraje" className="form-label">Kilometraje</label>
                <input type="number" className="form-control" id="kilometraje" name="kilometraje" placeholder="100100" onChange={kilometrajeHandler}/>
              </div>

              <div className="mb-3">
                <label htmlFor="num_puertas" className="form-label">No. Puertas</label>
                <input type="number" className="form-control" id="num_puertas" name="num_puertas" placeholder="4" onChange={num_puertasHandler}/>
              </div>

              <div className="mb-3">
                <label htmlFor="num_asientos" className="form-label">No. Asientos</label>
                <input type="number" className="form-control" id="num_asientos" name="num_asientos" placeholder="4" onChange={num_asientosHandler}/>
              </div>

              <button type='submit' className='btn btn-primary'>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
