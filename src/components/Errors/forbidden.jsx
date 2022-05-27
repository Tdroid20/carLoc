/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './BlockNullinput/BlockNullinput';
import Exclamation from '../../assets/svg/exclamation.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Forbidden = (props) => {

    let user = localStorage.getItem('token')
    user = JSON.parse(user)

    let Status = props.Status;

    return (
        <div className={"opacityErro " + Status} >
                <div className={"modalErro " + Status} >
                    <div className="centerModalErro">
                        <div className="topModalErro">
                        <h1 className="titleModalErro">
                        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" />
                            <p className="space">Ops!</p>
                            </h1>
                        <p className="closeErro " onClick={() => window.location.replace('/cars')}>X</p>
                        </div>
                        <div className="contentModalEditErro">
                            <p className="errorDescriptionErro">Ops! O Sr(a). <span className="Spotlight">{user.given_name}</span> Não possui permissão para vizualizar essa pagina</p>
                    </div>
                </div>
            </div>
        </div>
    )
}