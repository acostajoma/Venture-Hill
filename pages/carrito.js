import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Carrito.module.css"


// Pagina de carrito
// carrito: Arreglo. Contiene una lista con los productos deseados
// actualizarCantidad: Funcion. Actualiza la cantidad de un producto.
// eliminarProducto: Funcion. Elimina un producto del carrito
const Carrito = ({carrito, actualizarCantidad, elminarProducto}) => {

    // Guarda la sumatoria de los precios de los productos
    const [total, setTotal] = useState(0)

    // Cada vez que carrito cambia actualiza el State del total (sumatoria de los precios de productos)
    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + producto.cantidad * producto.Precio, 0)
        setTotal(calculoTotal)
    },[carrito])

    return (
        <Layout page={'Carrito'}>

            <h1 className="heading">Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    
                    <h2>Artículos</h2>

                    {/* Despliega un componente condicionalmente dependiendo del contenido del carrito
                    Muestra `Carrito vacio` si en el carrito no hay nada o muestra una lista de articulos
                    si el carrito contiene algo
                    */}
                    {carrito.length === 0 ? 'Carrito Vacio' : (
                        
                        // Itera sobre cada producto en carrito
                        carrito.map( producto => (
                            <div key={producto.id} className={styles.producto}>
                                
                                <div>

                                    {/* Imagen de un producto especifico */}
                                    <Image 
                                        layout="responsive" 
                                        width={500} 
                                        height={500} 
                                        src={producto.imagen} 
                                        alt={producto.Nombre}
                                    />

                                </div>
                                
                                {/* Informacion del producto contenido en el carrito */}
                                <div>
                                    {/* Nombre del producto */}
                                    <p className={styles.nombre}>{producto.Nombre}</p>
                                    
                                    
                                    {/* Segmento que muestra la cantidad del producto en el carrito
                                        y permite modificar el mismo. Actualiza el subtotal y el 
                                        total a pagar cuando hay cambios
                                    */}
                                    <div  className={styles.cantidad}>
                                        <p>Cantidad:</p>
                                        <select 
                                            name="cantidad" 
                                            id="cantidad"
                                            className={styles.select} 
                                            value={producto.cantidad} 
                                            onChange={ 
                                                e => actualizarCantidad({
                                                    cantidad : e.target.value,
                                                    id : producto.id,
                                                })
                                            }
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>

                                    {/* Despliega el subtotal de cada producto 
                                        subtotal = precio * cantidad    
                                    */}
                                    <p className={styles.precio}>$ 
                                        <span>{producto.Precio}</span>
                                    </p>
                                    <p className={styles.subtotal}>Subtotal: $
                                        <span>{producto.Precio * producto.cantidad}</span>
                                    </p>

                                </div>
                                
                                {/* Boton para eliminar un producto del carrito */}
                                <button
                                    type="button"
                                    className={styles.eliminar}
                                    onClick={() => elminarProducto(producto.id)}
                                >X</button>


                            </div>
                        ))
                    )}
                </div>


                {/* Muestra el resumen del pedido, el total de todos los articulos contenidos en el carrito 
                    Si no hay productos muestra un mensaje de que este se encuentra vacio
                */}
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Resumen del Pedido</p>
                            <p>Total a Pagar: ${total} </p>
                        </>
                    ) : <p>No hay productos en el carrito</p>}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito