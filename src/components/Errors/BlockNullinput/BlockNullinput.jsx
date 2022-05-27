import React from "react";
import './bni.css'

export const BlockNullInput = (props) => {

    let user = localStorage.getItem('token')
    user = JSON.parse(user)

    let field = props.field;
    let setStatus = props.setStatus;
    let Status = props.Status;

    console.log(`Opam ${Status}`)

    return (
        <div className={"opacityErro " + Status} >
                <div className={"modalErro " + Status} >
                    <div className="centerModalErro">
                        <div className="topModalErro">
                        <h1 className="titleModalErro">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <p className="space">Erro</p>
                            <i className="fa-solid fa-triangle-exclamation"></i></h1>
                        <p className="closeErro " onClick={() => setStatus('ok')}>X</p>
                        </div>
                        <div className="contentModalEditErro">
                            <p className="errorDescriptionErro">Ops! O Sr(a). <span className="Spotlight">{user.given_name}</span> não preencheu o campo <span className="Spotlight">{field}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}