import React, { useEffect, useState } from "react";
import '../../../assets/css/page6.css';
import { api } from "../../../services/api";

import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";

export const Perfil = () =>
{

    const [usuario, setUsuario] = useState([])

    // listar API
    const ListarUsuario = () =>
    {
        api.get('usuario')
        .then(result => {
            setUsuario(result.data)
        })
    }

    useEffect(() =>{
        ListarUsuario()
    }, [])

    // POST

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [guardarId, setGuardarId] = useState(0)

    const Registrar = () =>
    {
            for (let index = 0; index < usuario.length; index++) 
            {
                if(usuario[index].nome === nomeUsuario)
                {
                    return
                }
            }

        api.post('usuario', {nome: nomeUsuario, email: email, telefone: telefone})
        .then(() => {window.location.reload()})
    }

    //PUT

    const guardarInfos = (id, nome, telefone, email) =>
    {
        setNomeUsuario(nome)
        setTelefone(telefone)
        setEmail(email)
        setGuardarId(id)
    }

    const Editar = (id) =>
    {
        if(nomeUsuario !== '' && email !== '' && telefone !== ''){
            api.put(`usuario/${id}`, {nome: nomeUsuario, email: email, telefone: telefone})
            .then(() => {window.location.reload()})
        }
    }

    //DELETE

    const Excluir = (id) => {
            api.delete(`usuario/${id}`)
            .then(() => {window.location.reload()})
    }

    return(
        <>
            <Header/>
            <main>
                <div className="card_perfil_page6">
                    <h1 className="h1_page6">Perfil</h1>
                    <div className="div_inputs_perfil_page6">
                        <input type="text" 
                        className="input_page6_campos" 
                        placeholder="Nome:"
                        value={nomeUsuario}
                        onChange={(estadoInput) => setNomeUsuario(estadoInput.target.value)}></input>

                        <input type="text" 
                        className="input_page6_campos_espaço" 
                        placeholder="Telefone:"
                        value={telefone} 
                        onChange={(estadoInput) => setTelefone(estadoInput.target.value)}></input>

                        <input type="email"
                         className="input_page6_campos"
                         placeholder="Email:"
                         value={email} 
                         onChange={(estadoInput) => setEmail(estadoInput.target.value)}></input>
                    </div>

                    <div className="alinhamento_botoes_perfil">
                        <button className="botao_atualizar_page6" onClick={() => Registrar()}>Atualizar</button>
                        
                        <button className="botao_excluir_page6">Excluir Cadastro</button>
                    </div>
                </div>

                <h2 className="h2_page6">USUÁRIOS CADASTRADOS</h2>
                <div className="border_bottom_page6"></div>

                {usuario.map((item) =>
                {
                    return(
                        <>
                        <div className="div_pai_card_excluir_page6" onClick={() => guardarInfos(item.id, item.nome, item.telefone, item.email)}>
                            <div className="div_posicionamento_textos_page6">
                                <div>
                                    <p className="texto_nome_page6">{item.nome}</p>
                                </div>

                                <div>
                                    <p className="subtexto_usuario_page6">{item.telefone}</p>
                                </div>

                                <div>
                                    <p className="subtexto_usuario_page6">{item.email}</p>
                                </div>

                                <div className="div_botao_excluir_page6">
                                    <button className="btn_excluir_page6" onClick={() => Excluir(item.id)}>Excluir usuário</button>
                                </div>
                            </div> 
                        </div>
                        </>
                    );
                    
                })}
                 
            </main>
            <Footer/> 
        </>
    )
}

export default Perfil