import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import HeaderSideDoValente from '../moHeaderSideDoValente/index.js'
import * as Util from '../../../controller/util.js';

const layout = props => {
  console.log('Rodando /layout.js');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  var titulo = Util.validaProps(props.titulo, "Home");
  var categoria = Util.validaProps(props.categoria, "Outros");

  return (
    <div className="Body">
      <div className="borda"></div>
      <Div display="justificado">
        <div className="borda"></div>
        <Div display="justificado">
            
            <div className="codigoIndexListadeRotas DivSombra esconder">
              <ListadeRotas regiao={regiao} modo={modo} titulo={titulo} categoria={categoria}/>
              <a>{"<"}</a>
            </div>
            <div className="borda esconder"></div>
            
            <Div display="vertical">
              
              <div className="DivSombra">
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </div>

              <div className="borda"></div>
              
              <div className="divCss DivSombra">
                  {props.children}
              </div>
              
              <div className="borda"></div>
              
              <div className="DivSombra">
                <HeaderSideDoValente regiao={regiao} modo={modo}/>
              </div>

            </Div>      

          </Div>

        
        <div className="borda"></div>
        
      </Div>
      <style jsx>{`
      .atDivJustificado {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .Body{
        color: #ffffff;
        width:100%;
        margin : 0px;
        padding : 0px;
      }
      .borda{
        width:25px;
        height: 25px;
      }
      .DivSombra{
        width: 100%;
        font-size: 17px;
        font-family: sans-serif;
        background-color: #282c45;
        background-image: linear-gradient(45deg, #16192a, #282c45, #282c45 );
        border-radius: 4px;
        display: block;
        /*border: solid 1px #000000;*/
        padding: 10px;
        box-sizing: border-box;
        -webkit-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
        -moz-box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);
        box-shadow: -9px 9px 20px rgba(1, 1, 1, 0.57);        
      }

      /* .menu { width:600px; } */
      .codigoIndexListadeRotas{
        width:25%;
      }

      .divCss{
          width:100%;
          padding-left:20px;
        }

      @media(max-width: 900px) {
        .esconder{
          display : None;
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
          background-color: #353c4f;
          color: #ffffff;
          /*background-image: linear-gradient(45deg, #353c4f, #1e2434, #5d6683 );*/
          font-family: SimplonBP-Regular, sans-serif;        
        }
    `}</style>
    </div>
  )
}

export default layout
