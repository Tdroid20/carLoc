import React from 'react'
import '../../assets/css/btn.css'

export const BtnLocadora = (props) =>
{
    if(props.trocarbotaopage7 === true){
        return (<button className="btnEditarCarros" onClick={props.Editarpage7}>Editar</button>)
    }
    else{
        return (<button className="btnCadastrarCarros" onClick={props.Cadastrarpage7}>Cadastrar</button>)
    }
}

export default BtnLocadora