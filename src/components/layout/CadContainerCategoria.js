import styles from './styles/cadContainerCategoria.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
function CadContainerCategoria(){
    // const categorias = [
    //     {
    //         id: 1,
    //         nome: "Pizza"            
    //     },
    //     {
    //         id: 2,
    //         nome: "Bebida"
    //     }
    // ];
    const navigate = useNavigate()
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [idCategoria, setIdCategoria] = useState("");
    const [categorias, setCategorias] = useState([""]);
    const [categoriaCad, setCategoriaCad] = useState({
        nome : '',       
        ativo: true        
    })
    const url = "http://localhost:3001/categorias";

    useEffect(() => {
        buscarCategorias();
     }, []);
 
     async function buscarCategorias(){
         try{
             var response = await axios.get(url, {
                params: {
                  ativo: true, 
                },
              });
             setCategorias(response.data);  
         }catch (error) {
             console.error('Erro ao buscar Categorias:', error);
         }
     } 

     async function cadastrarCategoria(){
        debugger
        if(validarForm()){
            if(idCategoria == ''){
                var response = await axios.post("http://localhost:3001/categorias/", categoriaCad)
                if (response.status == 201 ){
                    alert("Categoria cadastro com sucesso")
                    buscarCategorias()
                    limparForm()                
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                }
            }
            else{
                var response = await axios.put("http://localhost:3001/categorias/" + idCategoria, categoriaCad)
                if (response.status == 200 ){
                    alert("Categoria editado com sucesso")                    
                    fecharModal()
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                } 
            }
           
        }
    } 

    function editar(categoriaE){
        abrirModal()
        setIdCategoria(categoriaE.id) 
        setCategoriaCad({...categoriaCad,
            nome : categoriaE.nome,
            ativo: true   
        })
    }

    async function removerCategoria(cadastroR){
        cadastroR.ativo = false;
        var response = await axios.put("http://localhost:3001/categorias/" + cadastroR.id, cadastroR)
        if (response.status == 200 ){
            alert("Categoria excluido com sucesso")
            buscarCategorias()
        }
        else {
            alert("Algo deu errado, verifique o console")
            console.log(response)
        } 
    }
    function limparForm(){
        setIdCategoria('')
        setCategoriaCad({...categoriaCad,
            nome : '',
            ativo: true   
        })
    }
    function validarForm(){
        if(categoriaCad.nome == ''){
            alert("Preencha o nome da categoria!")
            return false
        }       
        return true
    }
    
    function abrirModal() {
        setIsOpen(true)
    }

    function fecharModal() {
        setIsOpen(false)
        limparForm();
        buscarCategorias();
    }
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de categorias</span></div>
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
                            onClick={() => editar(categoria)}                          
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerCategoria(categoria)}
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
                            <h2>Cadastro de categoria</h2>
                            <button onClick={fecharModal}><IoMdClose /></button>
                        </div>

                        <div className={styles.modalContainerInputs}>
                            <div className={styles.modalInputLinha1}>
                                <div className={styles.containerNome}>
                                    <label htmlFor="input">Nome</label>
                                    <input type="text" name="nome" value={categoriaCad.nome} onChange={(e) =>setCategoriaCad({...categoriaCad,  nome: e.target.value})}/>
                                </div>                                
                            </div>                           
                        </div>
                        <div className={styles.modalBottom}>
                            <button className={styles.btnSalvarModal} onClick={cadastrarCategoria}>Salvar</button>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default CadContainerCategoria;