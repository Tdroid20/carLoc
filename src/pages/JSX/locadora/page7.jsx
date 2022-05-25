import React, { useEffect, useState } from "react";
import '../../../assets/css/page7.css'
import Header from '../../../components/Header/header'
import Footer from '../../../components/Footer/footer'
import { api } from "../../../services/api";
import BtnLocadora from "../../../components/btnLocadora/btnLocadora";


export const Locadora = () => {

    const [locadora, setLocadora] = useState([])

    // listar API
    const ListarUsuario = () =>
    {
        api.get('locadoras')
        .then(result => {
            setLocadora(result.data)
        })
    }

    useEffect(() =>{
        ListarUsuario()
    }, [])

    // POST

    const [nomeLocadora, setnomeLocadora] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefone, setTelefone] = useState('')
    const [guardarId, setGuardarId] = useState(0)
    const [boolean, setBoolean] = useState(false)

    const Registrar = () =>
    {
        api.post('locadoras', {nome: nomeLocadora, endereco: endereco, telefone: telefone})
        .then(() => {window.location.reload()})
    }

    //PUT

    const guardarInfos = (id, nome, endereco, telefone) =>
    {
        setnomeLocadora(nome)
        setEndereco(endereco)
        setTelefone(telefone)
        setGuardarId(id)

        setBoolean(true)
        window.scroll({top: 25,left: 0,behavior: 'smooth'});
    }

    const Editar = () =>
    {
        if(nomeLocadora !== '' && endereco !== '' && telefone !== ''){
            api.put(`locadoras/${guardarId}`, {nome: nomeLocadora, endereco: endereco, telefone: telefone})
            .then(() => {window.location.reload()})
        }
    }

    //DELETE

    const Excluir = (id) => {
            api.delete(`locadoras/${id}`)
            .then(() => {window.location.reload()})
    }

    return(

        <div>

            <Header />

            <main>

                <div className="secao1">

                    <h1 className="titulo">Locadora</h1>

                    <div className="paiInputs">

                        <div className="inputs">
                            <input 
                            type="text"
                            className="input-1"
                            placeholder="Locadora:"
                            defaultValue={nomeLocadora}
                            onChange={(estadoInput) => setnomeLocadora(estadoInput.target.value)}></input>

                            <input 
                              type="text"
                              className="input-1"
                              placeholder="Endereço:"
                              value={endereco}
                              onChange={(estadoInput) => setEndereco(estadoInput.target.value)}></input>
                        </div>

                        <div className="bloco2">
                            <input 
                            type="text"
                            className="input-2"
                            placeholder="Telefone:"
                            value={telefone}
                            onChange={(estadoInput) => setTelefone(estadoInput.target.value)}></input>
                            <BtnLocadora trocarbotaopage7={boolean} Editarpage7={Editar} Cadastrarpage7={Registrar}/>
                        </div>

                    </div>


                </div>


                {locadora.map((item) => {
                    return(
                        <div className="linha2" key={item.id}>

                            <div className="conteudo2">
                                <h2 className="Locadoras">{item.nome}</h2>

                                <div>
                                    <p className="texto_rua_page7">{item.endereco}</p>
                                    <p className="texto_numero_page7">{item.telefone}</p>
                                </div>

                                <button className="btEditar" onClick={() => guardarInfos(item.id, item.nome, item.endereco, item.telefone)}>Editar</button>
                                <button className="btExcluir" onClick={() => Excluir(item.id)}>Excluir</button>
                            </div>

                        </div>
                    )
                    
                })}  
            </main>
            <Footer />

        </div>

    );

}