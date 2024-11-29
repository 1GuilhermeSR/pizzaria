import styles from './styles/cadContainer.module.css'
import { FaListUl, FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function CadContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const [idProduto, setIdProduto] = useState("");
    const [produtos, setProdutos] = useState([]);
    const [produtoCad, setProdutoCad] = useState({
        nome : '',
        categoria: '',
        tamanho: '',
        preco: '',
        ativo: true        
    })
    const url = "http://localhost:3001/produtos/";

    useEffect(() => {
        buscarProdutos();
     }, []);
 
     async function buscarProdutos(){
         try{
             var response = await axios.get(url, {
                params: {
                  ativo: true, 
                },
              });
             setProdutos(response.data);  
         }catch (error) {
             console.error('Erro ao buscar Produtos:', error);
         }
     } 

    async function cadastrarProduto(){  
        if(validarForm()){
            if(idProduto == ''){
                var response = await axios.post(url, produtoCad)
                if (response.status == 201 ){
                    alert("Produto cadastro com sucesso")
                    buscarProdutos()
                    limparForm()                
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                }
            }
            else{
                var response = await axios.put(url + idProduto, produtoCad)
                if (response.status == 200 ){
                    alert("Produto editado com sucesso")                    
                    fecharModal()
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                } 
            }
           
        }
    } 
    async function removerProduto(produtoR) {        
        produtoR.ativo = false;
        var response = await axios.put(url + produtoR.id, produtoR)
        if (response.status == 200 ){
            alert("Produto excluido com sucesso")
            buscarProdutos()
        }
        else {
            alert("Algo deu errado, verifique o console")
            console.log(response)
        } 

    }

    function validarForm(){
        if(produtoCad.nome == ''){
            alert("Preencha o nome do produto!")
            return false
        }
        else if(produtoCad.categoria == ''){
            alert("Preencha a categoria do produto!")
            return false
        }
        else if(produtoCad.preco == ''){
            alert("Preencha o preço do produto!")
            return false
        }
        else if(produtoCad.tamanho == ''){
            alert("Preencha o tamanho do produto!")
            return false
        }
        return true
    }

    function limparForm(){
        setIdProduto('')
        setProdutoCad({...produtoCad,
            nome : '',
            categoria: '',
            tamanho: '',
            preco: '',
            ativo: true   
        })
    }

    function abrirModal() {
        setIsOpen(true)
    }

    function fecharModal() {
        setIsOpen(false)
        limparForm();
        buscarProdutos();
    }

    function editar(produtoE){
        abrirModal()
        setIdProduto(produtoE.id) 
        setProdutoCad({...produtoCad,
            nome : produtoE.nome,
            categoria: produtoE.categoria,
            tamanho: produtoE.tamanho,
            preco: produtoE.preco,
            ativo: true   
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl /><span>Lista de produtos</span></div>
                <div className={styles.divisor}></div>
            </div>
            <div className={styles.topo}>
                <button onClick={abrirModal}>Novo</button>
                <input type="text" name="" id="" placeholder="Pesquisar" />
            </div>
            <div className={styles.containerTabela}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>CATEGORIA</th>
                            <th>TAMANHO</th>
                            <th>PRECO</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.categoria}</td>
                                <td>{produto.tamanho}</td>
                                <td>{"R$" + produto.preco}</td>
                                <td>
                                    <FaRegEdit
                                        className={styles.iconEdit}
                                        onClick={() => editar(produto)}
                                    />
                                    <CiTrash
                                        className={styles.iconDelete}
                                        onClick={() => removerProduto(produto)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} >
                    <div className={styles.modal} >
                        <div className={styles.modalTitulo} onClick={(e) => e.stopPropagation()}>
                            <h2>Cadastro de produto</h2>
                            <button onClick={fecharModal}><IoMdClose /></button>
                        </div>

                        <div className={styles.modalContainerInputs}>
                            <div className={styles.modalInputLinha1}>
                                <div className={styles.containerNome}>
                                    <label htmlFor="input">Nome</label>
                                    <input type="text" name="nome" value={produtoCad.nome} onChange={(e) =>setProdutoCad({...produtoCad,  nome: e.target.value})}/>
                                </div>
                                <div className={styles.containerCategoria}>
                                    <label htmlFor="input">Categoria</label>
                                    <select name="categoria" id="categoria" value={produtoCad.categoria} onChange={(e) =>setProdutoCad({...produtoCad,  categoria: e.target.value})}>
                                        <option value="" disabled selected>Selecione um categoria</option>
                                        <option value="pizza">Pizza</option>
                                        <option value="bebida">Bebida</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.modalInputLinha2}>
                                <div className={styles.containerNome}>
                                    <label htmlFor="input">Tamanho</label>
                                    <input type="text" name="Tamanho" value={produtoCad.tamanho} onChange={(e) =>setProdutoCad({...produtoCad,  tamanho: e.target.value})}/>
                                </div>
                                <div className={styles.containerCategoria}>
                                    <label htmlFor="input">Preço</label>
                                    <input type="number" name="preço" value={produtoCad.preco} onChange={(e) =>setProdutoCad({...produtoCad,  preco: e.target.value})}/>
                                </div>
                            </div>
                        </div>

                        <button className={styles.btnSalvarModal} onClick={cadastrarProduto}>Salvar</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CadContainer;