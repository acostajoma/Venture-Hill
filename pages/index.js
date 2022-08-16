import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Excursion from '../components/Excursion'
import ListadoBlog from '../components/ListadoBlog'


// Pagina inicial del app
export default function Home({articulos, excursion, entradas}) {

  return (
    <Layout
      page={'Inicio'}
      producto={articulos[2].attributes}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>

        {/* Listado de algunos articulos de la tienda */}
        <Listado 
          articulos={articulos}
        />
      </main>

      {/* Seccion de excursion */}
      <Excursion 
        excursion={excursion}
      />


      {/* Seccion con algunas entradas de Blog */}
      <section className="contenedor">
        <ListadoBlog 
          entradas={entradas}
        />
      </section>


    </Layout>
  )
}

// Render index en cada request
export async function getServerSideProps(){
  const urlArticulos = `${process.env.API_URL}/articulos?populate=*&pagination[limit]=6`
  const urlExcursion = `${process.env.API_URL}/excursion?populate=*`
  const urlBlog = `${process.env.API_URL}/blogs?populate=*&pagination[limit]=3`


  const [resArticulos, resExcursion, resBlog] = await Promise.all([
    fetch(urlArticulos),
    fetch(urlExcursion),
    fetch(urlBlog)
  ])

  const [articulos, excursion, entradas] = await Promise.all([
    resArticulos.json(),
    resExcursion.json(),
    resBlog.json()
  ])

  //retorna al componente como props
  return {
      props:{
          articulos : articulos.data,
          excursion : excursion.data.attributes ,
          entradas : entradas.data
      }
  }
}