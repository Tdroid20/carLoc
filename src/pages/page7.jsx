import React from "react";
import '../assets/styles/page7.css'


export const Locadora = () => {

    return (

        <div>

            <div className="secao1">

                <h1 className="titulo">Locadora</h1>

                <div className="paiInputs">

                    <div className="inputs">

                        <input type="text" className="input-1" placeholder="Locadora:" />
                        <input type="text" className="input-1" placeholder="Endereço:" />


                    </div>

                    <div className="bloco2">

                        <input type="text" className="input-2" placeholder="Telefone:" />
                        <button className="btCadastrar">Cadastrar</button>

                    </div>

                </div>


            </div>


            <div className="linha2">

                <div className="conteudo2">

                    <h2 className="Locadoras">Locadora Matriz</h2>

                    <div>

                        <p className="ruaEnumero">Rua marques, 320</p>
                        <p className="ruaEnumero">(11) 8888-8888</p>

                    </div>

                    <button className="btEditar">Editar</button>
                    <button className="btExcluir">Excluir</button>



                </div>



            </div>

        </div>
    );

}