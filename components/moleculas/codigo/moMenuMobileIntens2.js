import React from "react";

import Div from '../../atoms/atDiv/index.js'
import * as Util from "../../../controller/util"
import path from "path"


const MenuMobileItens2 = props => {
    var modo = Util.validaProps(props.modo,"html");

    
    return (
        <>


            <div className="MenuMobileItem">
                <div className="MenuMobileItem-ini">
                    <a href="teste">INÍCIO</a>

                </div>
                
                <div className="MenuMobileItem-ini">
                    <a href="teste">CONTAS E PAGAMENTOS</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">MEUS PRODUTOS</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">RECARGA</a>
                </div>
                {modo =="amp" || modo =="AMP"
                ?
                // "http://localhost:8081/static/assetsv5/js/menumobile.js"
                <amp-script layout="container" src={path.resolve(__dirname,'static','assetsv5','js','menumobile.js')}>
                    <div className="MenuMobileItem-ini" id="ampscript">
                        <a>AJUDA E SUPORTE</a>
                        <div className="MenuMobileItem-sub">
                            <h3>AJUDA</h3>
                            <a href="#">Dúvidas frequentes</a>
                            <h3>ATENDIMENTO</h3>
                            <a href="#">Consulta de protocolo</a>
                            <a href="#">Encontre sua loja</a>
                            <a href="#">Telefones e postos</a>
                            <a href="#">Consultar documentos</a>
                            <h3>SUPORTE TÉCNICO</h3>
                        </div>
                    </div>
               </amp-script>
                 : 
                    <div className="MenuMobileItem-ini" id="ampscript">
                                <a >AJUDA E SUPORTE</a>
                                <div className="MenuMobileItem-sub">
                                    <h3>AJUDA</h3>
                                    <a href="#">Dúvidas frequentes</a>
                                    <h3>ATENDIMENTO</h3>
                                    <a href="#">Consulta de protocolo</a>
                                    <a href="#">Encontre sua loja</a>
                                    <a href="#">Telefones e postos</a>
                                    <a href="#">Consultar documentos</a>
                                    <h3>SUPORTE TÉCNICO</h3>
                                </div>
                    </div>
              
              }
            

                <div className="MenuMobileItem-ini">
                    <a href="teste">+ VANTAGENS</a>
                </div>
                <div className="MenuMobileItem-ini">
                    <a href="teste">PARA ASSINAR</a>
                </div>
            </div>

            <style jsx>{`
            
                .MenuMobileItem{
                    margin-top:50px;
                  
                    font-weight: bold;
                }
                .MenuMobileItem-ini{
                    border-bottom: 1px solid rgb(206, 206, 206);
                    flex-direction: column;
                    display: flex;
                }
                .MenuMobileItem a{
                    text-decoration: none;
                    color: rgb(34, 34, 34);
                    font-weight: bold;
                    font-size: 1.125rem;
                    padding: 1rem 0px;
                    padding-left: 20px;
                }
                .MenuMobileItem-sub{
                    display:none;  
                    border-bottom: 1px solid rgb(206, 206, 206);
                }
            `}</style>

        </>
    )
}

export default MenuMobileItens2;