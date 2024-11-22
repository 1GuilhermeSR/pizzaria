import styles from './styles/cadContainerCategoria.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
function CadContainerCupom(){

    const cupons = [
        {
            id: 1,
            nome: "DescontoVerão",
            desconto: 10, 
            dataExpiracao: "2024-12-31"
        },
        {
            id: 2,
            nome: "FreteGratis",
            desconto: 15,
            dataExpiracao: "2025-01-15"
        },
        {
            id: 3,
            nome: "BlackFriday",
            desconto: 50, 
            dataExpiracao: "2024-11-30"
        },
        {
            id: 4,
            nome: "NatalSurpresa",
            desconto: 25, 
            dataExpiracao: "2024-12-25"
        },
        {
            id: 5,
            nome: "AnoNovoEconômico",
            desconto: 30, 
            dataExpiracao: "2025-01-01"
        }
    ];
    const navigate = useNavigate()
    const location = useLocation();

    function removerCupom(){
        
    }

    function irCadastro(){

    }
    
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de cupons</span></div>
                <div className={styles.divisor}></div>
            </div>
           <div className={styles.topo}>
                <button onClick={irCadastro}>Novo</button>
                <input type="text" name="" id="" placeholder="Pesquisar" />
           </div>
           <div className={styles.containerTabela}>
           <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th> 
                        <th>DESCONTO</th> 
                        <th>DATA EXPIRAÇÂO</th>
                        <th>AÇÕES</th>                             
                    </tr>
                </thead>
                <tbody>
                    {cupons.map((cupom) => (
                    <tr key={cupom.id}>
                        <td>{cupom.id}</td>
                        <td>{cupom.nome}</td>       
                        <td>{cupom.desconto + "%"}</td>   
                        <td>{cupom.dataExpiracao}</td>                
                        <td>
                        <FaRegEdit 
                            className={styles.iconEdit}                            
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerCupom(cupom.id)}
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

export default CadContainerCupom;