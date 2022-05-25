import React from "react";
import fotocar from '../../assets/img/carmodal.png'
import '../../assets/css/modal.css'


export const Modal = (props) => {

    return (

        <div className={"div_modal " +props.mostrar}>

            <div className="linhamodal">

                <img className="imgModal" src={fotocar} alt="" />

                <p className="nomeCarModal">Onix2.0</p>

                <div className="inputsModal">

                    <input type="text" className="inputModal" readOnly />
                    <input type="text" className="inputModal" readOnly />
                    <input type="text" className="inputModal" readOnly />
                    <input type="text" className="inputModal" readOnly />

                    <button className="btReservar">Reservar</button>

                </div>

            </div>


        </div>
    );

}

export default Modal