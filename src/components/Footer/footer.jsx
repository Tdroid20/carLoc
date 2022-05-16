import React from 'react'
import logoface from "../../assets/logoface.png"
import logoinsta from "../../assets/logoinsta.png"
import logotwitter from "../../assets/logotwitter.png"
import '../../assets/css/footer.css'

export const Header = () =>
{
    return(
        <>
            <div className='footer'>
                    <div className='div_alinhamento_footer'>
                        <div className='div_textos_politicas'>
                            <p className='texto_contatos_footer'>Política de Segurança </p>
                            <br></br>
                            <p className='padding_texto_contatos_footer'>Trabalhe Conosco</p>
                            <br></br>
                            <p className='texto_contatos_footer'>PROCON</p>
                        </div>
                        <div className='div_contatos_endereço_footer'>
                            <p>31 99999 9666 - contato@divinafashion.com</p>
                            <p>AV. Principal, 123 . BH/MG</p>
                        </div>

                    <div>
                        <div>
                            <img src={logoinsta} alt="Logo do Instagram" />
                            <img src={logoface} className="padding_logos_footer" alt="Logo do Facebook" />
                            <img src={logotwitter} alt="Logo do Twitter" />
                        </div>
                    </div>   
                    </div>
                     
                </div>
        </>
    );
}

export default Header;