import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     Tutorial - HTML - Formulário         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Tabindex Accesskey" 
        description="Tutorial HTML Tabindex Accesskey" 
        canonical="/tutorial/html/tabindexaccesskey/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML Tabindex Accesskey</h1>
        <p>
          O atributo global tabindex indica se um elemento pode receber foco de entrada (se ele é focável), se e em qual posição ele deve fazer parte da navegação sequencial do teclado (geralmente com a tecla Tab, daí seu nome).<br/>
          Ele aceita valores inteiros, com diferentes resultados dependendo do valor.<br/>
        </p>
        <p>O atributo accesskey fornece uma dica para gerar um atalho de teclado no elemento atual.</p>
        <p>Segue exemplo das propriedades Tabindex e Accesskey.</p>
        <DivNaveg>

        <a href="http://wwww.google.com" tabindex="3" accesskey="g">google</a><br/>
          <a href="http://wwww.youtube.com" tabindex="1" accesskey="y">youtube</a><br/>
          <a href="http://wwww.gmail.com" tabindex="2" accesskey="m">GMAIL</a><br/>

        </DivNaveg>
        <DivCodigo titulo="Codigo HTML Tabindex Accesskey">
          {'<a href="http://gwwww.google.com" tabindex="3" accesskey="g">google</a><br/>'}<br/>
          {'<a href="http://wwww.youtube.com" tabindex="1" accesskey="y">youtube</a><br/>'}<br/>
          {'<a href="http://wwww.gmail.com" tabindex="2" accesskey="m">GMAIL</a><br/>'}<br/>
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
