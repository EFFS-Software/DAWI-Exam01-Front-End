import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Marca } from './components/Marca'
import { Modelo } from './components/Modelo'
import { Vehiculo } from './components/Vehiculo'
import { EspecialidadMecanico } from './components/EspecialidadMecanico'
import { Mecanico } from './components/Mecanico'
import { Mantenimiento } from './components/Mantenimiento'
import { HistorialVehiculo } from './components/HistorialVehiculo'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/marca' element={<Marca/>}></Route>
          <Route path='/modelo' element={<Modelo/>}></Route>
          <Route path='/vehiculo' element={<Vehiculo/>}></Route>
          <Route path='/especialidad_mecanico' element={<EspecialidadMecanico/>}></Route>
          <Route path='/mecanico' element={<Mecanico/>}></Route>
          <Route path='/mantenimiento' element={<Mantenimiento/>}></Route>
          <Route path='/historial_vehiculo' element={<HistorialVehiculo/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App