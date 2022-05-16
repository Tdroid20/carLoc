import React from 'react'
import logoHeader from "../../assets/logoheader.png"
import '../../assets/css/header.css'

export const Header = () =>
{
    return(
        <>
            <div className='header'>
                <div className='alinhamento_texto_header'>
                    <p className='button_header'>Home</p>
                    <p className='button_header_padding'>Carros</p>
                    <p className='button_header'>Reservas</p>
                </div>

                <div>
                <img src={logoHeader} alt="Logo do site LocCar" />
                </div>
                    
                <div className='alinhamento_texto_header'>
                    <p className='button_header'>Locadoras</p>
                    <p className='button_header_padding'>Perfil</p>
                    <p className='button_header'>Sair</p>
                </div>
            </div>
        </>
    );
}

export default Header;