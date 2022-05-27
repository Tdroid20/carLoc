import React, { useEffect, useState } from "react";
import '../../../assets/css/reservation.css';
import { ConfirmModal } from "../../../components/confirm/confirm";
import Footer from "../../../components/Footer/footer";
import Header from "../../../components/Header/header";
import CarReservation from "../../../components/Reservation/carList";
import { api } from "../../../services/api";

export class ReservationApi {
    list(setList) {
        api.get('/reservas').then(res => {
            setList(res.data)
        })
    }
}

export function Reservation() {

    const [list, setList] = useState([]);
    const [status, setStatus] = useState('off');
    const [act, setAct] = useState(false);
    const [uid, setUid] = useState();

    useEffect(() => {
        api.get('/reservas').then(res => {
            setList(res.data)
            setStatus('off')
        })
    }, []);


    return (
        <>
            { act && <ConfirmModal status={status} setStatus={setStatus} uid={uid} setUid={setUid} act={act} setAct={setAct} setList={setList} />}

        {/* Header */}

        <Header />

        {/* Main */}

        <main>
            <h1 className="titleRV">Reservas</h1>
                { list.map(x => <CarReservation obj={x} setList={setList} key={x.id} act={act} setAct={setAct} status={status} setStatus={setStatus} uid={uid} setUid={setUid} />) }
            <div className="cards">


            </div>
            </main>
        {/* Footer */}

        <Footer />

        </>
    )
}

export default Reservation;