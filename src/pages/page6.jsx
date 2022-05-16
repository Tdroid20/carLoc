import React from "react";
import '../assets/css/page6.css'
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer"

export const Pagina6 = () =>
{
    return(
        <>
            <Header/>
            <main>
                <div className="card_perfil_page6">
                    <h1 className="h1_page6">Perfil</h1>
                    <div>
                        <input className="input_page6_campos"></input>
                        <input className="input_page6_campos_espaço"></input>
                        <input className="input_page6_campos"></input>
                    </div>

                    <div className="alinhamento_botoes_perfil">
                        <button className="botao_atualizar_page6">Atualizar</button>
                        <button className="botao_excluir_page6">Excluir Cadastro</button>
                    </div>
                </div>

                <h2 className="h2_page6">USUÁRIOS CADASTRADOS</h2>
                <div className="border_bottom_page6"></div>

                <div className="div_posicionamento_textos_page6">
                    <div>
                        <p className="texto_nome_page6">Maria de Fátima Muniz</p>
                    </div>

                    <div className="">
                        <p className="subtexto_usuario_page6">(11) 99999-9090</p>
                    </div>

                    <div className="">
                        <p className="subtexto_usuario_page6">maria@gmail.com</p>
                    </div>

                    <div className="div_botao_excluir_page6">
                        <button className="btn_excluir_page6">Excuir usuário</button>
                    </div>
                </div>        
            </main>
            <Footer/>
        </>
    )
}