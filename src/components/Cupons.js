import NavegationBar from "./layout/NavegationBar";
import styles from './styles/cupom.module.css'
import CadContainerCupom from "./layout/CadContainerCupom";
function Cupons(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>                           
                <div className={styles.titulo}>
                    <h1>Cupom</h1>   
                    <span>Cadastros de cupons</span>  
                </div> 
               <CadContainerCupom/>              
            </div>
            
        </>
    )
}

export default Cupons;