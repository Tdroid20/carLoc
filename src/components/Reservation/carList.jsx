import React, { useState } from 'react';
import carImg from "../../assets/img/car1.png";
import { ReservationApi } from '../../pages/JSX/reservation';
import { api } from '../../services/api';
import { ConfirmModal } from '../confirm/confirm';

const CarReservation = (props) => {
    let formatDateDelivery = props.obj.dataentrega
    let formatDate = props.obj.data
    let withdraw = props.obj.horario;
    let setAct = props.setAct;
    let act = props.act;
    let setStatus = props.setStatus;
    let Status= props.status;
    let uid = props.uid
    let setUid = props.setUid

    return (
        <>
           <div className="card">
                <div className="contentRV">
                    <img src={carImg} alt="Fiat Uno" id="carImage" />
                    <div className="infoRV">
                        <p className="carName">Fiat Uno 1.0</p>
                        <p className="carInfos">Data retirada: {formatDate}</p>
                        <p className="carInfos">Horário retirada: {withdraw}</p>
                        <p className="carInfos">Data de devolução:  {formatDateDelivery}</p>
                    </div>
                <button className={"deleteRV " + props.obj.id} onClick={() => {
                    setAct(true)
                    setUid(props.obj.id)
                    setStatus('on')
                }}>Excluir Reserva</button>
            </div>
        </div>
        </>
    )
}

export default CarReservation;