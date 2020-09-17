import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import Janela from '../moJanela/index.js'
import HeaderSideDoValente from '../moHeaderSideDoValente/index.js'
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

const layout = props => {
  console.log('Rodando /layout.js Luz Verde');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  var titulo = Util.validaProps(props.titulo, "Home");
  var categoria = Util.validaProps(props.categoria, "Outros");

  //Layout Luz verde
  return (
    <div className="CSSLayout">
      <GTM position="body" modo={modo} codGTM="UA-143307429-1" />
      <Div display="justificado">
          
          <div className="layoutManu esconder">
            <Janela estilo="luz">
                <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
            </Janela>
          </div>

          <div className="layoutBody">
            <Div display="vertical">
              <Janela estilo="luz">
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </Janela>
              <Janela estilo="luz">
                <div className="conteudo">
                {props.children}
                </div>
              </Janela>
              <Janela estilo="luz">
                <FooterSideDoValente regiao={regiao} modo={modo}/>
              </Janela>
            </Div>
          </div>      
        
      </Div>
      <style jsx>{`
      .CSSLayout{
        color: #ffffff;
        width:100%;
        margin : 0px;
        padding : 0px;
        padding-top : 10px;
      }
      .layoutManu{
        width: 25%;
        padding-left:2%;
      }
      .layoutBody{
        width: 70%;
        padding-right:2%;
      }
      @media(max-width: 1169px) {
        .layoutManu{
          display : None;
        }
        .layoutBody{
          width: 96%;
          padding-left:2%;
        }
      }
      @media(max-width: 1169px) {
        
      }
    `}</style>
      <style jsx global>{`
        ${Util.fontesCSS1()}
        ${Util.fontesCSS2()}
        ${Util.fontesCSS3()}
        ${Util.fontesCSS4()}
        ${Util.fontesCSS5()}
        body{
          margin: 0px;
          padding: 0px;
          background-color: #002128;
          background-image: url("/static/assetsv5/img/layout_luz/fundo04.jpg");
          color: #10ecf5;
          font-family: SimplonBP-Regular, sans-serif;       
        }
    `}</style>
    </div>
  )
}

export default layout

//Não esqueça de do GTM do body.