import React, { useEffect } from "react";
import HandleCredentialResponse from "../../../api/auth";
import '../../../assets/css/login.css';
import logoPerfil from '../../../assets/img/logoheader.png';

const Login = () =>
{

    useEffect(() => {
        HandleCredentialResponse()
    }, [])

    return(
        <>
            <main>

                <div className="logoPerfil">
                    <a href="/home">
                        <img src={logoPerfil} alt="" />
                    </a>
                </div>

                <div className="alinhamentoPerfil">

                    <div className="cardLogin">
                        <h2 className="h2Login">Login</h2>

                        <p className="txtPerfil">Este portal oferece uma experiência única, segura e oferta um serviço de qualidade!</p>

                        <div className="auth">
                            <div id="googleAuth">

                            </div>
                        </div>
                    </div>

                    <div className="cardCadastro">
                        <h2 className="h2Cadastrar">Cadastrar</h2>

                        <div className="preenchimentoCadastro">
                            <input className="inputCadastro" type="text" placeholder="Nome Completo"/>

                            <input className="inputCadastro" type="tel" name="Telefone" placeholder="Telefone"/>

                            <input className="inputCadastro" type="email" placeholder="E-mail"/>
                        </div>
                        <div className="signup">
                            <button className="cadastrarPerfil">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login;