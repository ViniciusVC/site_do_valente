import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - HTML - Tag link       ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML MetaTag link" description="Tutorial HTML MetaTag link" canonical="/codigo/html/tag_link/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Tag link</h1>
        <p>A tag LINK é uma META TAG.</p>        
        <DivNaveg>

        {'<head>'}<br/>
        {'<title>Meta tags</title>'}<br/>
        {'<meta charset="utf-8">'}<br/>
        {'<link rel="icone" href="logo.gif">'}<br/>
        {'<link rel="stylesheet" href="style.css">'}<br/>
        {'</head>'}<br/>
        </DivNaveg>
        <DivCodigo titulo="codigo">

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
