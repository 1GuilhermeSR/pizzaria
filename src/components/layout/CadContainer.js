import styles from './styles/cadContainer.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
function CadContainer(){
    const produtos = [
        {
            id: 1,
            nome: "Pizza Margherita",
            categoria: "pizza",
            subcategoria: "tradicional",
            preco: 25.00,
            tamanho: "media"
        },
        {
            id: 2,
            nome: "Pizza Pepperoni",
            categoria: "pizza",
            subcategoria: "gourmet",
            preco: 30.00,
            tamanho: "grande"
        },
        {
            id: 3,
            nome: "Refrigerante Coca-Cola",
            categoria: "bebida",
            subcategoria: "refrigerante",
            preco: 5.00,
            tamanho: "350ml"
        },
        {
            id: 4,
            nome: "Refrigerante Fanta",
            categoria: "bebida",
            subcategoria: "refrigerante",
            preco: 5.00,
            tamanho: "600ml"
        },
        {
            id: 5,
            nome: "Cerveja Heineken",
            categoria: "bebida",
            subcategoria: "cerveja",
            preco: 8.00,
            tamanho: "600ml"
        },
        {
            id: 6,
            nome: "Pizza Quatro Queijos",
            categoria: "pizza",
            subcategoria: "gourmet",
            preco: 28.00,
            tamanho: "pequena"
        },
        {
            id: 7,
            nome: "Suco de Laranja",
            categoria: "bebida",
            subcategoria: "suco",
            preco: 6.00,
            tamanho: "1L"
        },
        {
            id: 8,
            nome: "Pizza Portuguesa",
            categoria: "pizza",
            subcategoria: "tradicional",
            preco: 27.00,
            tamanho: "media"
        },
        {
            id: 9,
            nome: "Água Mineral",
            categoria: "bebida",
            subcategoria: "agua",
            preco: 3.00,
            tamanho: "600ml"
        },
        {
            id: 10,
            nome: "Pizza Calabresa",
            categoria: "pizza",
            subcategoria: "tradicional",
            preco: 26.00,
            tamanho: "grande"
        }
    ];
    function removerProduto(){
        
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de produtos</span></div>
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
                        <th>SUBCATEGORIA</th>
                        <th>TAMANHO</th>
                        <th>PRECO</th>                        
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.subcategoria}</td>
                        <td>{produto.tamanho}</td>
                        <td>{produto.preco}</td>
                        <td>
                        <FaRegEdit 
                            className={styles.iconEdit}
                            
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerProduto(produto.id)}
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

export default CadContainer;