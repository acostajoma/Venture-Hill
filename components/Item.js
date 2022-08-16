import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Item.module.css"


// Componente que muestra un articulo en la pagina de Tienda y en el index
const Item = ({articulo}) => {

    const {Nombre, Imagen, Descripcion, Precio, Url} = articulo
    return (

        <div className={styles.card}>

            {/* Imagen del producto */}
            <Image 
                layout="responsive" 
                width={500} 
                height={500} 
                src={Imagen.data.attributes.url} 
                alt={`Imagen artículo ${Nombre}`}
            />

            {/* Contiene la informacion del producto: Titulo, descripcion, precio y el link para ver el producto */}
            <div className={styles.contenido}>
                
                <h3>{Nombre}</h3>
                <p className={styles.descripcion}>{Descripcion}</p>
                <p className={styles.precio}>${Precio}</p>

                <Link href={`/articulos/${Url}`} passHref>
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
                
            </div>
        </div>
    )
}

export default Item