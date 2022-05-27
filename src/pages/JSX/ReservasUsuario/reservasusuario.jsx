import React, { useEffect, useState } from 'react';

import '../../../assets/css/reservasusuario.css';
import { api } from '../../../services/api';

import Header from '../../../components/Header/header';
import Footer from '../../../components/Footer/footer';
import BtnReservar from '../../../components/BtnReservasUsuario/btnReservas';
import CarList from "../../../assets/img/car1.png"
import { useLocation } from 'react-router-dom';
import { BlockNullInput } from '../../../components/Errors/BlockNullinput/BlockNullinput';

export const ReservasUsuario = () =>
{
    const Location = useLocation()
    const [reservas, setReservas] = useState([])
    const [carros, setCarros] = useState([])
    const [locadoras, setLocadoras] = useState([])

    // listar API
    const [idCarro, setIdCarro] = useState('')
    const [pegarIdLocadora, setpegarIdLocadora] = useState('')
    const [guardaCarro, setGuardaCarro] = useState('')
    const [guardaLocadora, setGuardaLocadora] = useState('')


    useEffect(() =>{
        if(Location.state !== null){
            const {id} = Location.state
            const {locadoraId} = Location.state
            const {guardarCarro} = Location.state
            const {guardarLocadora} = Location.state
    
            setpegarIdLocadora(locadoraId)
            setGuardaCarro(guardarCarro)
            setGuardaLocadora(guardarLocadora)
            setIdCarro(id)
        }
    }, [])
    




    const ListarReservas = () =>
    {
        api.get('reservas?_expand=carro')
        .then(result => {
            setReservas(result.data)
            console.log(result.data);
        })
    }

    useEffect(() =>{
        ListarReservas()
    }, [])

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


    const ListarLocadoras = () =>
    {
        api.get('locadoras')
        .then(result => {
            setLocadoras(result.data)
        })
    }
    
    useEffect(() =>{
        ListarLocadoras()
    }, [])
    
    // POST

    const [nomeCarro, setNomeCarro] = useState('')
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')
    const [locadoraValor, setlocadoraValor] = useState('')
    const [dataDevolucao, setDataDevolucao] = useState('')
    const [boolean, setBoolean] = useState(false)

    const [guardarId, setGuardarId] = useState(0)

    const Registrar = () =>
    {
        api.post('reservas', {data: data, horario: horario, dataentrega: dataDevolucao, carroId: idCarro})
        .then(() => {window.location.reload()})
    }

    //PUT

    const guardarInfos = (id, nome, data, horario, dataentrega) =>
    {
        setNomeCarro(nome)
        setData(data)
        setHorario(horario)
        setDataDevolucao(dataentrega)
        setGuardarId(id)

        setBoolean(true)
        window.scroll({top: 25,left: 0,behavior: 'smooth'});
    }

    const Editar = () =>
    {
        if(data !== '' && horario !== '' && dataDevolucao !== ''){
            api.put(`reservas/${guardarId}`, {data: data, horario: horario, dataentrega: dataDevolucao, carroId: idCarro, locadoraId: pegarIdLocadora})
            .then(() => {window.location.reload()})
        }
    }

    //DELETE

    const Excluir = (id) => {
            api.delete(`reservas/${id}`)
            .then(() => {window.location.reload()})   
    }

    return(
        <>
            <Header/>
                <main>
                    <div className='bordaCarros'>
                        <div className='alinhamentoCarros'>
                            <h1 className='tituloCarros'>Reservas</h1>

                            <div className='cardInputsCarros'>
                                <input
                                className='inputCarro' 
                                type="text" 
                                placeholder='Nome do carro:'
                                readOnly
                                value={guardaCarro}/>

                                <div className='alinhamentoInputs'>                                    
                                    
                                    <input 
                                    className='input_reservas_usuario_padding' 
                                    type="text" 
                                    placeholder='Data reserva:'
                                    value={data}
                                    onChange={(e) => setData(e.target.value)} />

                                    <input 
                                    className='input_reservas_usuario' 
                                    type="text" 
                                    placeholder='Horário da reserva:'
                                    value={horario}
                                    onChange={(e) => setHorario(e.target.value)} />

                                    <input 
                                    className='input_reservas_usuario' 
                                    type="text" 
                                    placeholder='Data de devolução:'
                                    value={dataDevolucao}
                                    onChange={(e) => setDataDevolucao(e.target.value)} />
                                </div>

                                <div className='filial'>

                                        <select className='input_locadoras' defaultValue={1} disabled>
                                            <option value="1">{guardaLocadora}</option>
                                        </select>
                                    <BtnReservar trocarbtnreservar={boolean} CadastrarReservas={Registrar} EditarReservas={Editar} />
                                </div>
                            </div>
                        </div>
                    </div>  

                    <h2 className='tituloCarroEconomico'>MINHAS RESERVAS</h2>

                    <div className='bordaTitulo'></div>
                    
                    {reservas.map((item) => {
                        return(
                        <div className='card_reserva_carros' key={item}>
                        <div className='alinhamento_card_reserva'>
                            <div>
                                <img src={CarList} alt="Fiat Uno" />
                            </div>
                            <div className='div_textos_reserva'>
                                <p className='nome_carro_reserva'>{item.carro.nome}</p>
                                <p className='padding_titulo_card'>Data retirada: {item.data}</p>
                                <p className='texto_padding_centro'>Horário retirada: {item.horario}</p>
                                <p>Data de devolução: {item.dataentrega}</p>
                            </div>
                            <div className='div_botoes_reserva'>
                                <button className='botao_editar_reserva' onClick={() => guardarInfos(item.id, item.nome, item.data, item.horario, item.dataentrega)}>Editar</button>
                                <button className='botao_excluir_reserva' onClick={() => Excluir(item.id)}>Excluir Reversa</button>
                            </div>
                        </div>
                    </div>    
                        )
                    })} 
                </main>
            <Footer/>
        </>
    )
}

export default ReservasUsuario