import styles from './styles/navegation.module.css'
import logo from '../img/Logo.png'
import { useNavigate } from 'react-router-dom';

function NavegationBar(){
    const navigate = useNavigate()
    function irProduto(){
        navigate('/produto')
    }

    return(
        <div className={styles.main}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt="" />
            </div>

            <div className={styles.content}>
                <div className={styles.botoes}>
                   <button>Inicio</button>
                   <button onClick={irProduto}>Produtos</button>
                   <button>Categorias</button>
                   <button>Cupons</button>
                   <button>Configurações</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default NavegationBar;