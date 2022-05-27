import React, { useState } from "react";
import fotocar from '../../assets/img/carmodal.png';
import '../../assets/css/modal.css'


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
        
        let texto
        

        if (props.item.airbag === 'true')
        {
            texto = 'Com airbag'
        }

        else
        {
            texto = 'Sem airbag'
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
    
                        <button className="btReservar">Reservar</button>
    
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