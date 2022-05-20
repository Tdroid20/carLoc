import React from 'react'
import logoHeader from "../../assets/img/logoheader.png"
import '../../assets/css/header.css'

export const Header = () =>
{
    return(
        <>
            <div className='header'>
                <div className='alinhamento_texto_header'>
                    <p className='button_header'><a href="/home">Home</a></p>
                    <p className='button_header_padding'><a href="/cars">Carros</a></p>
                    <p className='button_header'><a href="/reservations">Reservas</a></p>
                </div>

                <div>
                    <img src={logoHeader} alt="Logo do site LocCar" />
                </div>

                <div className='alinhamento_texto_header'>
                    <p className='button_header'><a href="/rental">Locadoras</a></p>
                    <p className='button_header_padding'><a href="/profile">Perfil</a></p>
                    <p className='button_header'>Sair</p>
                </div>
            </div>
        </>
    );
}

export default Header;