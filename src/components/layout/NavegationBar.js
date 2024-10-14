import styles from './styles/navegation.module.css'
import logo from '../img/Logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState, useEffect} from 'react';


function NavegationBar(){
    const navigate = useNavigate()
    const location = useLocation();
    const [atual, setAtual] = new useState('')

    useEffect(() => {
        const path = location.pathname.split('/')[1];
        setAtual(path || 'inicio');
    }, [location]);

    function irInicio(){
        setAtual('inicio')
        navigate('/inicio')
    }
    function irProduto(){
        setAtual('produto')
        navigate('/produto')
    }
    function irCategoria(){
        setAtual('categoria')
        navigate('/categoria')
    }
    function irCupom(){
        setAtual('cupom')
        navigate('/cupom')
    }
    function irConfiguracao(){
        setAtual('configuracao')
        navigate('/configuracao')
    }


    return(
        <div className={styles.main}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt="" />
            </div>

            <div className={styles.content}>
                <div className={styles.botoes}>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'inicio' })} onClick={irInicio}>Inicio</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'produto' })} onClick={irProduto}>Produtos</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'categoria' })} onClick={irCategoria}>Categorias</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'cupom' })} onClick={irCupom}>Cupons</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'configuracao' })} onClick={irConfiguracao}>Configurações</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default NavegationBar;