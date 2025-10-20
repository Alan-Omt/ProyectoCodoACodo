import React, { useState } from 'react'
import Nav from '../components/Nav';
import Productos from '../components/Productos';
import Carrito from '../components/Carrito';

export default function Main() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    const itemExistente = comprobarStock(producto)
    console.log("Item ya esta: " + itemExistente)
    if (itemExistente) {
      setCarrito(carrito.map((item)=>
        item.id === producto.id ? {...item, stock: item.stock +1} : item
      ))
    }else{
      const prodCarrito = {...producto}
      prodCarrito.stock= 1
      prodCarrito.subTotal = function(){
      return (this.price * this.stock)
      }
      setCarrito((carritoAnt)=>[...carritoAnt, prodCarrito])
    }
  }

  function comprobarStock(producto) {
    return carrito.some((item)=>item.id === producto.id)
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
