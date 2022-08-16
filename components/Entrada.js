import Link from "next/link"
import Image from "next/image"
import { formatFecha } from "../helpers"
import styles from '../styles/Entrada.module.css'

// Componente para cada entrada de la seccion de Blog
const Entrada = ({ent}) => {

    const {Titulo, Resumen, Imagen, publishedAt,  Url} = ent.attributes

    return (
        <article className={styles.entrada}>

            {/* Seccion de la imagen */}
            <div className={styles.imagen}>

                {/* Div vacio con el proposito de una Gradiente */}
                <div></div>
                
                {/* Imagen de la entrada de Blog */}
                <Image 
                    priority="true" 
                    layout="responsive" 
                    width={800} 
                    height={600}
                    src={Imagen.data.attributes.url} 
                    alt={`Imagen Blog ${Titulo}`} 
                />
            </div>


            {/* Informacion de la entrada de Blog: Titulo, fecha, resumen de contenido y url */}
            <div className={styles.contenido}>

                <h3>{Titulo}</h3>
                <p className={styles.fecha}>{formatFecha(publishedAt)}</p>
                <p className={styles.resumen}>{Resumen}</p>
                <Link href={`/blog/${Url}`} passHref>
                    <a className={styles.enlace}>
                        Leer Entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada