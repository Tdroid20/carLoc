import React from 'react';

import { Link } from "react-router-dom";

import '../../assets/css/home.css';

import Footer from '../../components/Footer/footer'

import Logo from '../../assets/img/logoHome.png';
import Banner from '../../assets/img/banner.png';
import CarroEconomico from '../../assets/img/car1.png';
import CarroEspecial from '../../assets/img/car 2.png';
import CarroLuxo from '../../assets/img/car3.png';

const Home = () =>
{
    return (

        <>
            <main>
                <div className='alinhamentoHome'>
                    <img className='logoHome' src={Logo} alt="" />

                    <div>
                        <img className='bannerHome' src={Banner} alt=""/> 
                    </div>

                    <div className='btnHome'>
                        <Link to='/perfil' className="links"><button className='loginHome'>Login</button></Link>                        
                        <Link to='/perfil' className="links"><button className='saveHome'>Cadastrar</button></Link>
                    </div>
                
                </div>

                <div className='cardHome'>
                    <div className='economico'>
                        <img className='carroEconomicoHome' src={CarroEconomico} alt="" />
                        <p className='txtReservar'>Econômico</p>
                        <button className='btnReservar'>Reservar</button>
                    </div>

                    <div className='especial'>
                        <img className='carroEspecialHome' src={CarroEspecial} alt="" />
                        <p className='txtReservar'>Especial</p>
                        <button className='btnReservar'>Reservar</button>
                    </div>

                    <div className='luxo'>
                        <img src={CarroLuxo} alt="" />
                        <p className='txtReservar'>Luxo</p>
                        <button className='btnReservar'>Reservar</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home