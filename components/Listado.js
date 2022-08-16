import Item from "./Item"
import styles from  '../styles/Listado.module.css'


// Componente que itera en un array de articulos y crea un componente para cada articulo
const Listado = ({articulos}) => {

    return (
        <div className={styles.listado}>

            {articulos.map( articulo => (
                <Item 
                    key={articulo.attributes.Url}
                    articulo={articulo.attributes}
                />
            ))}
            
        </div>
    )
}

export default Listado