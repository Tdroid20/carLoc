import React from "react";
import '../../../assets/css/reservation.css';
import Footer from "../../../components/Footer/footer";
import Header from "../../../components/Header/header";
import CarReservation from "../../../components/Reservation/carList";

export const Reservation = () => {
    return (
        <>

        {/* Header */}

        <Header />

        {/* Main */}

        <main>
            <h1 className="titleRV">Reservas</h1>

            <div className="cards">
                <CarReservation />
            </div>
            </main>
        {/* Footer */}

        <Footer />

        </>
    )
}

export default Reservation;