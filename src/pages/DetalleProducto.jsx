import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
const cuerpo =  {
  width:"100%",
  backgroundColor:"wheat",
  display: "flex",
  flexDirection: "row"
}

const imagen ={
  width: "20%",
  heigth: "auto",
  padding: "5px"
}


export default function DetalleProducto() {
  const {id} = useParams();

  const [producto, setProducto] = useState(null);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(respuesta => respuesta.json())
      .then(dato =>{ 
        setProducto(dato)
      });
      
  },[id])

  if (producto == null) {
    return <h3>Cargando</h3>
  }
  return (
    <>
    <div style={cuerpo}>
      <img style={imagen} src = {producto.image} alt = {producto.category} />
      <div>
        <h2>{producto.title}</h2>
        <h3>Categoria: {producto.category}</h3>
        <h3>{producto.description}</h3>
        <h3>Precio: {producto.price}$</h3>
      </div>
    </div>
    </>

  )
}
