import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import Janela from '../moJanela/index.js'
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

import BtLink from '../../atoms/atBtLink'

const layoutCristalBot = props => {
  console.log('Rodando /layout/cristalbot.js GAME');
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
            <Janela estilo="terminal">
                <div>
                  <BtLink href={"/game/cristalbot/?regiao="+regiao} value="Home Cristal Bot" estilo="neon"/>
                  <BtLink href={"/game/cristalbotimgb2/?regiao="+regiao} value="Imagens" estilo="neonItem"/>
                  <BtLink href={"/game/cristalbotvideob2/?regiao="+regiao} value="Videos" estilo="neonItem"/>
                  <BtLink href={"/game/cristalbotb1/?regiao="+regiao} value="verção anterior Beta 0.1" estilo="neonItem"/>
                </div>
                <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria} btestilo="neon" btestiloitem="neonItem"/>
            </Janela>
          </div>

          <div className="layoutBody">
            <Div display="vertical">
              <div>
                {props.children}
              </div>
              <Janela estilo="terminal">
                <FooterSideDoValente regiao={regiao} modo={modo} btestilo="neon"/>
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
          width: 100%;
          padding-right:0px;
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
          background-color: #8d5119;
          background-image: url("/static/assetsv5/img/cristalbot/fundopaginacristalbot.jpg");
          background-repeat: repeat-x;
          color: #10ecf5;
          font-family: SimplonBP-Regular, sans-serif;       
        }
    `}</style>
    </div>
  )
}

export default layoutCristalBot

//Não esqueça de do GTM do body.