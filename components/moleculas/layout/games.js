import React from 'react'
import Div from '../../atoms/atDiv'
import ListadeRotas from '../moListadeRotas/index.js'
import Janela from '../moJanela/index.js'
import HeaderSideDoValente from '../moHeaderSideDoValente/index.js' 
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

//import BtLink from '../../atoms/atBtLink'

const layoutGames = props => {
  console.log('Rodando /layout/Games.js');
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
                <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria} btestilo="neon" btestiloitem="neonItem"/>
            </Janela>
          </div>

          <div className="layoutBody">
            <Div display="vertical">
              <Janela estilo="terminal">
                <HeaderSideDoValente regiao={regiao} modo={modo} titulo={titulo}/>
              </Janela>
              <Janela estilo="terminal">
                {props.children}
              </Janela>
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
        body{
          margin: 0px;
          padding: 0px;
          background-color: #8d5119;
          background-image: url("/static/assetsv5/img/cristalbot/fundogame.jpg");
          background-repeat: repeat-x;
          color: #10ecf5;
          font-family: SimplonBP-Regular, sans-serif;       
        }
    `}</style>
    </div>
  )
}

export default layoutGames

//Não esqueça de do GTM do body.