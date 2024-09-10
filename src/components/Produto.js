import NavegationBar from "./layout/NavegationBar";
import styles from './styles/inicio.module.css'

function Produto(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>            
               <h1>Produto</h1>
               
            </div>
        </>


    )
}

export default Produto;