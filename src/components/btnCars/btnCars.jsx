import React from 'react'
import '../../assets/css/btn.css'

export const BtnCars = (props) =>
{
    if(props.trocarbotao === true){
        return (<button className="btnEditarCarros" onClick={props.Editar}>Editar</button>)
    }
    else{
        return (<button className="btnCadastrarCarros" onClick={props.Cadastrar}>Cadastrar</button>)
    }
}

export default BtnCars