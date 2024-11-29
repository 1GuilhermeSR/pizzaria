import NavegationBar from "../../layout/NavegationBar";
import styles from './styles/configuracao.module.css'
import ContainerConfiguracao from "./ContainerConfiguracao";
function Configuracao(){
    return(
        <>
            <NavegationBar />            
            <div className={styles.main}>

                <div className={styles.titulo}>
                    <h1>Configurações</h1>   
                    <span>gerencia suas Configurações</span>  
                </div> 
            
               <ContainerConfiguracao/>             
            </div>
        </>
    )
}

export default Configuracao;