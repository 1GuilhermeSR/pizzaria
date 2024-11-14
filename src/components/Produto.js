import NavegationBar from "./layout/NavegationBar";
import styles from './styles/produto.module.css'
import CadContainer from "./layout/CadContainer";
function Produto(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>

                <div className={styles.titulo}>
                    <h1>Produto</h1>   
                    <span>Cadastros de produtos</span>  
                </div> 

               <CadContainer/>             
            </div>
        </>


    )
}

export default Produto;