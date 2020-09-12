import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import Janela from '../moJanela/index.js'
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';

const layoutCristalBot = props => {
  console.log('Rodando /layout/cristalbot.js GAME');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  var titulo = Util.validaProps(props.titulo, "Home");
  var categoria = Util.validaProps(props.categoria, "Outros");

  //Layout Luz verde
  return (
    <div className="CSSLayout">
      <Div display="justificado">
          
          <div className="layoutManu esconder">
            <Janela estilo="luz">
                <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
            </Janela>
          </div>

          <div className="layoutBody">
            <Div display="vertical">
              <div>
                <div className="conteudo">
                {props.children}
                </div>
              </div>
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
          width: 100%;
          padding-left:5px;
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


/*
 <div className="borda"></div>
      <Div display="justificado">
        
        <div className="borda"></div>

        <Div display="justificado">
          <div className="codigoIndexListadeRotas esconder">
            <Janela estilo="luz">
              Menu
              <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
            </Janela>
          </div>
          
          <div className="borda esconder"></div>
            
            <Div display="vertical">
              
              <Janela estilo="luz">
                Header
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </Janela>

              <div className="borda"></div>
              
  
                <Janela estilo="luz">
                  Body
                  {props.children}
                </Janela>
  
              
              <div className="borda"></div>
              
              <Janela estilo="luz">
                Foter
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </Janela>

            </Div>      

          </Div>

        
        <div className="borda"></div>
        */