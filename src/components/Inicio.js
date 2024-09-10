import NavegationBar from "./layout/NavegationBar";
import styles from './styles/inicio.module.css'

function Inicio(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>            
               <h1>INICIO</h1>
               
            </div>
        </>


    )
}

export default Inicio;