import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"


// Pagina con informacion acerda de nosotros
const Nosotros = () => {
    return (
        <Layout
            page={"Nosotros"}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    
                    {/* Imagen de la pagina */}
                    <Image 
                        layout="responsive" 
                        width={600} 
                        height={450} 
                        src="/img/nosotros.webp" 
                        alt="Imagen Sobre Nosotros"
                    />


                    {/* Texto acerca de nosotros */}
                   <div>
                        <p>
                        Quisque eget dapibus lectus. Duis fermentum, tortor bibendum commodo venenatis, nibh justo sollicitudin felis, vitae feugiat nunc ante ac dolor. In sed turpis sem. Donec luctus ipsum eget turpis fermentum, vel cursus elit posuere. Donec et sem arcu. Praesent laoreet lacinia auctor.</p>

                        <p>Duis scelerisque, arcu sed facilisis suscipit, nisi arcu commodo tellus, nec gravida ligula massa nec elit. Proin fermentum lorem ullamcorper risus malesuada, eget condimentum tellus porta. Fusce pharetra et eros eget bibendum. Maecenas ut lectus vitae ligula tristique pulvinar. purus, vel bibendum tortor egestas ut.  
                        </p>
                    </div> 
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros