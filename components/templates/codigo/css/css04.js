import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial - css 4                ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS - Links e Divs" canonical="/codigo/css/css04/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
        <h1>CSS - Links e Divs</h1>
        A seguir alguns exemploes de estilisação de HTML:   
        <DivNaveg>
          <div className="top_div">
            Exemplo Div.
          </div>
          <a href="css_04.html">
            Exemplo de Link.
          </a><br />
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<div className="top_div">'}<br/>
          Exemplo Div.<br/>
          {'</div>'}<br/>
          {'<a href="css_04.html">'}<br/>
          Exemplo de Link.<br/>
          {'</a><br />'}<br/>
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {' *{ '}<br/>
          &ensp; {'margin: 0; '}<br/>
          &ensp; {'padding: 0; '}<br/>
          {'   } '}<br/>
          {'.top_div { '}<br/>
          &ensp; {'position: relative; '}<br/>
          &ensp; {'width: 100%; '}<br/>
          &ensp; {'height: 80px; '}<br/>
          &ensp; {'background-color: #FF0000; '}<br/>
          {' } '}<br/>
          {' a { '}<br/>
          &ensp; {'font-family: Arial, Helvetica, sans-serif; '}<br/>
          &ensp; {'color: #FF0000; '}<br/>
          &ensp; {'/*Para retirar o sublinhado*/ '}<br/>
          &ensp; {'text-decoration: none; '}<br/>
          {' } '}<br/>
        </DivCodigo>

      </Layout>
      <style jsx>{`
        /*Divis e Links*/
        *{
            margin: 0;
            padding: 0;
        }
        .top_div {
            position: relative;
            width: 100%;
            height: 80px;
            background-color: #FF0000;
            border-right: black;
        }
        a {
            font-family: Arial, Helvetica, sans-serif;
            color: #FF0000;
            /*Para retirar o sublinhado*/
            text-decoration: none;
        }

        a:hover{
            color: #0000FF;
            font-weight: bold;
        }

        a:active {
            color: #000000;
            font-weight: inherit;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
