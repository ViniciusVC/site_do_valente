import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║   codigo - css 3 - Imagens de fundo    ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS - Imagens de fundo e atributo text" canonical="/codigo/css/css03/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
        <h1>CSS - Imagens de fundo e atributo text</h1><br/>
        A seguir um exemploes de estilisação de HTML:
        <DivNaveg>
          <div className="CSS03Div1">Exemplo Div</div> 
          <p>Texto do paragrafo 1</p>
          <p id="paragrafo2">Texto do paragrafo 2</p>
          <p className="paragrafo2">Texto do paragrafo 2</p>
        </DivNaveg>

        <DivCodigo titulo="Codigo HTML">
          {'<div className="CSS03Div1">Exemplo Div</div>'}<br/> 
          {'<p>Texto do paragrafo 1</p>'}<br/>
          {'<p id="paragrafo2">Texto do paragrafo 2</p>'}<br/>
          {'<p className="paragrafo2">Texto do paragrafo 2</p>'}<br/>
        </DivCodigo>
        
        <DivCodigo titulo="CSS">
          {'.CSS03Div1{'}<br/>
          {' width:75%;'}<br/>
          {' height:100px;'}<br/>
          {' background-image: URL("https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/39e4bf80c3864fdb71f236f79ee8fc10.jpg");'}<br/>
          {'}'}<br/>
          {'p {'}<br/>
          &ensp; {'text-align: right;'}<br/>
          &ensp; {'text-decoration: line-through;'}<br/>
          &ensp; {'text-indent: 4px;'}<br/>
          &ensp; {'font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;'}<br/>
          &ensp; {'font-size:12;'}<br/>
          &ensp; {'color:#FF0000;'}<br/>
          {'}'}<br/>
          {'/* ID */'}<br/>
          {'#paragrafo2 {'}<br/>
          &ensp; {'text-align: center;'}<br/>
          &ensp; {'text-decoration: blink;'}<br/>
          &ensp; {'color: green;'}<br/>
          {'}'}<br/>
          {'/* CLASS */'}<br/>
          {'.paragrafo3 { '}<br/>
          &ensp; {'color: #FFFFFF;'}<br/>
          {' } '}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
      .CSS03Div1{
        width:75%;
        height:100px;
        background-image: URL("https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/39e4bf80c3864fdb71f236f79ee8fc10.jpg");
      }
      p {
        text-align: right;
        text-decoration: line-through;
        text-indent: 4px;
        font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
        font-size:12;
        color:#FF0000;
      }

      /* ID */
      #paragrafo2 {
        text-align: center;
        text-decoration: blink;
        color: green;
      }

      /* CLASS */
      .paragrafo3 { 
        color: #FFFFFF;
      }
    `}</style>
    </div>
  )
}

export default atendimentoOi
