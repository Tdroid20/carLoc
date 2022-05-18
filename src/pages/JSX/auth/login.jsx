import React from "react";

import '../../../assets/css/login.css';

import Footer from '../../../components/Footer/footer'

import logoLogin from '../../../assets/img/logoLogin.png';

const Login = () =>
{
    return(
        <>
            <main>

                <div className="logoLogin">
                    <a href="/home">
                        <img src={logoLogin} alt=""/>
                    </a>
                </div>

                <div className="alinhamentoLogin">

                    <div className="cardLogin">
                        <h2 className="h2Login">Login</h2>

                        <p className="txtLogin">Este portal oferece uma experiência única, segura e oferta um serviço de qualidade!</p>
                    </div>

                    <div className="cardCadastro">
                        <h2 className="h2Cadastrar">Cadastrar</h2>

                        <div className="preenchimentoCadastro">
                            <input className="inputCadastro" type="text" placeholder="Nome Completo"/>

                            <input className="inputCadastro" type="tel" name="Telefone" placeholder="Telefone"/>

                            <input className="inputCadastro" type="email" placeholder="E-mail"/>
                        </div>

                        <div>
                            <button className="cadastrarLogin">Cadastrar</button>
                        </div>

                    </div>

                </div>
                             
            </main>
            <Footer/>       
        </>
    )
}

export default Login