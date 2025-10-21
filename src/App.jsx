import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import About from './pages/About'
import Contacto from './pages/Contacto'
import DetalleProducto from './pages/DetalleProducto'

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element = {<Main/>}/>
      <Route path='/proximamente' element = {<Gallery/>}/>
      <Route path='/acercaDe' element = {<About/>}/>
      <Route path='/contacto' element = {<Contacto/>}/>
      <Route path='/producto/:id' element = {<DetalleProducto/>}/>
    </Routes>
    <Footer/>
    </>
  )
}
