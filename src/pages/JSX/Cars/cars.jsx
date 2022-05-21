import React from 'react';

import '../../../assets/css/cars.css';

import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';

import Economico from '../../../assets/img/car1.png';
import Especial from '../../../assets/img/car 2.png';
import Luxo from '../../../assets/img/car3.png';

export const Cars = () =>
{
    return(
        <>
            <Header/>
                <main>
                    <div className='bordaCarros'>
                        <div className='alinhamentoCarros'>
                            <h1 className='tituloCarros'>Carros</h1>

                            <div className='cardInputsCarros'>
                                <input className='inputCarro' type="text" placeholder='Onix 2.0' />

                                <div className='alinhamentoInputs'>
                                    <select className='airbags' name="" id="">
                                        <option value="">Airbag</option>
                                        <option value="">Sem Airbag</option>
                                    </select>
                                    
                                    <input className='inputPortas' type="text" placeholder='Portas:' />

                                    <input className='inputPessoas' type="text" placeholder='Nº de Pessoas:' />
                                </div>

                                <div className='filial'>

                                        <select className='input_locadoras'  name="" id="">
                                            <option value="">Locadora Filial 1</option>
                                            <option value="">Locadora Filial 2</option>
                                            <option value="">Locadora Matriz</option>
                                        </select>
                                    

                                    <button className='btnCadastrarCarros'>Cadastrar</button>
                                    
                                </div>

                            </div>

                        </div>

                    </div>        
                            {/* Parte dos carros Economicos */}
                            <h2 className='tituloCarroEconomico'>ECONÔMICO</h2>

                            <div className='bordaTitulo'></div>

                            <div className='alinhamentoCarrosEconomicos'>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Economico} alt="" />

                                    <h3 className='nomeCarros'>Fiat Uno 1.0</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros' >Editar</button>
                                    <button className='btnExcluirCarros' >Excluir</button>
                                </div>

                                <div className='cardCarroEconomico2'>
                                    <img className='imgCarros' src={Economico} alt="" />

                                    <h3 className='nomeCarros'>Voyage 1.5</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Economico} alt="" />

                                    <h3 className='nomeCarros'>Onix 2.0</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>
                            </div>

                            {/* Parte dos carros ESPECIAIS */}
                            <h2 className='tituloCarroEconomico'>ESPECIAL</h2>

                            <div className='bordaTitulo'></div>

                            <div className='alinhamentoCarrosEconomicos'>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Especial} alt="" />

                                    <h3 className='nomeCarros'>Focus</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros' >Editar</button>
                                    <button className='btnExcluirCarros' >Excluir</button>
                                </div>

                                <div className='cardCarroEconomico2'>
                                    <img className='imgCarros' src={Especial} alt="" />

                                    <h3 className='nomeCarros'>Sportage</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Especial} alt="" />

                                    <h3 className='nomeCarros'>L200</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>
                            </div> 

                            {/* Parte dos carros de LUXO */}

                            <h2 className='tituloCarroEconomico'>LUXO</h2>

                            <div className='bordaTitulo'></div>

                            <div className='alinhamentoCarrosEconomicos'>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Luxo} alt="" />

                                    <h3 className='nomeCarros'>Ferrari</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros' >Editar</button>
                                    <button className='btnExcluirCarros' >Excluir</button>
                                </div>

                                <div className='cardCarroEconomico2'>
                                    <img className='imgCarros' src={Luxo} alt="" />

                                    <h3 className='nomeCarros'>Porshe</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>

                                <div className='cardCarroEconomico'>
                                    <img className='imgCarros' src={Luxo} alt="" />

                                    <h3 className='nomeCarros'>Camaro</h3>

                                    <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                    <button className='btnEditarCarros'>Editar</button>
                                    <button className='btnExcluirCarros'>Excluir</button>
                                </div>
                            </div> 
                </main>

            <Footer/>
        </>
    )
}

export default Cars