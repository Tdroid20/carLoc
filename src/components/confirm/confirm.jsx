import React from "react";
import { ReservationApi } from "../../pages/JSX/reservation";
import { api } from "../../services/api";
import './confirm.css'

export const ConfirmModal = (props) => {
    let setStatus = props.setStatus;
    let Status = props.status;
    let uid = props.uid;
    let setAct = props.setAct;

    return (
        <>
        <div className={"opacity " + Status}>
            <div className={"modalConfirm " + Status}>
                <div className="center">
                    <p className="AlertDesc">Você tem certeza que desejá excluir <span className="RedColor">permanentemente</span> essa reserva?</p>

                    <div className="options">
                        <button className="ConfirmRv" onClick={() => {
                            setStatus('off')
                        }}>Cancelar</button>

                        <button className="ConfirmRv" onClick={() => {
                            api.delete('reservas/' + uid).then(res => {
                                new ReservationApi().list(props.setList);
                                setStatus('off')
                                setAct(false)

                            })
                        }}>Excluir Reserva</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}