import React, { useState } from 'react'
import Nav from '../components/Nav';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

export default function Main() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito((carritoAnt)=>[...carritoAnt, producto])
  }

  function eliminarDelCarrito (indiceAEliminar) {
    setCarrito(carrito.filter((_, indice)=> indice !== indiceAEliminar))
  }
  return (
    <>
    <main style={{padding: "20px"}}>
      <h2>Pagina principal, contiene las Rutas de React-router: </h2>
      <Productos funcionBoton={agregarAlCarrito}/>
      <hr/>
      <Carrito carrito={carrito} funcion={eliminarDelCarrito}/>
    </main>
    </>
  )
}
