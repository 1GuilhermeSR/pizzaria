import NavegationBar from "./layout/NavegationBar";
import Pedidos from "./Pedidos";
import styles from './styles/inicio.module.css'
import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { PiNote } from "react-icons/pi";
function Inicio() {
    const pedidos = [
        {
            numeroPedido: 139,
            dataPedido: "29/08/2024 20:24",
            produtos: [
                {
                    nome: "Pizza marguerita",
                    tamanho: "Pequena (4 fatias)",
                    preco: 54.99
                },
                {
                    nome: "Pizza calabresa",
                    tamanho: "Média (6 fatias)",
                    preco: 65.99
                }
            ],
            enderecoEntrega: {
                rua: "Rua dos Sonhos, 123",
                bairro: "Bairro Imaginário",
                cidade: "Cidade dos Contos",
                estado: "SP",
                cep: "12345-678"
            },
            formaPagamento: "Cartão com final 3456",
            total: 120.98,
            status: 1, // Em produção
            observacao: "Sem cebola."
        },
        {
            numeroPedido: 140,
            dataPedido: "30/08/2024 18:45",
            produtos: [
                {
                    nome: "Pizza quatro queijos",
                    tamanho: "Grande (8 fatias)",
                    preco: 75.50,
                    tipo: 1
                }
            ],
            enderecoEntrega: {
                rua: "Avenida das Estrelas, 456",
                bairro: "Bairro Celestial",
                cidade: "Cidade das Nuvens",
                estado: "RJ",
                cep: "98765-432"
            },
            formaPagamento: "Cartão com final 1234",
            total: 75.50,
            status: 0, // A caminho
            observacao: "Sem borda recheada."
        },
        {
            numeroPedido: 141,
            dataPedido: "01/09/2024 12:15",
            produtos: [
                {
                    nome: "Pizza pepperoni",
                    tamanho: "Média (6 fatias)",
                    preco: 59.90,
                    tipo: 1
                },
                {
                    nome: "Coca-Cola",
                    tamanho: "2 Litros",
                    preco: 10.00,
                    tipo: 2
                }
            ],
            enderecoEntrega: {
                rua: "Rua do Sol",
                numero: 789,
                bairro: "Centro",
                cidade: "Cidade do Horizonte",
                estado: "MG",
                cep: "65432-109"
            },
            formaPagamento: "Dinheiro (troco para R$100)",
            total: 69.90,
            status: 0, // Pedido feito
            observacao: "Troco para R$100, por favor."
        },
        {
            numeroPedido: 142,
            dataPedido: "02/09/2024 21:30",
            produtos: [
                {
                    nome: "Pizza frango com catupiry",
                    tamanho: "Pequena (4 fatias)",
                    preco: 50.00,
                    tipo: 1
                },
                {
                    nome: "Suco de laranja",
                    tamanho: "1 Litro",
                    preco: 8.00,
                    tipo: 2
                }
            ],
            enderecoEntrega: {
                rua: "Travessa Lua, 321",
                bairro: "Vila Estelar",
                cidade: "Cidade do Cometa",
                estado: "ES",
                cep: "32109-876"
            },
            formaPagamento: "Pix",
            total: 58.00,
            status: 0, // Concluído
            observacao: ""
        },
        {
            numeroPedido: 143,
            dataPedido: "03/09/2024 19:05",
            produtos: [
                {
                    nome: "Pizza portuguesa",
                    tamanho: "Grande (8 fatias)",
                    preco: 70.00
                },
                {
                    nome: "Guaraná",
                    tamanho: "1,5 Litros",
                    preco: 9.50
                }
            ],
            enderecoEntrega: {
                rua: "Rua Estrela do Mar, 654",
                bairro: "Bairro Oceânico",
                cidade: "Cidade da Praia",
                estado: "BA",
                cep: "87654-321"
            },
            formaPagamento: "Cartão com final 6789",
            total: 79.50,
            status: 1, // Em produção
            observacao: "Com azeitona."
        }
    ];
    const [dataIni, setDataIni] = useState(null);
    const [dataFin, setDataFin] = useState(null);


    return (
        <>
            <NavegationBar />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.topo}>
                        <h1 className={styles.titulo}> Pedidos</h1>
                        <p> Visualize os pedidos dos clientes</p>
                    </div>
                    <div className={styles.containerPedidos}>
                        <div id={styles.containerHeader}>
                            <PiNote/><p id={styles.headerLabel}> Pedidos</p>
                        </div>
                        <div id={styles.filtros}>
                            <div id={styles.filtroLabel}><p>Filtros: </p></div>
                            <div id={styles.inputFiltros}>
                                <div id={styles.datas}>
                                    <div id={styles.dataIni}>
                                        <p className={styles.dataIniLabel}>Data Inicial:</p>
                                        <DatePicker
                                            selected={dataIni}
                                            onChange={(date) => setDataIni(date)}
                                            dateFormat="dd/MM/yyyy"
                                            customInput={
                                                <input
                                                    placeholder="Select a date"
                                                    className={styles.uiInput}
                                                    style={{ width: '100%' }}
                                                />
                                            }
                                        />
                                    </div>
                                    <div id={styles.dataFin}>
                                        <p className={styles.dataFinLabel}>Data Final:</p>
                                        <DatePicker
                                            selected={dataFin}
                                            onChange={(date) => setDataFin(date)}
                                            dateFormat="dd/MM/yyyy"
                                            customInput={
                                                <input
                                                    placeholder="Select a date"
                                                    className={styles.uiInput}
                                                    style={{ width: '100%' }}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                                <div className={styles.status}>
                                    <p id={styles}>Status do pedido: </p>
                                    <div className={styles.radioGroup}>
                                        <input
                                            type="radio"
                                            id="todos"
                                            name="status"
                                            value="todos"
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="todos" className={styles.chkLabel}>Todos</label>

                                        <input
                                            type="radio"
                                            id="pendentes"
                                            name="status"
                                            value="pendentes"
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="pendentes" className={styles.chkLabel}>Pendentes</label>

                                        <input
                                            type="radio"
                                            id="em-producao"
                                            name="status"
                                            value="em-producao"
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="em-producao" className={styles.chkLabel}>Em Produção</label>

                                        <input
                                            type="radio"
                                            id="saiu-para-entrega"
                                            name="status"
                                            value="saiu-para-entrega"
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="saiu-para-entrega" className={styles.chkLabel}>Saiu para Entrega</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={styles.divisor}></div>                                                    
                        <Pedidos listaPedidos={pedidos}></Pedidos>
                    </div>



                </div>

            </div>
        </>

    )
}

export default Inicio;