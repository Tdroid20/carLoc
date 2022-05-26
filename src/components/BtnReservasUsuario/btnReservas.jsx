import React from 'react'
import '../../assets/css/btn.css'

export const BtnReservar = (props) =>
{
    if(props.trocarbtnreservar === true){
        return (<button className="botao_atualizar_page6" onClick={props.EditarReservas}>Editar</button>)
    }
    else{
        return (<button className="botao_atualizar_page6" onClick={props.CadastrarReservas}>Reservar</button>)
    }
}

export default BtnReservar