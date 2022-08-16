import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

// Componente Header el cual se pasa en el componente de Layout
const Header = ({producto}) => {

    return (
        <header className={styles.header}>
            <div className="contenedor">

                {/* logo de la pagina -> Venture Hills Instrumentos & Consejos */}
                <div className={styles.barra}>
                    <Link href="/" passHref>
                        <a>
                            <Image width={400} height={100} src="/img/logo.svg" alt="Imagen del Logo"/>
                        </a>
                    </Link>

                    {/* Barra de navegacion */}
                    <nav className={styles.nav}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                        <Link href="/carrito" passHref>
                            <a>
                                <Image layout="fixed" width={40} height={36} src="/img/carrito.svg" alt="Imagen carrito"/>
                            </a>
                        </Link>
                    </nav>
                </div>


                {
                    /*
                    Codigo se ejecuta solo en la pagina de index, producto solo es 'True' en esta pagina por los parametros pasados,
                    muestra un bolso y su informacion.
                    */
                    producto && (

                        <>
                            {/* Informacion del producto */}
                            <div className={styles.modelo}>
                                <h2>{producto.Nombre}</h2>
                                <p>{producto.Descripcion}</p>
                                <p className={styles.precio}>${producto.Precio}</p>
                                <Link href={`articulos/${producto.Url}`} passHref>
                                    <a className={styles.enlace}>Ver Producto</a>
                                </Link>
                            </div>

                            {/* Imagen del prodcuto */}
                            <img
                                className={styles.producto}
                                src="/img/header_deuter.png"
                                alt="imagen header producto"
                            />
                        </>
                )}

            </div>


        </header>
    )
}

export default Header