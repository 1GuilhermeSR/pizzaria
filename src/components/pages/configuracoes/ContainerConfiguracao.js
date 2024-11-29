import styles from './styles/containerConfiguracao.module.css'
import { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
function ContainerConfiguracao() {
  const navigate = useNavigate()
  const location = useLocation();
  const [nomeRef, setNomeRef] = useState("");
  const [emailRef, setEmailRef] = useState(""); 
  const [editando, setEditando] = useState(false); // Estado para controlar se está em modo de edição
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const url = "http://localhost:3001/usuarios/";
  var tokenEmail = localStorage.getItem('usuario')

  useEffect(() => {
    buscarDadosUsuario();
  }, []);

  async function buscarDadosUsuario() {
    try {

      var response = await axios.get(url, {
        params: {
          email: tokenEmail,
        },
      });
      debugger
      setDados(response.data.find(user => user.email == tokenEmail));
      setNomeRef(response.data.find(user => user.email == tokenEmail).nome)
      setEmailRef(response.data.find(user => user.email == tokenEmail).email)
      debugger
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  async function editarUsuario() {
    try {
      debugger
      var response = await axios.put(url + dados.id, dados)      
      if (response.status == 200) {
        alert("Informações editadas com sucesso") 
        sair()      
      }
      else {
        alert("Algo deu errado, verifique o console")
        console.log(response)
      }
    } catch (error) {
      console.error('Erro ao editar informações:', error);
    }


  }

  const handleEditar = () => {
    setEditando(true);
  };

  const handleGravar = () => {
    editarUsuario()
    setEditando(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
  };

  function sair() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    navigate('/login')
  }

  return (
    <div className={styles.container}>
      <div className={styles.topo}>
        <div className={styles.containerDetalhes}>
          <FaRegUser />
          <div className={styles.spanDetalhes}>
            <span>{nomeRef}</span>
            <span>{emailRef}</span>
          </div>
          <button className={styles.btnSair} onClick={sair}>Sair</button>
        </div>
        <div className={styles.divisor}></div>
      </div>
      <div className={styles.Containersubtitulo}><h2>Informações Básicas</h2></div>
      <div className={styles.containerInputs}>
        <div className={styles.containerNome}>
          <label htmlFor="input">Nome completo</label>
          <input type="text" onChange={(e) => setDados({...dados, nome: e.target.value})} name="nome" defaultValue={dados.nome} readOnly={!editando} className={!editando ? styles.inputDesabilitado : null} />
        </div>
        <div className={styles.containerEmail}>
          <label htmlFor="input">Email</label>
          <input type="email" onChange={(e) => setDados({...dados, email: e.target.value})} name="email" defaultValue={dados.email} readOnly={!editando} className={!editando ? styles.inputDesabilitado : null} />
        </div>
        <div className={styles.containerSenha}>
          <label htmlFor="input">Senha</label>
          <input type="password" onChange={(e) => setDados({...dados, senha: e.target.value})} name="senha" defaultValue={dados.senha} readOnly={!editando} className={!editando ? styles.inputDesabilitado : null} />
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