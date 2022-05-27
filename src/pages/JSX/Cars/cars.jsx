import React, { useEffect, useState } from 'react';

import '../../../assets/css/cars.css';
import { api } from '../../../services/api';

import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import BtnCars from '../../../components/btnCars/btnCars';

import Economico from '../../../assets/img/car1.png';
import Especial from '../../../assets/img/car 2.png';
import Luxo from '../../../assets/img/car3.png';

export const Cars = () =>
{

    const [carros, setCarros] = useState([])
    const [locadoras, setLocadoras] = useState([])

    // listar API
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

    const ListarLocadora = () =>
    {
        api.get('locadoras')
        .then(result => {
            setLocadoras(result.data)
        })
    }

    useEffect(() =>{
        ListarLocadora()
    }, [])

    // POST

    const [nomeCarro, setNomeCarro] = useState('')
    const [portasCarro, setPortasCarro] = useState('')
    const [numeroPessoas, setNumeroPessoas] = useState('')
    const [airbags, setAirbags] = useState('false')
    const [valorLocadora, setValorLocadora] = useState(0)
    const [guardarId, setGuardarId] = useState(0)
    const [boolean, setBoolean] = useState(false)

    const Registrar = () =>
    {
        console.log(valorLocadora);

        api.post('carros', {nome: nomeCarro, portas: portasCarro, npessoas: numeroPessoas, airbag: airbags, locadoraId: valorLocadora})

        .then(() => {window.location.reload()})
    }


    //PUT

    const guardarInfos = (id, nome, portas, npessoas, airbag, valorLocadora) =>
    {
        setNomeCarro(nome)
        setPortasCarro(portas)
        setNumeroPessoas(npessoas)
        setAirbags(airbag)
        setValorLocadora(valorLocadora)
        setGuardarId(id)

        setBoolean(true)
        window.scroll({top: 25,left: 0,behavior: 'smooth'});
    }

    const Editar = () =>
    {
        if(nomeCarro !== '' && portasCarro !== '' && numeroPessoas !== ''){
            api.put(`carros/${guardarId}`, {nome: nomeCarro, portas: portasCarro, npessoas: numeroPessoas, airbag: airbags, locadoraId: valorLocadora})
            .then(() => {window.location.reload()})
        }
    }

    //DELETE

    const Excluir = (id) => {
            api.delete(`carros/${id}`)
            .then(() => {window.location.reload()})
            
    }

    return(
        <>
            <Header/>
                <main>
                    <div className='bordaCarros'>
                        <div className='alinhamentoCarros'>
                            <h1 className='tituloCarros'>Carros</h1>

                            <div className='cardInputsCarros'>
                                <input 
                                className='inputCarro' 
                                type="text" 
                                placeholder='Nome do carro:'
                                value={nomeCarro}
                                onChange={(e) => setNomeCarro(e.target.value)} />

                                <div className='alinhamentoInputs'>
                                    <select className='airbags' onChange={(estado) => setAirbags(estado.target.value)}>
                                        <option value="default" hidden>Airbags</option>
                                        <option value="">Com Airbag</option>
                                        <option value="">Sem Airbag</option>
                                    </select>
                                    
                                    <input 
                                    className='inputPortas' 
                                    type="text" 
                                    placeholder='Portas:'
                                    value={portasCarro}
                                    onChange={(e) => setPortasCarro(e.target.value)} />

                                    <input 
                                    className='inputPessoas' 
                                    type="text" 
                                    placeholder='Nº de Pessoas:'
                                    value={numeroPessoas}
                                    onChange={(e) => setNumeroPessoas(e.target.value)} />
                                </div>

                                <div className='filial'>

                                        <select className='input_locadoras' value={valorLocadora} onChange={(e) => setValorLocadora(e.target.value)}>
                                            <option hidden>Locadoras:</option>
                                            {locadoras.map((item) => {
                                                return(
                                                    <option value={item.id} key={item.id} >{item.nome}</option>
                                                    )
                                                })}
                                        </select>
                                    <BtnCars trocarbotao={boolean} Cadastrar={Registrar} Editar={Editar} />
                                </div>

                            </div>

                        </div>

                    </div>        
                            {/* Parte dos carros Economicos */}
                            <h2 className='tituloCarroEconomico'>ECONÔMICO</h2>

                            <div className='bordaTitulo'></div>

                            <div className='alinhamentoCarrosEconomicos'>
                                {carros.map((item) => {
                                    return(
                                    <div className='cardCarroEconomico' key={item.id} >
                                        <img className='imgCarros' src={Economico} alt="" />

                                        <h3 className='nomeCarros'>{item.nome}</h3>

                                        <p className='txtCarros'>Faça a sua reserva e garata a locação do automóvel.</p>

                                        <button className='btnEditarCarros' onClick={() => guardarInfos(item.id, item.nome, item.portas, item.npessoas, item.airbag)}>Editar</button>
                                        <button className='btnExcluirCarros' onClick={() => Excluir(item.id)}>Excluir</button>
                                    </div>
                                    )
                                })}

                            </div>

                            {/* Parte dos carros ESPECIAIS */}
                            <h2 className='tituloCarroEspecial'>ESPECIAL</h2>

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

                            <h2 className='tituloCarroLuxo'>LUXO</h2>

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