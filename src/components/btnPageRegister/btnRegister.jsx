import React from 'react'
import '../../assets/css/btn.css'

export const BtnRegister = (props) =>
{
    if(props.trocarbotaopage6 === true){
        return (<button className="botao_atualizar_page6" onClick={props.Editarpage6}>Editar</button>)
    }
    else{
        return (<button className="botao_atualizar_page6" onClick={props.Cadastrarpage6}>Atualizar</button>)
    }
}

export default BtnRegister