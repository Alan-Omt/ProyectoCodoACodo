import React, { useEffect, useState } from 'react'
import TarjetaItem from './TarjetaItem';

export default function Productos({funcionBoton}) {
  const URL = 'https://fakestoreapi.com/products';

  const [productos,setProductos] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState(null);

  useEffect(()=>{
    console.log("inicio del fetch url: " + URL)
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
        console.log(datos)
      })
      .catch((error) => {
        console.log("Error:", error)
        setError("hubo un problema al cargar los productos")
        setCargando(false)
      })
  },[])

  if(cargando) return( 
  <div style={{padding: "20px"}}>
    <p>Cargando los productos...</p>
  </div>
  )

  if(error) return <div style={{padding: "20px"}}><p>{error}</p></div>

  return (
    <>
    <div style={{padding: "20px"}}>
      <ul>
      {productos.map((item)=>(
        <TarjetaItem key={item.id} item={item} funcionBoton={()=>funcionBoton(item)} />
      ))}
      </ul>
    </div>
    
    </>
  )
}
