import Link from "next/link"
import styles from '../styles/NoEncontrado.module.css'

// Si una pagina no es encontada se desplega esta pagina
const NoEncontrado = () => {
    return (
        <div className={styles.no_encontrado}>
            <h1 className="heading">Página no encontrada</h1>
            <Link href={"/"}>Volver al inicio</Link>
        </div>
    )
}

export default NoEncontrado