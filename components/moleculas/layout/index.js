import React from 'react'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../moListadeRotas/index.js'
import HeaderSideDoValente from '../moHeaderSideDoValente/index.js'
import * as Util from '../../../controller/util.js';

const layout = props => {
  console.log('Rodando /layout.js');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div className="Body">
      <Div display="justificado">
        <div className="borda"></div>
        <Div display="vertical">
          <div className="borda"></div>
          <HeaderSideDoValente cidade={cidade} modo={modo}/>
          <div className="borda"></div>
          <Div display="justificado">
            <div className="codigoIndexListadeRotas DivSombra">
              <ListadeRotas/>
            </div>
            <div className="borda"></div>
            <div className="divCss DivSombra">
              {props.children}
            </div>  
          </Div>
          <div className="borda"></div><HeaderSideDoValente cidade={cidade} modo={modo}/>
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
        border-radius: 8px;
        color: #222222;
        display: block;
        /*height: 3.42857143rem;*/
        border: solid 1px #dbdbdb;
        padding: 10px;
        box-sizing: border-box;
        -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
        -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
        box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);        
      }
      .codigoIndexListadeRotas{
        width:25%;
      }
      .divCss{
        width:75%;
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
          background-image: linear-gradient(to right, #FFFFFF , #D3D3D3);
          font-family: SimplonBP-Regular, sans-serif;        
        }
    `}</style>
    </div>
  )
}

export default layout
