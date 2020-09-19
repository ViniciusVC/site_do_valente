import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import HeaderSideDoValente from '../moHeaderSideDoValente/index.js'
import FooterSideDoValente from '../mofooterSideDoValente/index.js'
import * as Util from '../../../controller/util.js';
import GTM from '../../atoms/atGTM';

const layout = props => {
  console.log('Rodando /layout.js');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  var titulo = Util.validaProps(props.titulo, "Home");
  var categoria = Util.validaProps(props.categoria, "Outros");

  return (
    <div className="Body">
      <GTM position="body" modo={modo} codGTM="UA-143307429-1" />
      <Div display="justificado">
        <div className="borda"></div>
        <Div display="vertical">
          <div className="borda"></div>
          <div className="DivSombra">
            <HeaderSideDoValente regiao={regiao} modo={modo} titulo={titulo}/>
          </div>
          <div className="borda"></div>
          <Div display="justificado">
            
            <div className="codigoIndexListadeRotas DivSombra esconder">
              <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
            </div>

            <div className="borda esconder"></div>

            <div className="divCss DivSombra">
              {props.children}
            </div>

          </Div>
          <div className="borda"></div>
          <div className="DivSombra">
            <FooterSideDoValente regiao={regiao} modo={modo}/>
          </div>
        </Div>  
        <div className="borda"></div>
        
      </Div>
      <style jsx>{`
      .Body{
        width:100%;
        margin : 0px;
        padding : 0px;
      }
      .borda{
        width:10px;
        height: 10px;
      }
      .DivSombra{
        background-color: #696969;
        width: 100%;
        color: #333;
        font-size: 17px;
        font-family: sans-serif;
        background-color: #ffffff;
        background-image: linear-gradient(180deg, #ffffff, #ffffff, #bdb8a7 );
        border-radius: 8px;
        color: #222222;
        display: block;
        border: solid 1px #dbdbdb;
        padding: 10px;
        box-sizing: border-box;
        -webkit-box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.57);
        -moz-box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.57);
        box-shadow: 2px 2px 10px rgba(1, 1, 1, 0.57);        
      }

      /* .menu { width:600px; } */
      .codigoIndexListadeRotas{
        width:25%;
      }
      .divCss{
         width:75%;
      }

      @media(max-width: 900px) {
        .esconder{
          display : None;
        }
        .divCss{
          width:100%;
        }
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
          background-color: #D3D3D3;
          background-image: linear-gradient(45deg, #05005d, #bdb8a7, #aaf1ff );
          font-family: SimplonBP-Regular, sans-serif;        
        }
    `}</style>
    </div>
  )
}

export default layout

//Não esqueça de do GTM do body.