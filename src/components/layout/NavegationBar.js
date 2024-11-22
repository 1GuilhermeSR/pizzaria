import styles from './styles/navegation.module.css'
import logo from '../img/Logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState, useEffect} from 'react';
import { FaHouse, FaBoxArchive,  } from "react-icons/fa6";
import { BiCategory, BiSolidCategory, BiBox, BiSolidBox, BiCog, BiSolidCog  } from "react-icons/bi";
import { BsTicketPerforated, BsTicketPerforatedFill} from "react-icons/bs";
import { MdOutlineCategory,MdCategory } from "react-icons/md"
import { LiaCogSolid } from "react-icons/lia";
import { PiHouseLineBold,PiHouseLineFill  } from "react-icons/pi";

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
    function irSubcategoria(){
        setAtual('subcategoria')
        navigate('/subcategoria')
    }
    function irCupom(){
        setAtual('cupom')
        navigate('/cupom')
    }
    function irConfiguracao(){
        setAtual('configuracao')
        navigate('/configuracao')
    }

    function irCadastroProduto(){
        navigate('/cadastroProduto')
    }


    return(
        <div className={styles.main}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt="" />
            </div>

            <div className={styles.content}>
                <div className={styles.botoes}>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'inicio' })} onClick={irInicio}>{atual === 'inicio' ? <PiHouseLineFill /> : <PiHouseLineBold />}Inicio</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'produto' })} onClick={irProduto}>{atual == 'produto' ? <BiSolidBox/> : <BiBox/>} Produtos</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'categoria' })} onClick={irCategoria}>{atual == 'categoria' ? <BiSolidCategory/> : <BiCategory/>} Categorias</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'subcategoria' })} onClick={irSubcategoria}>{atual == 'subcategoria' ? <MdCategory/> : <MdOutlineCategory/>} Subcategorias</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'cupom' })} onClick={irCupom}>{atual == 'cupom' ? <BsTicketPerforatedFill/> : <BsTicketPerforated/>} Cupons</button>
                   <button className={classNames(styles.btn, {[styles.ativo]: atual == 'configuracao' })} onClick={irConfiguracao}>{atual == 'configuracao' ? <BiSolidCog/> : <BiCog/>}Configurações</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default NavegationBar;