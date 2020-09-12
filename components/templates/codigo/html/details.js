import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     Tutorial  - HTML - TAG DETAILS       ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Tutorial HTML TAG DETAILS" description="Tutorial HTML TAG DETAILS" canonical="/codigo/html/detalhes/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML - TAG DETAILS</h1>
        <p>O elemento HTML details (details) é usado como uma ferramenta de onde o usuário irá obter informações adicionais.</p>
        <p>Segue 2 exemplos de TAG DETAILS.</p>        
        <DivNaveg>
        <details>
            <summary>Ver detalhes</summary>
            <ul>
                <li>teste 1</li>
                <li>teste 2</li>
                <li>teste 3</li>
            </ul>
         </details>
         <details>
            <summary>Ver detalhes</summary>
            <a href="http://wwww.google.com" tabindex="3" accesskey="g">google</a><br/>
            <a href="http://wwww.youtube.com" tabindex="1" accesskey="y">youtube</a><br/>
            <a href="http://wwww.gmail.com" tabindex="2" accesskey="m">GMAIL</a><br/>
        </details>
        </DivNaveg>

        <DivCodigo titulo="Codigo HTML com DETAILS">
          {'<details>'}<br/>
          {'<summary>Ver detalhes</summary>'}<br/>
          &ensp;{'<ul>'}<br/>
          &ensp; &ensp;{'<li>teste 1</li>'}<br/>
          &ensp; &ensp;{'<li>teste 2</li>'}<br/>
          &ensp; &ensp;{'<li>teste 3</li>'}<br/>
          &ensp; {'</ul>'}<br/>
          {'</details>'}<br/>
          {'<details>'}<br/>
          &ensp;{'<summary>Ver detalhes</summary>'}<br/>
          &ensp;{'<a href="http://wwww.google.com" tabindex="3" accesskey="g">google</a><br/>'}<br/>
          &ensp;{'<a href="http://wwww.youtube.com" tabindex="1" accesskey="y">youtube</a><br/>'}<br/>
          &ensp;{'<a href="http://wwww.gmail.com" tabindex="2" accesskey="m">GMAIL</a><br/>'}<br/>
          {'</details>'}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
