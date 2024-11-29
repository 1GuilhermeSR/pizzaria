import styles from './styles/pedidos.module.css';
import { useEffect, useState } from 'react';
import { IoPizza } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BiSolidDrink } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbBrandCashapp } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

function Pedidos({ status, dataIni, dataFin }) {
    const url = "http://localhost:3001/pedidos/";
    const [pedidosPendentes, setPedidosPendetes] = useState([]);
    const [pedidosProducao, setPedidosProducao] = useState([]);
    const [pedidosEntrega, setPedidosEntrega] = useState([]);
    const [pedidosConcluidos, setPedidosConcluidos] = useState([]);
    const [pedidosCancelados, setPedidosCancelados] = useState([]);
    const [listaPedidos, setListaPedidos] = useState([]);
    const [pedidosPendentesFiltrados, setPedidosPendentesFiltrados] = useState([]);
    const [pedidosProducaoFiltrados, setPedidosProducaoFiltrados] = useState([]);
    const [pedidosEntregaFiltrados, setPedidosEntregaFiltrados] = useState([]);
    const [pedidosConcluidosFiltrados, setPedidosConcluidosFiltrados] = useState([]);
    const [pedidosCanceladosFiltrados, setPedidosCanceladosFiltrados] = useState([]);
    const [pedidoSelecionado, setPedidoSelecionado] = useState({
        id: "",
        numeroPedido: "",
        dataPedido: "",
        produtos: [],
        formaPagamento: "",
        enderecoEntrega: {},
        total: "",
        observacao: "",
        status: ""
    });
    const [isOpen, setIsOpen] = useState(false);

    function parseDate(dateStr) {
        const [day, month, year] = dateStr.split("/").map(Number);
        return new Date(year, month - 1, day);
    }

    useEffect(() => {
        buscarPedidos()
    }, [])

    useEffect(() => {
        setPedidosPendetes(listaPedidos.filter(p => p.status == 0))
        setPedidosProducao(listaPedidos.filter(p => p.status == 1))
        setPedidosEntrega(listaPedidos.filter(p => p.status == 2))
        setPedidosConcluidos(listaPedidos.filter(p => p.status == 3))
        setPedidosCancelados(listaPedidos.filter(p => p.status == 4))
    }, [listaPedidos])

    async function buscarPedidos() {
        try {
            var response = await axios.get(url);
            setListaPedidos(response.data);
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    }

    useEffect(() => {
        if (dataIni != "" && dataFin != "") {
            setPedidosPendentesFiltrados(
                pedidosPendentes.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido >= dataIniF && dataPedido <= dataFinF;
                })
            );

            setPedidosProducaoFiltrados(
                pedidosProducao.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido >= dataIniF && dataPedido <= dataFinF;
                })
            );

            setPedidosEntregaFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido >= dataIniF && dataPedido <= dataFinF;
                })
            );
            setPedidosConcluidosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido >= dataIniF && dataPedido <= dataFinF;
                })
            );
            setPedidosCanceladosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido >= dataIniF && dataPedido <= dataFinF;
                })
            );

        }
        else if (dataFin != "" && dataIni == "") {
            setPedidosPendentesFiltrados(
                pedidosPendentes.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido <= dataFinF;
                })
            );

            setPedidosProducaoFiltrados(
                pedidosProducao.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido <= dataFinF;
                })
            );

            setPedidosEntregaFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido <= dataFinF;
                })
            );

            setPedidosConcluidosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido <= dataFinF;
                })
            );

            setPedidosCanceladosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataFinF = parseDate(dataFin);
                    return dataPedido <= dataFinF;
                })
            );
        }
        else if (dataIni != "" && dataFin == "") {
            setPedidosPendentesFiltrados(
                pedidosPendentes.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    return dataPedido >= dataIniF;
                })
            );

            setPedidosProducaoFiltrados(
                pedidosProducao.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    return dataPedido >= dataIniF;
                })
            );

            setPedidosEntregaFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    return dataPedido >= dataIniF;
                })
            );

            setPedidosConcluidosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    return dataPedido >= dataIniF;
                })
            );

            setPedidosCanceladosFiltrados(
                pedidosEntrega.filter((pedido) => {
                    const dataPedido = parseDate(pedido.dataPedido);
                    const dataIniF = parseDate(dataIni);
                    return dataPedido >= dataIniF;
                })
            );
        }
        else {
            setPedidosPendentesFiltrados(pedidosPendentes)
            setPedidosProducaoFiltrados(pedidosProducao)
            setPedidosEntregaFiltrados(pedidosEntrega)
            setPedidosConcluidosFiltrados(pedidosConcluidos)
            setPedidosCanceladosFiltrados(pedidosCancelados)
        }

    }, [dataIni, dataFin, pedidosPendentes, pedidosEntrega, pedidosProducao, pedidosConcluidos, pedidosCancelados]);



    function retornarStatus(Status) {
        if (Status == 0) {
            return (
                <><GoDotFill color='red' /> <span className={styles.statusLabel}>Pendente</span></>
            )
        }
        else if (Status == 1) {
            return (
                <><GoDotFill color='orange' /> <span className={styles.statusLabel}>Em Produção</span></>
            )
        }
        else if (Status == 2) {
            return (
                <><GoDotFill color='blue' /> <span className={styles.statusLabel}>Saiu para Entrega</span></>
            )
        }
        else if (Status == 3) {
            return (
                <><GoDotFill color='green' /> <span className={styles.statusLabel}>Concluído</span></>
            )
        }
        else if (Status == 4) {
            return (
                <><GoDotFill color='black' /> <span className={styles.statusLabel}>Cancelado</span></>
            )
        }
    }

    function abrirModal(pedido) {
        setPedidoSelecionado({
            ...pedidoSelecionado,
            id: pedido.id,
            numeroPedido: pedido.numeroPedido,
            dataPedido: pedido.dataPedido,
            produtos: pedido.produtos,
            formaPagamento: pedido.formaPagamento,
            enderecoEntrega: pedido.enderecoEntrega,
            total: pedido.total,
            observacao: pedido.observacao,
            status: pedido.status
        })
        setIsOpen(true)
    }

    function fecharModal() {
        setIsOpen(false)
        limparForm()
    }

    async function atualizarPedido(pedido) {
        debugger
        if (pedido.status == 3) {
            alert("Pedido ja se encontra concluído!")
            return
        }
        if (pedido.status == 4) {
            alert("Este pedido foi cancelado!")
            return
        }
        pedido.status += 1;
        var response = await axios.put(url + pedido.id, pedido);
        if (response.status == 200) {
            alert("Pedido atualizado com sucesso!");
            fecharModal();
            buscarPedidos();
        }
        else {
            alert("Algo deu errado, verifique o console");
            console.log(response)
            fecharModal()
        }
    }
    async function cancelarPedido(pedido) {
        if (pedido.status == 4) {
            alert("Este pedido ja se encontra cancelado!")
            return
        }
        pedido.status = 4;
        var response = await axios.put(url + pedido.id, pedido);
        if (response.status == 200) {
            alert("Pedido cancelado com sucesso!");
            fecharModal();
            buscarPedidos();
        }
        else {
            alert("Algo deu errado, verifique o console");
            console.log(response)
            fecharModal()
        }
    }


    function limparForm() {
        setPedidoSelecionado({
            ...pedidoSelecionado,
            id: "",
            numeroPedido: "",
            dataPedido: "",
            produtos: [],
            formaPagamento: "",
            enderecoEntrega: {},
            total: "",
            observacao: "",
            status: ""
        })
    }

    return (
        <div className={styles.main}>
            {

                pedidosPendentes.length > 0 && (status == 'pendentes' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos Pendentes</h2><div id={styles.linha1}><ul>{pedidosPendentesFiltrados.map((pedido) => (
                    <li key={pedido.numeroPedido} onClick={() => abrirModal(pedido)}>
                        <div className={styles.pedidoPendente} >
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedido.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedido.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
            {
                pedidosProducao.length > 0 && (status == 'em-producao' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos em Produção</h2><div id={styles.linha1}><ul>{pedidosProducaoFiltrados.map((pedido) => (
                    <li key={pedido.numeroPedido} onClick={() => abrirModal(pedido)}>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedido.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedido.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }
            {
                pedidosEntrega.length > 0 && (status == 'saiu-para-entrega' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos Para Entregar</h2><div id={styles.linha1}><ul>{pedidosEntregaFiltrados.map((pedido) => (
                    <li key={pedido.numeroPedido} onClick={() => abrirModal(pedido)}>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedido.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedido.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }

            {
                pedidosConcluidos.length > 0 && (status == 'concluidos' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos Concluidos</h2><div id={styles.linha1}><ul>{pedidosConcluidosFiltrados.map((pedido) => (
                    <li key={pedido.numeroPedido} onClick={() => abrirModal(pedido)}>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedido.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedido.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>
                ))}</ul></div></>) : null
            }
            {
                pedidosCancelados.length > 0 && (status == 'cancelados' || status == 'todos') ? (<><h2 className={styles.pedidoLabel}>Pedidos Cancelados</h2><div id={styles.linha1}><ul>{pedidosCanceladosFiltrados.map((pedido) => (
                    <li key={pedido.numeroPedido} onClick={() => abrirModal(pedido)}>
                        <div className={styles.pedidoPendente}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedido.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedido.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedido.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedido.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedido.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedido.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedido.enderecoEntrega.rua}, {pedido.enderecoEntrega.bairro} {pedido.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedido.observacao != null && pedido.observacao != "" ? pedido.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                    </li>


                ))}</ul></div></>) : null
            }

            {isOpen && (
                <div className={styles.modalOverlay} >
                    <div className={styles.modal} >
                        <div className={styles.modalTitulo} onClick={(e) => e.stopPropagation()}>
                            <h2>Pedido</h2>
                            <button onClick={fecharModal}><IoMdClose /></button>
                        </div>
                        <div className={styles.pedidoSelecionado}>
                            <div className={styles.pedidoHeader}>
                                <div className={styles.containerHeader}><span className={styles.idSpan}>#{pedidoSelecionado.numeroPedido}</span> <div className={styles.containerTotal}><span className={styles.totalSpan}>R$ {pedidoSelecionado.total}</span><span className={styles.totalLabel}>Valor total do pedido</span></div></div>
                            </div>
                            <div className={styles.pedidoBody}>
                                <div className={styles.containerProduto}><div className={styles.produtoIcon}><IoPizza /></div><div className={styles.produtoNome}>{pedidoSelecionado.produtos.filter(f => f.tipo == 1).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>
                                <div className={styles.containerBebidaStatus}><div className={styles.containerBebida}><div className={styles.bebidaIcon}><BiSolidDrink /></div> <div className={styles.bebidaNome}>{pedidoSelecionado.produtos.filter(f => f.tipo == 2).map((produto, index, array) => (<span key={produto.nome + index}>{produto.nome}{index < array.length - 1 ? ', ' : ''}</span>))}</div></div>  <div className={styles.ContainerStatus}>{retornarStatus(pedidoSelecionado.status)}</div></div>
                                <div className={styles.containerPagamento}><div className={styles.pagamentoIcon}><TbBrandCashapp /></div> <div className={styles.pagamentoNome}>{pedidoSelecionado.formaPagamento} </div></div>
                                <div className={styles.containerEndereco}><div className={styles.enderecoIcon}><FaMapMarkerAlt /></div> <div className={styles.enderecoNome}>{pedidoSelecionado.enderecoEntrega.rua}, {pedidoSelecionado.enderecoEntrega.bairro} {pedidoSelecionado.enderecoEntrega.cep}  </div></div>
                            </div>
                            <div className={styles.pedidoFooter}>
                                <div className={styles.containerObservacao}><span>Observação: </span> <span className={styles.observacaoNome}>{pedidoSelecionado.observacao != null && pedidoSelecionado.observacao != "" ? pedidoSelecionado.observacao : " (Sem Obsersação)"}</span></div>
                            </div>
                        </div>
                        <div className={styles.containerBtnModal}>
                            <button className={styles.btnCancelarPedido} onClick={() => cancelarPedido(pedidoSelecionado)}>Cancelar pedido</button>
                            <button className={styles.btnAtualizarStatus} onClick={() => atualizarPedido(pedidoSelecionado)}>Atualizar Status</button>
                            <div className={styles.teste}></div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Pedidos;