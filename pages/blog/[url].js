import Image from "next/image"
import Layout from "../../components/Layout"
import { formatFecha } from "../../helpers"
import styles from '../../styles/Entrada.module.css'


// Pagina donde se muestra una entrada de blog
// entrada: Objeto. Contiene la informacion del Articulo de Blog.
const EntradaBlog = ({entrada}) => {
    
    // Obtener los datos necesarios para la pagina
    const {Contenido, Imagen, publishedAt, Titulo} = entrada

    return (
        <Layout page={Titulo}>

            <main className="contenedor">
                <h1 className="heading">{Titulo}</h1>
                <article className={styles.articulo}>
                    
                    {/* Imagen del Blog */}
                    <Image 
                        layout="responsive" 
                        width={800} 
                        height={600} 
                        src={Imagen.data.attributes.url} 
                        alt={`Imagen Entrada ${Titulo}`} 
                    />

                    {/* Informacion y Contenido del blog  */}
                    <div className={styles.contenido}>

                        <p className={styles.fecha}>{formatFecha(publishedAt)}</p>
                        <p className={styles.texto}>{Contenido}</p>

                    </div>
                </article>
            </main>
        </Layout>
    )
}


// Pre render de las paginas de blog
// Obtiene los paths de la API para construir las paginas de blog durante el Build Time (Contenido estatico)
//Consulta la API y retorna los paths en un objeto
export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()
    const paths = entradas.data.map( entrada => ({
        params : {
            url : entrada.attributes.Url
        }
    }))

    return {
        paths,
        fallback : false 
    }
}

// getStaticPaths requiere usar getStaticProps
// Consulta la API para obtener los Parametros de la pagina de blog
export async function getStaticProps({params: {url}}){
    
    const urlBlog = `${process.env.API_URL}/blogs?populate=*&filters[Url]=${url}`
    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()

    return {
        // Se le pasa al componente como props
        props : {
            entrada : entrada.data[0].attributes
        }
    }
}

export default EntradaBlog