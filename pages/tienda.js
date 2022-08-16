import Layout from "../components/Layout"
import Listado from "../components/Listado"


// Pagina de tienda virtual
// articulos: Objeto. Contiene la informacion de los articulos que se desplegaran en pantalla
const Tienda = ({articulos}) => {
    return (
        <Layout
            page={"Tienda Virtual"}
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra colección</h1>
                
                <Listado 
                    articulos={articulos}
                />

            </main>
        </Layout>
    )
}

// Render tienda en cada request
export async function getServerSideProps(){
    const url = `${process.env.API_URL}/articulos?populate=*`
    const respuesta = await fetch(url)
    const articulos = await respuesta.json()

    //retorna los articulos en props
    return {
        props:{
            articulos : articulos.data
        }
    }
}

export default Tienda