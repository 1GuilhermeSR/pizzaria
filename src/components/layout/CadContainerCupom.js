import styles from './styles/cadContainerCupom.module.css'
import { BiBox, BiSolidBox} from "react-icons/bi";
import { FaListUl,FaRegEdit } from "react-icons/fa";
import {CiTrash } from "react-icons/ci";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function CadContainerCupom(){

    const navigate = useNavigate()
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [idCupom, setIdCupom] = useState("");
    const [cupons, setCupons] = useState([""]);
    const [cupomCad, setCupomCad] = useState({
        nome : '',
        desconto: '',
        dataExpiracao: '',        
        ativo: true        
    })
    const url = "http://localhost:3001/cupons";

    useEffect(() => {
        buscarCupons();
     }, []);
 
     async function buscarCupons(){
         try{
             var response = await axios.get(url, {
                params: {
                  ativo: true, 
                },
              });
             setCupons(response.data);  
         }catch (error) {
             console.error('Erro ao buscar Cupons:', error);
         }
     } 

    async function cadastrarCupom(){
        debugger
        if(validarForm()){
            if(idCupom == ''){
                var response = await axios.post("http://localhost:3001/cupons/", cupomCad)
                if (response.status == 201 ){
                    alert("Cupom cadastro com sucesso")
                    buscarCupons()
                    limparForm()                
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                }
            }
            else{
                var response = await axios.put("http://localhost:3001/cupons/" + idCupom, cupomCad)
                if (response.status == 200 ){
                    alert("Cupom editado com sucesso")                    
                    fecharModal()
                }
                else {
                    alert("Algo deu errado, verifique o console")
                    console.log(response)
                } 
            }
           
        }
    } 

    async function removerCupom(cupomR) {        
        cupomR.ativo = false;
        var response = await axios.put("http://localhost:3001/cupons/" + cupomR.id, cupomR)
        if (response.status == 200 ){
            alert("Cupom excluido com sucesso")
            buscarCupons()
        }
        else {
            alert("Algo deu errado, verifique o console")
            console.log(response)
        } 

    }

    function validarForm(){
        if(cupomCad.nome == ''){
            alert("Preencha o nome do cupom!")
            return false
        }
        else if(cupomCad.desconto == ''){
            alert("Preencha o desconto do cupom!")
            return false
        }
        else if(cupomCad.dataExpiracao == ''){
            alert("Preencha a data de expiração do cupom!")
            return false
        }       
        return true
    }

    function limparForm(){
        setIdCupom('')
        setCupomCad({...cupomCad,
            nome : '',
            desconto: '',
            dataExpiracao: '',            
            ativo: true   
        })
    }

    function abrirModal() {
        setIsOpen(true)
    }

    function fecharModal() {
        setIsOpen(false)
        limparForm();
        buscarCupons();
    }

    function editar(cupomE){
        abrirModal()
        setIdCupom(cupomE.id) 
        setCupomCad({...cupomCad,
            nome : cupomE.nome,
            desconto: cupomE.desconto,
            dataExpiracao: cupomE.dataExpiracao,
            ativo: true   
        })
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.titulo}>
                <div className={styles.containerSpanTitulo}> <FaListUl/><span>Lista de cupons</span></div>
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
                            onClick={() => editar(cupom)}                        
                        />
                        <CiTrash
                            className={styles.iconDelete}
                            onClick={() => removerCupom(cupom)}
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
                            <h2>Cadastro de cupom</h2>
                            <button onClick={fecharModal}><IoMdClose /></button>
                        </div>

                        <div className={styles.modalContainerInputs}>
                            <div className={styles.modalInputLinha1}>
                                <div className={styles.containerNome}>
                                    <label htmlFor="input">Nome</label>
                                    <input type="text" name="nome" value={cupomCad.nome} onChange={(e) =>setCupomCad({...cupomCad,  nome: e.target.value})}/>
                                </div>
                                <div className={styles.containerCategoria}>
                                    <label htmlFor="input">Data de expiração</label>
                                    <input type="date" name="categoria" id="categoria" value={cupomCad.dataExpiracao} onChange={(e) =>setCupomCad({...cupomCad,  dataExpiracao: e.target.value})}/>                             
                                </div>
                            </div>
                            <div className={styles.modalInputLinha2}>
                                <div className={styles.containerNome}>
                                    <label htmlFor="input">Desconto</label>
                                    <input type="number" name="Tamanho" value={cupomCad.desconto} onChange={(e) =>setCupomCad({...cupomCad,  desconto: e.target.value})}/>
                                </div>                               
                            </div>
                        </div>

                        <button className={styles.btnSalvarModal} onClick={cadastrarCupom}>Salvar</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CadContainerCupom;