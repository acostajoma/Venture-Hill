import Link from "next/link"
import style from '../styles/Curso.module.css'


// Componente de excursion que se muestra en el index 
const Excursion = ({excursion}) => {

    const { Titulo, Contenido, Imagen } = excursion
    return (
        <div>

            <section>
                <div className={`contenedor ${style.grid}`}>
                    <div className={style.contenido}>
                        <h2 className="heading">{Titulo}</h2>
                        <p className={style.texto}>{Contenido}</p>

                        {/* Incluir pagina de excursiones cuando haya sido creada */}
                        <Link href={'#'} passHref>
                            <a className={style.enlace}>Más Información</a>
                        </Link>
                    </div>
                </div>

                <style jsx>{`
                    section {
                        /* Segmento para darle estilos a la seccion */
                        /* Se incluye aca para acceder directamente a la Imagen que proviene de la BD  usando JavaScript*/
                        padding: 10rem 0;
                        margin-top: 10rem;
                        background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / 0.7)), url(${Imagen.data.attributes.url});
                        background-size: cover;
                        background-position: center;
                    }
                `}</style>

            </section>
        </div>
    )
}

export default Excursion