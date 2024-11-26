import styles from './styles/login.module.css'
import { FcGoogle } from "react-icons/fc";
import logo from './img/Logo.png'
import axios from 'axios';
import { useState } from 'react';
import UserService from '../UserService';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

import Cadastro from './Cadastro';

function Login() {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [isCadastro, setIsCadastro] = useState(false)
    const [cadastro, setCadastro] = useState({
        nome: '',
        email: '',
        senha: ''
    })
    const navigate = useNavigate()
    const userService = new UserService();
    const url = "http://localhost:3001/usuarios/"
    var usuario;

    async function validarUsuario() {
        try {

            const response = await axios.get(url, {
                params: {
                    email: email,
                    senha: senha,
                },
            })
            debugger
            usuario = response.data.find(user => user.email == email && user.senha == senha)
            usuario != null ? fazerLogin() : alert("email ou senha incorretos")
        }
        catch (error) {
            alert("Algo deu errado, tente novamente mais tarde")
        }
    }

    function fazerLogin() {
        userService.definirUsuario(usuario);
        navigate('/inicio')
    }

    function irCadastro() {
        setIsCadastro(true)
    }

    async function cadastrar() {
        if (validarForm()) {
            var response = await axios.post(url, cadastro)
            if (response.status == 201) {
                alert("Usuario cadastrado com sucesso")                
                limparForm()
                setIsCadastro(false)
            }
            else {
                alert("Algo deu errado, verifique o console")
                console.log(response)
            }
        }
    }

    function validarForm() {
        if (cadastro.nome == '') {
            alert("Preencha o nome!")
            return false
        }
        else if (cadastro.email == '') {
            alert("Preencha o email!")
            return false
        }
        else if (cadastro.senha == '') {
            alert("Preencha a senha!")
            return false
        }
        return true
    }

    function limparForm(){
        setCadastro({...cadastro, nome: '', email: '', senha: '' })
    }

    return (
        <div className={styles.main}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            {!isCadastro ? (
                <div className={styles.container}>
                    <div className={styles.card}>
                        <h1>Login</h1>

                        <div className={styles.campoEmail}>
                            <label htmlFor="input">Email:</label>
                            <input
                                type="email"
                                id={styles.inpEmail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={styles.campoSenha}>
                            <label htmlFor="input">Senha:</label>
                            <input
                                type="password"
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button
                            className={styles.btnLogin}
                            onClick={validarUsuario}
                        >
                            Login
                        </button>
                        <button className={styles.btnGoogle}>
                            <div id={styles.googleBtn}>
                                <FcGoogle id={styles.googleIcon} />
                                <span id={styles.txtLoginGoogle}>
                                    Fazer Login com Google
                                </span>
                            </div>
                        </button>

                        <div id={styles.cadastro}>
                            <span
                                id={styles.txtCadastro}
                                onClick={irCadastro}
                            >
                                Criar conta
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.containerCadastro}>
                    <div className={styles.card}>
                        <div className={styles.tituloCadastro}><IoIosArrowBack onClick={() => { setIsCadastro(false) }} /><h1>Cadastro</h1></div>

                        <div className={styles.campoNome}>
                            <label htmlFor="input">Nome Completo:</label>
                            <input
                                type="email"
                                value={cadastro.nome}
                                id={styles.inpEmail}
                                onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })}
                            />
                        </div>

                        <div className={styles.campoEmail}>
                            <label htmlFor="input">Email:</label>
                            <input
                                type="email"
                                value={cadastro.email}
                                id={styles.inpEmail}
                                onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.campoSenha}>
                            <label htmlFor="input">Senha:</label>
                            <input
                                value={cadastro.senha}
                                type="password"
                                onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })}
                            />
                        </div>

                        <button
                            className={styles.btnSalvar}
                            onClick={cadastrar}
                        >
                            Salvar
                        </button>

                    </div>
                </div>
            )}
        </div>
    )

}

export default Login;   