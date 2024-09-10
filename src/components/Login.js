import styles from './styles/login.module.css'
import { FcGoogle } from "react-icons/fc";
import logo from './img/Logo.png'
import axios from 'axios';
import { useState } from 'react';
import UserService from '../UserService';
import { useNavigate } from 'react-router-dom';
import Cadastro from './Cadastro';
function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()
    const userService = new UserService();
    var usuario;

    async function validarUsuario(){
        try{
            const url = "http://localhost:3001/usuarios"
            const response =  await axios.get(url)
            usuario = response.data.find(user => user.email == email && user.senha == senha)  
            usuario != null ? fazerLogin() : alert("email ou senha incorretos")                     
        }
        catch(error){
            alert("Algo deu errado, tente novamente mais tarde")
        }    
    }

    function fazerLogin(){
        userService.definirUsuario(usuario);
        navigate('/inicio')
    }

    function criarCadastro(){
        navigate('/cadastro')
    }

    return(
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.container}>

                <div className={styles.card}>
                    <h1>Login</h1>

                    <div className={styles.campoEmail}>
                        <label htmlFor="input">Email:</label>
                        <input type='email' id={styles.inpEmail} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.campoSenha}>
                        <label htmlFor="input">Senha:</label>
                        <input type='password' onChange={(e) => setSenha(e.target.value)}/>
                    </div>

                    <button className={styles.btnLogin} onClick={validarUsuario}> Login</button>
                    <button className={styles.btnGoogle}>
                        <div id={styles.googleBtn}>
                            <FcGoogle id={styles.googleIcon}/>
                            <span id={styles.txtLoginGoogle}>Fazer Login com google</span>
                        </div>
                    </button>
                    
                    <div id={styles.cadastro}>
                        <span id={styles.txtCadastro} onClick={criarCadastro}>Criar conta</span>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}

export default Login;   