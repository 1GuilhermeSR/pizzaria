import NavegationBar from "./layout/NavegationBar";
import styles from './styles/inicio.module.css'

function Categorias(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>            
               <h1>Categoria</h1>               
            </div>
        </>
    )
}

export default Categorias;