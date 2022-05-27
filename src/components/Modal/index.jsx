import React, { useState } from "react";

import fotocar from '../../assets/img/carmodal.png';
import '../../assets/css/modal.css'
import { Link } from "react-router-dom";


export const Modal = (props) => {

    // Listar Informações

    const [portas, setPortas] = useState('')
    const [pessoas, setPessoas] = useState('')
    const [locadora, locadoraValor] = useState(0)

    const pegarInfos = () =>{
        setPortas(portas)
        setPessoas(pessoas)
        locadoraValor(locadora)
    }

    if (props.item !== undefined) {
        
        let texto;

        if(props.item.airbag === false)
        {
            texto= 'Sem airbag'
        }

        else
        {
            texto = 'Com airbag'
        }

        return (
    
            <div className={"div_modal " +props.mostrar}>
    
                <div className="linhamodal" onClick={() => {pegarInfos()}}>
    
                    <img className="imgModal" src={fotocar} alt="" />
    
                    <p className="nomeCarModal">{props.item.nome}</p>
    
                    <div className="inputsModal">
    
                        <input 
                        type="text" 
                        className="inputModal" 
                        readOnly 
                        value={props.item.portas + ' portas'}/>
    
                        <input 
                        type="text" 
                        className="inputModal" 
                        readOnly 
                        value={texto}/>
    
                        <input 
                        type="text" 
                        className="inputModal" 
                        readOnly 
                        value={props.item.npessoas + ' pessoas'}/>
    
                        <input 
                        type="text" 
                        className="inputModal" 
                        readOnly 
                        value={'Locadora ' +props.item.locadora.nome}/>
    
                        <Link to='/reservations' state={{id: props.item.id, locadoraId: props.item.locadoraId, guardarCarro: props.item.nome, guardarLocadora: props.item.locadora.nome}}><button className="btReservar">Reservar</button></Link>
    
                    </div>
    
                </div>
    
    
            </div>
        );
    }

    else{
        return (
            <>

            </>
        )
    }
    

}

export default Modal