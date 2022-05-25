import React, { useEffect, useState } from 'react';

import '../../../assets/css/carrosusuario.css';
import { api } from '../../../services/api';

import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import Modal from "../../../components/Modal/index"

import Economico from '../../../assets/img/car1.png';
import Especial from '../../../assets/img/car 2.png';
import Luxo from '../../../assets/img/car3.png';

export const CarrosUsuario = () =>
{

    const [modal, SetModal] = useState('hide')

    const AbrirFecharModal = (estadoAtual) =>
    {
        if(estadoAtual === 'hide')
        {
            SetModal('show')
        }
        else
        {
            SetModal('hide')
        }

        window.scroll({top: 150,left: 0,behavior: 'smooth'});
    }

    const [carros, setCarros] = useState([])

    const ListarCarros = () =>
    {
        api.get('carros')
        .then(result => {
            setCarros(result.data)
        })
    }

    useEffect(() =>{
        ListarCarros()
    }, [])

    return(
        <>
            <Header/>
                <main>

                    <h1 className='tituloCarroUsuario'>Carros</h1>
                    {/* Parte dos carros Economicos */}
                    <h2 className='tituloCarroEconomicoUsuario'>ECONÔMICO</h2>

                    <div className='bordaTitulo'></div>
                        <div className='alinhamentoCarrosEconomicos'>
                            {carros.map((item) => {
                            return(
                            <div className='cardCarroEconomico' key={item} >
                                <img className='imgCarros' src={Economico} alt="" />

                                <h3 className='nomeCarros'>{item.nome}</h3>

                                <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                <button className='btnEditarCarros' onClick={ () => {AbrirFecharModal(modal)} }>Detalhes</button>
                            </div>
                            )
                            })}
                        </div>

                        <Modal mostrar={modal} funcao={AbrirFecharModal}/>
                    {/* Parte dos carros ESPECIAIS */}
                    <h2 className='tituloCarroEspecialUsuario'>ESPECIAL</h2>

                    <div className='bordaTitulo'></div>

                    <div className='alinhamentoCarrosEconomicos'>

                        <div className='cardCarroEconomico'>
                            <img className='imgCarros' src={Especial} alt="" />

                            <h3 className='nomeCarros'>Focus</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros'>Detalhes</button>
                        </div>

                        <div className='cardCarroEconomico2'>
                            <img className='imgCarros' src={Especial} alt="" />

                            <h3 className='nomeCarros'>Sportage</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros'>Detalhes</button>
                        </div>

                        <div className='cardCarroEconomico'>
                            <img className='imgCarros' src={Especial} alt="" />

                            <h3 className='nomeCarros'>L200</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros'>Detalhes</button>
                        </div>
                    </div> 

                    {/* Parte dos carros de LUXO */}

                    <h2 className='tituloCarroLuxoUsuario'>LUXO</h2>

                    <div className='bordaTitulo'></div>

                    <div className='alinhamentoCarrosEconomicos'>

                        <div className='cardCarroEconomico'>
                            <img className='imgCarros' src={Luxo} alt="" />

                            <h3 className='nomeCarros'>Ferrari</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros' >Detalhes</button>
                        </div>

                        <div className='cardCarroEconomico2'>
                            <img className='imgCarros' src={Luxo} alt="" />

                            <h3 className='nomeCarros'>Porshe</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros'>Detalhes</button>
                        </div>

                        <div className='cardCarroEconomico'>
                            <img className='imgCarros' src={Luxo} alt="" />

                            <h3 className='nomeCarros'>Camaro</h3>

                            <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                            <button className='btnEditarCarros'>Detalhes</button>
                        </div>
                    </div> 
                    <div className={"fundo_escurecido " + modal} ></div>
                </main>
            <Footer/>
        </>
    )
}

export default CarrosUsuario