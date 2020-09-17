import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial - HTML - Pagina        ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Estrutura da Página HTML" description="Tutorial Estrutura da Página HTML5" canonical="/codigo/html/pagina/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>Estrutura da Página HTML5</h1>
        <p>Segue a estrutura de uma página HTML5.</p>        
        <DivNaveg>

        </DivNaveg>
        <DivCodigo titulo="codigo">
        {'<!DOCTYPE hml>'}<br/>
        {'<html lang=pt-br>'}<br/>
        {'<head>'}<br/>
        {'  <title>Estrutura da Página HTML5</title>'}<br/>
        {'  <meta charset=utf-8>'}<br/>
        {'</head>'}<br/>
        {'<body>'}<br/>
        {'<h2>Estrutura da Página HTML5</h2>'}<br/>
        {'<p> Paragrafo</p>'}<br/>
        {'</body>'}<br/>
        {'</html>'}<br/>
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
