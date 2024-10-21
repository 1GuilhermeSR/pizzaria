import styles from './styles/pedidos.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { IoPizza } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiSolidDrink } from "react-icons/bi";
import { TfiMoney } from "react-icons/tfi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbBrandCashapp } from "react-icons/tb";
function Pedidos({ listaPedidos, status, dataIni, dataFin }) {

    const pedidosPendentes = listaPedidos.filter(p => p.status == 0);
    const pedidosProducao = listaPedidos.filter(p => p.status == 1);
    const pedidosEntrega = listaPedidos.filter(p => p.status == 2);

    function retornarStatus(Status){
        if(Status == 0){
            return(
                <><GoDotFill color='red'/> <span className={styles.statusLabel}>Pendente</span></>
            )
        }
        else if(Status == 1){
            return(
                <><GoDotFill color='orange'/> <span className={styles.statusLabel}>Em Produção</span></>
            )
        }
        else if(Status == 2){
            return(
                <><GoDotFill color='blue'/> <span className={styles.statusLabel}>Saiu para Entrega</span></>
            )
        }
        else if(Status == 3){
            return(
                <><GoDotFill color='green'/> <span className={styles.statusLabel}>Concluído</span></>
            )
        }
        else if(Status == 4){
            return(
                <><GoDotFill color='black'/> <span className={styles.statusLabel}>Cancelado</span></>
            )
        }
    }

    return (
        <div className={styles.main}>
            {
                pedidosPendentes.length > 0 && (status == 'pendentes' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos Pendentes</h2><div id={styles.linha1}><ul>{pedidosPendentes.map((pedido) => (
                    <li>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza/></div><div className={styles.produtoNome}>{pedido.produtos.filter( f => f.tipo == 1).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink/></div> <div className={styles.bebidaNome}>{pedido.produtos.filter( f => f.tipo == 2).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp/></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt/></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
            {
                pedidosProducao.length > 0 && (status == 'em-producao' || status == 'todos')?(<><h2 className={styles.pedidoLabel}>Pedidos em Produção</h2><div id={styles.linha1}><ul>{pedidosProducao.map((pedido) => (
                    <li>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza/></div><div className={styles.produtoNome}>{pedido.produtos.filter( f => f.tipo == 1).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink/></div> <div className={styles.bebidaNome}>{pedido.produtos.filter( f => f.tipo == 2).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp/></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt/></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
            {
                pedidosEntrega.length > 0 && (status == 'saiu-para-entrega' || status == 'todos') ?  (<><h2 className={styles.pedidoLabel}>Pedidos Para Entregar</h2><div id={styles.linha1}><ul>{pedidosEntrega.map((pedido) => (
                    <li>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza/></div><div className={styles.produtoNome}>{pedido.produtos.filter( f => f.tipo == 1).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink/></div> <div className={styles.bebidaNome}>{pedido.produtos.filter( f => f.tipo == 2).map((produto, index, array) =>(<span>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp/></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt/></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
        </div>
    )
}

export default Pedidos;