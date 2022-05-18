/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logoface from "../../assets/img/logoface.png"
import logoinsta from "../../assets/img/logoinsta.png"
import logotwitter from "../../assets/img/logotwitter.png"
import '../../assets/css/footer.css'

export const Footer = () =>
{
    return(
        <>
            <div className='footer'>
                   <div className='div_alinhamento_footer'>
                       <div className='div_contatos_padding_footer'>
                            <a href="#" className='texto_contato_footer'>Política de Segurança</a>
                            <a href="#" className='texto_contato_padding_footer'>Trabalhe Conosco</a>
                            <a href="#" className='texto_contato_footer'>PROCON</a>

                            <div className='div_endereco_texto_footer'>
                                <p className='padding_email_footer'>31 99999 9666 - contato@divinafashion.com</p>
                                <p>AV. Principal, 123 . BH/MG</p>
                            </div>

                        </div>
                       <div className="vertical"></div>
                        <div className='div_alinhamento_logo_footer'>
                            <div>
                                <img src={logoinsta} alt="Logo do Instagram" />
                                <img src={logoface} className="logo_padding_footer" alt="Logo do Facebook" />
                                <img src={logotwitter} alt="Logo do Twitter" />
                            </div>
                            <p className='texto_direitos_footer'>Todos os direitos reservados</p>
                        </div>
                   </div>
            </div>
        </>
    );
}

export default Footer;