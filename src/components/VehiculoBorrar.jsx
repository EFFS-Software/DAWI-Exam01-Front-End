// import React, { useState } from 'react'
import { useState } from 'react';
import axios from "axios";

export const VehiculoBorrar = () => {
  //Hooks
  const [ID, setID] = useState();
  
  const idHandler = (event) => {
    const { name, value } = event.target;
    setID(value);
  }
  
  const submitHandler = async() => {
    const url = `http://localhost:4000/api/vehiculo/${ID}`;
    
    event.preventDefault();
    // console.log(dataSend);

    const result = await axios.delete(url);
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
              <legend>Borrar Vehículo</legend>

              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="number" className="form-control" id="id" name="id" placeholder="0" onChange={idHandler}/>
              </div>

              <button type='submit' className='btn btn-danger'>Borrar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
