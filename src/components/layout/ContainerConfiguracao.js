import styles from './styles/containerConfiguracao.module.css'
import { useState, useRef } from 'react';
import { FaRegUser } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom';

function ContainerConfiguracao(){
    const navigate = useNavigate()
    const location = useLocation();
    const nomeRef = useRef();
    const emailRef = useRef();
    const senhaRef = useRef();
    const [editando, setEditando] = useState(false); // Estado para controlar se está em modo de edição
    const [dados, setDados] = useState({
      nome: "Guilherme Saldanha",
      email: "1guilhermesr1@gmail.com",
      senha: "senhafoda",
    });
    
  
    const handleEditar = () => {
      setEditando(true); 
    };
  
    const handleGravar = () => {
      setDados({
        nome: nomeRef.current.value,
        email: emailRef.current.value,
        senha: senhaRef.current.value,
      });
      setEditando(false);  
      
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDados({ ...dados, [name]: value });
    };

    function sair(){
      localStorage.removeItem('usuario');
      localStorage.removeItem('token');
      navigate('/login')
    }

    return(
        <div className={styles.container}>
            <div className={styles.topo}>
                <div className={styles.containerDetalhes}>
                     <FaRegUser/>
                     <div className={styles.spanDetalhes}>
                        <span>{dados.nome}</span>
                        <span>{dados.email}</span>                        
                     </div>
                     <button className={styles.btnSair} onClick={sair}>Sair</button>
                </div>
                <div className={styles.divisor}></div>
            </div>
            <div className={styles.Containersubtitulo}><h2>Informações Básicas</h2></div>
            <div className={styles.containerInputs}>
                <div className={styles.containerNome}>
                    <label htmlFor="input">Nome completo</label>
                    <input type="text" ref={nomeRef} name="nome" defaultValue={dados.nome} readOnly={!editando}  className={!editando ? styles.inputDesabilitado : null}  />
                </div>
                <div className={styles.containerEmail}>
                    <label htmlFor="input">Email</label>
                    <input type="email" ref={emailRef} name="email" defaultValue={dados.email} readOnly={!editando}  className={!editando ? styles.inputDesabilitado : null} />
                </div>
                <div className={styles.containerSenha}>
                    <label htmlFor="input">Senha</label>
                    <input type="password" ref={senhaRef} name="senha" defaultValue={dados.senha} readOnly={!editando} className={!editando ? styles.inputDesabilitado : null} />
                </div>
           </div>
           <div className={styles.containerButtons}>
                <button disabled={!editando} onClick={handleGravar} id={styles.btnGravar} className={!editando ? styles.btnDesabilitado : null}>Gravar</button>
                <button onClick={handleEditar} id={styles.btnEditar} className={editando ? styles.btnDesabilitado : null}>Editar</button>
           </div>
        </div>
    )
}

export default ContainerConfiguracao;