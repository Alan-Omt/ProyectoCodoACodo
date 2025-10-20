import React, { useEffect, useState } from 'react'
import TarjetaItem from './TarjetaItem'
import TarjetaCarrito from './TarjetaCarrito'

export default function Carrito({carrito, funcion}) {
  useEffect(()=>{
    if (carrito.length == 0) { setTotal(0) }
    else{
      var total = 0 
      carrito.forEach((element) => {
        total = total+ element.subTotal()
      });
      setTotal(total.toFixed(2))
    }
  },[carrito])

  const[total, setTotal] = useState(0)

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
    <h2>Total: {total}$</h2>
    
    </>
  )
}
