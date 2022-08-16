import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import styles from "../../styles/Item.module.css"


// Pagina donde se muestra un producto
// articulo: Objeto. Producto de la tienda virtual
// agregarCarrito: Funcion. Agrega una cantidad del producto al carrito
const Producto = ({articulo, agregarCarrito}) => {

    // State para guardar la cantidad del producto que se desea agregar al carrito
    const [cantidad, setCantidad] = useState(1)

    const {id, attributes:{Nombre, Descripcion, Imagen, Precio}} = articulo

    // handleSubmit: Agrega el producto y la cantidad deseada al carrito
    const handleSubmit = e => {
        e.preventDefault()

        //Valida si la cantidad es menor a 1
        if(cantidad < 1){
            alert('Cantidad no Valida')
            return
        }

        // articuloSeleccionado: Objeto. Contiene la informacion del producto y la cantidad.
        const articuloSeleccionado = {
            id,
            imagen : Imagen.data.attributes.url,
            Nombre,
            Precio,
            cantidad 
        }

        // Agrega el articulo
        agregarCarrito(articuloSeleccionado)

    }

    return (
        <Layout
            page={Nombre}
        >
            <div className={styles.item}>

                {/* Imagen del producto */}
                <Image 
                    layout="responsive" 
                    width={500} 
                    height={500} 
                    src={Imagen.data.attributes.url} 
                    alt={`Imagen Artículo ${Nombre}`}
                />


                <div className={styles.contenido}>

                    {/* Descripcion del producto */}
                    <h3>{Nombre}</h3>
                    <p className={styles.descripcion}>{Descripcion}</p>
                    <p className={styles.precio}>${Precio}</p>


                    {/* Form para modificar la cantidad deseada y agrega al carrito */}
                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        
                        <label htmlFor="cantidad">Cantidad:</label>

                        {/* Seleccionar cantidad */}
                        <select 
                            name="cantidad" 
                            id="cantidad" 
                            value={cantidad} 
                            onChange={ e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        
                        {/* Agregar al carrito */}
                        <input type="submit" value="Agregar al carrito"/>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

// Pre-render en cada solicitud
// query: {url}. Obtiene la direccion especifica para realizar una consulta y hacer el prerender
export async function getServerSideProps({query: {url}}){

    const urlArticulo = `${process.env.API_URL}/articulos?populate=*&filters[Url]=${url}`
    const respuesta = await fetch(urlArticulo)
    const articulo = await respuesta.json()


    return{
        props : {
            articulo : articulo.data[0]
        }
    }
}

export default Producto