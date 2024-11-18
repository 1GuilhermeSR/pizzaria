import styles from './styles/cadContainerCategoria.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
function CadContainerSubcategoria(){

    const subcategorias = [
        {
            id: 1,
            nome: "tradicional",
	       categoria: "pizza"	            
        },
        {
            id: 2,
            nome: "goumert",
	        categoria: "pizza"	 
        },
        {
            id: 3,
            nome: "refrigerante",
	        categoria: "bebida"	 
        },
        {
            id: 4,
            nome: "cerveja",
	        categoria: "bebida"	 
        },
        {
            id: 5,
            nome: "suco",
	        categoria: "bebida"	 
        },
        {
            id: 6,
            nome: "agua",
	        categoria: "bebida"	 
        },
    ];
    function removerSubcategoria(){
        
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de subcategorias</span></div>
                <div className={styles.divisor}></div>
            </div>
           <div className={styles.topo}>
                <button>Novo</button>
                <input type="text" name="" id="" placeholder="Pesquisar" />
           </div>
           <div className={styles.containerTabela}>
           <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th> 
                        <th>CATEGORIA</th>                            
                    </tr>
                </thead>
                <tbody>
                    {subcategorias.map((subcategoria) => (
                    <tr key={subcategoria.id}>
                        <td>{subcategoria.id}</td>
                        <td>{subcategoria.nome}</td>       
                        <td>{subcategoria.categoria}</td>                   
                        <td>
                        <FaRegEdit 
                            className={styles.iconEdit}                            
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerSubcategoria(subcategoria.id)}
                        />
                        </td>
                    </tr>
                    ))}
                </tbody>             
            </table>
           </div>
        </div>
    )
}

export default CadContainerSubcategoria;