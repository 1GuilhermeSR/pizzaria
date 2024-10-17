import styles from './styles/pedidos.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { IoPizza } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
function Pedidos({ listaPedidos }) {

    const pedidosPendentes = listaPedidos.filter(p => p.status == 0);
    const pedidosProducao = listaPedidos.filter(p => p.status == 1);
    const pedidosEntrega = listaPedidos.filter(p => p.status == 2);


    return (
        <div className={styles.main}>
            {
                pedidosPendentes.length > 0 ? (<><h2 className={styles.pedidoLabel}>Pedidos Pendentes</h2><div id={styles.linha1}><ul>{pedidosPendentes.map((pedido) => (
                    <li>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza/></div><div className={styles.produtoNome}>{pedido.produtos.filter( f => f.tipo == 1).map((produto) =>(<span>{produto.nome}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink/></div> <div className={styles.bebidaNome}>{pedido.produtos.filter( f => f.tipo == 2).map((produto) =>(<span>{produto.nome}</span>))}</div></div>  <div className={styles.ContainerStatus}>status: {pedido.status}</div></div>
                            </div>
                            <div className={styles.pedidoFooter}>

                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
            {
                pedidosProducao.length > 0 ? (<div id={styles.linha2}></div>) : null
            }
            {
                pedidosEntrega.length > 0 ? (<div id={styles.linha3}></div>) : null
            }
        </div>
    )
}

export default Pedidos;