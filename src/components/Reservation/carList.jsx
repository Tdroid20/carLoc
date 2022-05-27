import React from 'react';
import carImg from "../../assets/img/car1.png";

const CarReservation = (props) => {
    let nameCar = props.obj.carro.nome
    let formatDateDelivery = props.obj.dataentrega.replace(/-/g, '/');
    let formatDate = props.obj.data.replace(/-/g, '/');
    let withdraw = props.obj.horario;
    let setAct = props.setAct;
    let setStatus = props.setStatus;
    let setUid = props.setUid;

    return (
        <>
           <div className="card">
                <div className="contentRV">
                    <img src={carImg} alt="Fiat Uno" id="carImage" />
                    <div className="infoRV">
                        <p className="carName">{nameCar}</p>
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