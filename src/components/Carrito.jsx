import React from 'react'
import TarjetaItem from './TarjetaItem'
import TarjetaCarrito from './TarjetaCarrito'

export default function Carrito({carrito, funcion}) {

  if (carrito.length == 0) {
    return(
      <>
      <h2>Carrito Vacio!</h2>
      </>
    )
  }

  return (
    <>
    <h2>Carrito de Compras!</h2>
    {carrito.map((item, indice)=>{
      return <TarjetaCarrito key={indice} item={item} funcionBoton={()=>funcion(indice)}/>
    })}
    
    </>
  )
}
