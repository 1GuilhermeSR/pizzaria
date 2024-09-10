import styles from './styles/cadastro.module.css'

function Cadastro(){

    return(
        <div className={styles.main}>
            <div className={styles.container} >
                <div className={styles.card}>
                    <h1>Cadastro</h1>

                    <div id={styles.campoNome}>
                        <label>Nome</label>
                        <input />
                    </div>

                    <div id={styles.campoEmail}>
                        <label>Email</label>
                        <input />
                    </div>

                    <div id={styles.campoSenha}>
                        <label>Senha</label>
                        <input />
                    </div>

                    <div>
                        <button id={styles.btnSalvar}>Salvar</button>
                    </div>

                </div>

                
            </div>

        </div>
    )

}

export default Cadastro;