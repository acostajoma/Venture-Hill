import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const initialState = []
  const [carrito, setCarrito] = useState(initialState)

  // Consulta Local Storage cuando la App esta lista
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? []
    if(carritoLS){
      setCarrito(carritoLS)
    }
  }, [])


  // Cuando hay cambios en el carrito guarda los datos en Local Storage
  useEffect( () => {
    if (carrito !== initialState){
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
  }, [carrito])


  // Agrega un producto al carrito
  const agregarCarrito = producto => {

    // Si el producto ya existe, se actualiza la cantidad para evitar duplicados
    if(carrito.some( articulo => articulo.id === producto.id)){
      return actualizarCantidad(producto)
    }
    // Si el producto no ha sido agregado, se agrega un nuevo registro al final de la lista
    setCarrito([...carrito, producto])
  }


  // Actualizar la cantidad de productos existentes en el carrito para evitar duplicados
  const actualizarCantidad = producto => {

    // Compara el id del articulo con los productos que ya estan en el carrito. 
    const carritoActualizado = carrito.map( articulo => {
      // Cuando encuentra la concidencia actualiza la cantidad.
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    
    // Se actualiza el State del carrito
    setCarrito(carritoActualizado)
  }


  // Elimina un producto del carrito utilizando el id del producto
  const elminarProducto = id => {
    const carritoActualizado = carrito.filter( articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }


  // retorna el componente y pone a disposicion algunas funciones para uso global
  return <Component 
    {...pageProps} 
    carrito={carrito} 
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    elminarProducto={elminarProducto}
  />
}

export default MyApp
