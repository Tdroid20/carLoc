import React from 'react';
import carImg from "../../assets/img/car1.png";

const CarReservation = () => {
    return (
        <>
            <div className="card">
                <div className="contentRV">
                    <img src={carImg} alt="Fiat Uno" id="carImage" />
                    <div className="infoRV">
                        <p className="carName">Fiat Uno 1.0</p>
                        <p className="carInfos">Data retirada: 22/05/2022</p>
                        <p className="carInfos">Horário retirada: 16:30</p>
                        <p className="carInfos">Data de devolução:  30/05/2022</p>
                    </div>
                <button className="deleteRV">Excluir Reserva</button>
            </div>
        </div>
        </>
    )
}

export default CarReservation;