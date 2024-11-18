import styles from './styles/containerConfiguracao.module.css'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa"
function ContainerConfiguracao(){

    const [editando, setEditando] = useState(false); // Estado para controlar se está em modo de edição
    const [dados, setDados] = useState({
      nome: "Guilherme Saldanha",
      email: "1guilhermesr1@gmail.com",
      senha: "senhafoda",
    });
  
    const handleEditar = () => {
      setEditando(true); // Habilita o modo de edição
    };
  
    const handleGravar = () => {
      setEditando(false); // Desabilita o modo de edição
      console.log("Dados gravados:", dados); // Aqui você pode adicionar lógica para salvar os dados
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDados({ ...dados, [name]: value }); // Atualiza os dados conforme o usuário digita
    };

    return(
        <div className={styles.container}>
            <div className={styles.topo}>
                <div className={styles.containerDetalhes}>
                     <FaRegUser/>
                     <div className={styles.spanDetalhes}>
                        <span>Guilherme Saldanha</span>
                        <span>1guilhermesr1@gmail.com</span>                        
                     </div>
                     <button className={styles.btnSair}>Sair</button>
                </div>
                <div className={styles.divisor}></div>
            </div>
            <div className={styles.Containersubtitulo}><h2>Informações Básicas</h2></div>
            <div className={styles.containerInputs}>
                <div className={styles.containerNome}>
                    <label htmlFor="input">Nome completo</label>
                    <input type="text" name="nome" value={dados.nome} readOnly={!editando} onChange={handleChange}  />
                </div>
                <div className={styles.containerEmail}>
                    <label htmlFor="input">Email</label>
                    <input type="email" name="email" value={dados.email} readOnly={!editando} onChange={handleChange} />
                </div>
                <div className={styles.containerSenha}>
                    <label htmlFor="input">Senha</label>
                    <input type="password" name="senha" value={dados.senha} readOnly={!editando} onChange={handleChange}  />
                </div>
           </div>
           <div className={styles.containerButtons}>
                <button disabled={!editando} onClick={handleGravar} className={styles.btnGravar}>Gravar</button>
                <button onClick={handleEditar} className={styles.btnEditar}>Editar</button>
           </div>
        </div>
    )
}

export default ContainerConfiguracao;