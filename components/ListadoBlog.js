import Entrada from "../components/Entrada"
import styles from "../styles/Blog.module.css"

// Componente que itera en un array de entradas de blog y crea un componente para cada una. 
// Adiciona un titulo al inicio de la seccion de entradas
const ListadoBlog = ({entradas}) => {
  return (
    <>
      
      {/* Titulo del segmento */}
      <h2 className="heading">Blog</h2>

        {/* Contiene las entradas de blog */}
        <div className={styles.blog}>

            {/* Itera sobre el arreglo de entradas de blog y crea un componente para cada uno */}
            {entradas.map( ent => {
                return <Entrada 
                    key={ent.id}
                    ent={ent}
                />
            })}

        </div>
    </>
  )
}

export default ListadoBlog