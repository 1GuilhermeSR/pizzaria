import NavegationBar from "./layout/NavegationBar";
import styles from './styles/inicio.module.css'

function Configuracao(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>            
               <h1>Configuracao</h1>               
            </div>
        </>
    )
}

export default Configuracao;