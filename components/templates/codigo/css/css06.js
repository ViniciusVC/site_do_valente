import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════════╗');
  console.log('║ Tutorial - css 6 - Margin, padding e float ║');
  console.log('╚══════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CSS - Margin, padding e floatAula" 
        description = "Tutorial 6 - CSS - Margin, padding e float"
        canonical="/tutorial/css/css06/"/> 
      
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
      
        <h1>CSS - Margin, padding e float</h1>
        <p>
          Margin : Cria um espaçamento por fora da div.<br/>
          Padding : Cria um espaçamento por dentro da div.<br/>
          Float : Alinha a div a direita.
        </p>
        <p>
        A seguir alguns exemplos de estilização de HTML:
        </p> 
        <DivNaveg>
          <div id="div1">div1.</div>
          <div id="div2">div2.</div>
          <div id="div3">div3.</div>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<div id="div1">Conteudo da div1.</div>'}<br/>
          {'<div id="div2">Conteudo da div2.</div>'}<br/>
          {'<div id="div3">Conteudo da div3.</div>'}
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {' #div1{ '}<br/>
          &ensp; Margin: 20px;<br/>
          {' } '}<br/>
          {' #div2{ '}<br/>
          &ensp; padding: 20px;<br/>
          {' } '}<br/>
          {' #div3{ '}<br/>
          &ensp; float: right;<br/>
          {' } '}<br/>
        </DivCodigo>

      </Layout>

      <style jsx>{`
        #div1{
          background-color:#f0f0ea;
          Margin: 20px;
        }
        #div2{
          background-color:#00ffea;
          padding: 20px;
        }
        #div3{
          background-color:#ff00ea;
          float: right;
        }
    `}</style>

    </div>
  )
}

export default atendimentoOi
