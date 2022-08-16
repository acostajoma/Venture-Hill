import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

// Componente Base para la mayoria de paginas
const Layout = ({children, page, producto}) => {
  return (
    <div>
        
        <Head>
            <title>{`Venture Hill - ${page}`}</title>
            <meta name="description" content="Sitio web de Senderismo y Camping" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        </Head>

        <Header
          // variable para mostrar un producto en la pagina de inicio, en las otras paginas el default es null
          producto={producto}
        />

        {/* Aca se agraga el HTML de cada pagina */}
        {children}

        <Footer />
    </div>
  )
}

// Valor default para producto en caso de que no se le pase un argumento
Layout.defaultProps = {
    producto: null
}

export default Layout