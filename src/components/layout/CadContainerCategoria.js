import styles from './styles/cadContainerCategoria.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
function CadContainerCategoria(){
    const categorias = [
        {
            id: 1,
            nome: "Pizza"            
        },
        {
            id: 2,
            nome: "Bebida"
        }
    ];
    const navigate = useNavigate()
    const location = useLocation();
    
    function removerCategoria(){
        
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de categorias</span></div>
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
                        <th>AÇÕES</th>                       
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((categoria) => (
                    <tr key={categoria.id}>
                        <td>{categoria.id}</td>
                        <td>{categoria.nome}</td>                        
                        <td>
                        <FaRegEdit 
                            className={styles.iconEdit}                            
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerCategoria(categoria.id)}
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

export default CadContainerCategoria;