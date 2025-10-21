import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
    <nav style={{
      backgroundColor: "#333",
      color: "white",
      padding: "10px"
    }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-around",
        margin: 0
      }}>
        <li><Link to ="/" style={{color: "white", textDecoration: "none"}}>Inicio</Link></li>
        <li><Link to ='/proximamente' style={{color: "white", textDecoration: "none"}}>Proximanente</Link></li>
        <li><Link to ='/acercaDe' style={{color: "white", textDecoration: "none"}}>Acerca de</Link></li>
        <li><Link to ='/Contacto' style={{color: "white", textDecoration: "none"}}>Contacto</Link></li>
      </ul>
    </nav>
    </>
  )
}
