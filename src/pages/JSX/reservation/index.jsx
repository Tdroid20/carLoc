import React from "react";
import '../../../assets/css/reservation.css';
import carImg from "../../../assets/img/car1.png"
import Footer from "../../../components/Footer/footer";
import Header from "../../../components/Header/header";

const Reservation = () => {
    return (
        <>

        {/* Header */}

        <Header />

        {/* Main */}

        <div className="main">
            <h1 className="titleRV">Reservas</h1>

            <div className="cards">
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
            </div>
        </div>

        {/* Footer */}

        <Footer />

        </>
    )
}

export default Reservation;