import React from 'react';

import { Link } from "react-router-dom";

import '../../../assets/css/home.css';
import Logo from '../../../assets/img/logoHome.png';
import Banner from '../../../assets/img/banner.png';
import CarroEconomico from '../../../assets/img/car1.png';
import CarroEspecial from '../../../assets/img/car 2.png';
import CarroLuxo from '../../../assets/img/car3.png';
import Header from '../../../components/Header/header';
import { Footer } from '../../../components/Footer/footer';

const Home = () =>
{
    return (

        <>
            {/* Main */}
            <main>
                <div className='alinhamentoHome'>
                    <img className='logoHome' src={Logo} alt="" />

                    <div>
                        <img className='bannerHome' src={Banner} alt=""/>
                    </div>

                    <div className='btnHome'>
                        <Link to='/login' className="links"><button className='loginHome'>Login</button></Link>
                        <Link to='/login' className="links"><button className='saveHome'>Cadastrar</button></Link>
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

            {/* Footer */}

            <Footer />

        </>
    )
}

export default Home;