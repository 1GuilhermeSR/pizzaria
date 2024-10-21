import NavegationBar from "./layout/NavegationBar";
import styles from './styles/inicio.module.css'

function Cupons(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>            
               <h1>Cupons</h1>               
            </div>
        </>
    )
}

export default Cupons;