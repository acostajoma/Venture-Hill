import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"


// Pagina con lista de entradas de blog
// entradas: Objeto. Contiene una lista de entradas con su informacion para desplegar en pantalla
const Blog = ({entradas}) => {

    return (
        <Layout
            page={"Blog"}
        >
            <main className="contenedor">
                <ListadoBlog 
                    entradas={entradas}
                />
            </main>
        </Layout>
    )
}


// Consulta la API para obtener los datos de las paginas de blogs
export async function getStaticProps(){

    const url = `${process.env.API_URL}/blogs?populate=*&_sort=created_at:desc`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    //Se retorna al componente en props
    return {
        props : {
            entradas : entradas.data
        }
    }
}

export default Blog