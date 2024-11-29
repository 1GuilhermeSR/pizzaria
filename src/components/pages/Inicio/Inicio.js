import NavegationBar from "../../layout/NavegationBar";
import Pedidos from "./Pedidos";
import styles from './styles/inicio.module.css'
import React from 'react'
import { useState } from 'react';
import moment from 'moment';
function Inicio() {
    const [status, setStatus] = useState("todos");
    const [dataIniF, setDataIniF] = useState("");
    const [dataFinF, setDataFinF] = useState("");
    
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    var dataIni;
    var dataFin;



    const formatarDataIni = (e) => {
        e.preventDefault()
        dataIni = moment(e.target.value, 'YYYY-MM-DD', true);
        if (dataIni.isValid()) {
            setDataIniF(dataIni.format('DD/MM/YYYY'));
        }
        else if (dataIniF != "") { setDataIniF("") }
    }

    const formatarDataFin = (e) => {
        e.preventDefault()
        dataFin = moment(e.target.value, 'YYYY-MM-DD', true);
        if (dataFin.isValid()) {
            setDataFinF(dataFin.format('DD/MM/YYYY'));
        }
        else if (dataFinF != "") { setDataFinF("") }
    }


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

                        <div id={styles.filtros}>
                            <div id={styles.filtroLabel}><p>Filtros: </p></div>
                            <div id={styles.inputFiltros}>
                                <div id={styles.datas}>
                                    <div id={styles.dataIni}>
                                        <p className={styles.dataIniLabel}>Data Inicial:</p>
                                        <input
                                            type="text"
                                            className={styles.uiInput}
                                            onChange={formatarDataIni}
                                            placeholder="" // Remove o placeholder                                                                                   
                                            onFocus={(e) => e.target.type = 'date'}  // Muda para 'date' ao focar
                                            onBlur={(e) => {
                                                if (!e.target.value) e.target.type = 'text'; // Volta para 'text' se o campo estiver vazio
                                                //formatarDataIni(e);
                                            }}
                                        />
                                    </div>
                                    <div id={styles.dataFin}>
                                        <p className={styles.dataFinLabel}>Data Final:</p>
                                        <input
                                            type="text"
                                            className={styles.uiInput}
                                            onChange={formatarDataFin}
                                            placeholder="" // Remove o placeholder                                                                                   
                                            onFocus={(e) => e.target.type = 'date'}  // Muda para 'date' ao focar
                                            onBlur={(e) => {
                                                if (!e.target.value) e.target.type = 'text'; // Volta para 'text' se o campo estiver vazio
                                                //formatarDataFin(e)
                                            }}
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
                                            checked={status == 'todos'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="todos" className={styles.chkLabel}>Todos</label>

                                        <input
                                            type="radio"
                                            id="pendentes"
                                            name="status"
                                            value="pendentes"
                                            checked={status == 'pendentes'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="pendentes" className={styles.chkLabel}>Pendentes</label>

                                        <input
                                            type="radio"
                                            id="em-producao"
                                            name="status"
                                            value="em-producao"
                                            checked={status == 'em-producao'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="em-producao" className={styles.chkLabel}>Em Produção</label>

                                        <input
                                            type="radio"
                                            id="saiu-para-entrega"
                                            name="status"
                                            value="saiu-para-entrega"
                                            checked={status == 'saiu-para-entrega'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="saiu-para-entrega" className={styles.chkLabel}>Saiu para Entrega</label>

                                        <input
                                            type="radio"
                                            id="concluidos"
                                            name="status"
                                            value="concluidos"
                                            checked={status == 'concluidos'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="concluidos" className={styles.chkLabel}>Concluidos</label>

                                        <input
                                            type="radio"
                                            id="cancelados"
                                            name="status"
                                            value="cancelados"
                                            checked={status == 'cancelados'}
                                            onChange={handleStatusChange}
                                            className={styles.chkStatus}
                                        />
                                        <label htmlFor="cancelados" className={styles.chkLabel}>Cancelados</label>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id={styles.divisor}></div>
                        <Pedidos status={status} dataIni={dataIniF} dataFin={dataFinF}></Pedidos>
                    </div>
                </div>               
            </div>
        </>

    )
}

export default Inicio;