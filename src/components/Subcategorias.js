import NavegationBar from "./layout/NavegationBar";
import styles from './styles/subcategoria.module.css'
import CadContainerSubcategoria from "./layout/CadContainerSubcategoria";
function Subcategorias(){
    return(
        <>
            <NavegationBar />            
           <div className={styles.main}>

                <div className={styles.titulo}>
                    <h1>Subcategoria</h1>   
                    <span>Cadastros de subcategorias</span>  
                </div> 

               <CadContainerSubcategoria/>             
            </div>
        </>
    )
}

export default Subcategorias;