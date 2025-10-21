import React from 'react'
import { Link } from 'react-router-dom'

const estiloTarjeta = {
  width: "80%",
  height: "150px",
  backgroundColor: "#1B7BCF",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "nowrap",
  alignItems: "center",
  borderRadius: "12px",
  overflow: "hidden",
  border: "solid"
}

const m1 = {
  height: "100%",
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "solid"
}

const m2 = {
  width: "60%",
  height: "100%",
  backgroundColor: "#CF6F1B",
  flexGrow: 1.5,
  padding: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}

const imageEstilo = {
  width: "100px",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover"
}

const alinear = {
  width:"100%",
  display:"flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly"
}

export default function TarjetaItem({item, funcionBoton}) {
  return (
    <>
    <div style={estiloTarjeta}>
      <div style={m1}>
        <img src={item.image} alt='ImagenItem' style={imageEstilo}/>
      </div>
      
      <div style={m2}>
        <h3>Nombre: {item.title}</h3>
        <div style={alinear}>
          <h3>Precio {item.price}$</h3>
          <button onClick={()=>funcionBoton()}>Agregar al Carrito</button>
          <Link to = {`/producto/${item.id}`} > <button>Detalles</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}
