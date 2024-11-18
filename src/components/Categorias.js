import NavegationBar from "./layout/NavegationBar";
import styles from './styles/categoria.module.css'
import CadContainerCategoria from "./layout/CadContainerCategoria";
function Categorias(){
    return(
        <>
            <NavegationBar />            
           <div className={styles.main}>

                <div className={styles.titulo}>
                    <h1>Categoria</h1>   
                    <span>Cadastros de categorias</span>  
                </div> 

               <CadContainerCategoria/>             
            </div>
        </>
    )
}

export default Categorias;