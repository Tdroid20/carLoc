import React from "react";
import fotocar from '../../assets/img/carmodal.png'
import '../../assets/css/modal.css'


export const Modal = () => {

    return (

        <div>

            <div className="linhamodal">

                <img className="imgModal" src={fotocar} alt="" />

                <p className="nomeCarModal">Onix2.0</p>

                <div className="inputsModal">

                    <input type="text" className="inputModal" placeholder="2 Portas" />
                    <input type="text" className="inputModal" placeholder="Airbag" />
                    <input type="text" className="inputModal" placeholder="5 pessoas" />
                    <input type="text" className="inputModal" placeholder="Locadora Matriz" />

                    <button className="btReservar">Reservar</button>

                </div>

            </div>


        </div>
    );

}