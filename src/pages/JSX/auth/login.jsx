import React, { useEffect, useState } from "react";

import '../../../assets/css/login.css';

import Footer from "../../../components/Footer/footer"
import HandleCredentialResponse from '../../../api/auth';
import logoLogin from '../../../assets/img/logoLogin.png';
import { api } from "../../../services/api";

export const Login = () =>
{

    // Login de Google

    useEffect(() => {
        HandleCredentialResponse()
    }, [])

    // Cadastrar

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const Registrar = () =>
    {
        if(nomeUsuario !== '' && email !== '' && telefone !== 0) {
            api.post('usuario', {nome: nomeUsuario, email: email, telefone: telefone})
            .then(() => {window.location.reload()})
        }
    }

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

                        <div className="auth">
                            <div id="googleAuth">

                            </div>
                        </div>
                    </div>

                    <div className="cardCadastro">
                        <h2 className="h2Cadastrar">Cadastrar</h2>

                        <div className="preenchimentoCadastro">
                            <input 
                            className="inputCadastro" 
                            type="text" 
                            placeholder="Nome Completo"
                            maxLength={20}
                            value={nomeUsuario}
                            onChange={(estadoInput) => setNomeUsuario(estadoInput.target.value)}/>

                            <input 
                            className="inputCadastro" 
                            type="tel" 
                            name="Telefone" 
                            placeholder="Telefone"
                            maxLength={12}
                            value={telefone} 
                            onChange={(estadoInput) => setTelefone(estadoInput.target.value)}/>

                            <input 
                            className="inputCadastro" 
                            type="email" 
                            placeholder="E-mail"
                            value={email} 
                            onChange={(estadoInput) => setEmail(estadoInput.target.value)}/>
                        </div>

                        <div>
                            <button className="cadastrarLogin" onClick={() => {Registrar()}}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>       
        </>
    )
}

export default Login
