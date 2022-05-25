import React, { useEffect, useState } from "react";
import '../../../assets/css/page6.css';
import { api } from "../../../services/api";

import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import BtnRegister from "../../../components/btnPageRegister/btnRegister";

export const PerfilUsuario = () =>
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
    const [boolean, setBoolean] = useState(false)
    const [guardarId, setGuardarId] = useState(0)

    const Registrar = () =>
    {
        if(nomeUsuario !== '' && email !== '' && telefone !== 0) {
            api.post('usuario', {nome: nomeUsuario, email: email, telefone: telefone})
            .then(() => {window.location.reload()})
        }
    }

    //PUT

    const guardarInfos = (id, nome, telefone, email) =>
    {
        setNomeUsuario(nome)
        setTelefone(telefone)
        setEmail(email)
        setGuardarId(id)

        setBoolean(true)
        window.scroll({top: 25,left: 0,behavior: 'smooth'});
    }

    const Editar = () =>
    {
        if(nomeUsuario !== '' && email !== '' && telefone !== ''){
            api.put(`usuario/${guardarId}`, {nome: nomeUsuario, email: email, telefone: telefone})
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
                        maxLength={20}
                        value={nomeUsuario}
                        onChange={(estadoInput) => setNomeUsuario(estadoInput.target.value)}></input>

                        <input type="text" 
                        className="input_page6_campos_espaço" 
                        placeholder="Telefone:"
                        maxLength={12}
                        value={telefone} 
                        onChange={(estadoInput) => setTelefone(estadoInput.target.value)}></input>

                        <input type="email"
                         className="input_page6_campos"
                         placeholder="Email:"
                         value={email} 
                         onChange={(estadoInput) => setEmail(estadoInput.target.value)}></input>
                    </div>

                    <div className="alinhamento_botoes_perfil">
                        <BtnRegister trocarbotaopage6={boolean} Editarpage6={Editar} Cadastrarpage6={Registrar}/>
                        
                        <button className="botao_excluir_page6">Excluir Cadastro</button>
                    </div>
                </div>

                <h2 className="h2_page6">USUÁRIOS CADASTRADOS</h2>
                <div className="border_bottom_page6"></div>

                {usuario.map((item) =>
                {
                    return(
                        <div key={item.id} >
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
                        </div>
                    );
                    
                })}
                 
            </main>
            <Footer/> 
        </>
    )
}

export default PerfilUsuario