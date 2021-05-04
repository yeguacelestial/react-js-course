import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {
  const fecha = new Date().getFullYear()

  // Crear listado de productos
  const [productos, setProductos] = useState([
    {id: 1, nombre: 'Camisa React.js', precio: 50},
    {id: 2, nombre: 'Camisa Vue.js', precio: 30},
    {id: 3, nombre: 'Camisa Angular', precio: 150},
    {id: 4, nombre: 'Camisa Node.js', precio: 250},
  ])

  // State para carrito de compras
  const [carrito, agregarProducto] = useState([])

  return (
    <Fragment>
      <Header
        titulo="Tienda virtual"
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
