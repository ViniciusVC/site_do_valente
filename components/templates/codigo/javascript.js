import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   HTML5         ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>JavaScript</title>
        <FaviIcon />
        <meta name="description" content="JavaScript" />
        <link rel="canonical" href="/codigo/JavaScript" />
        <link rel="amphtml" href="/amp/codigo/JavaScript" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>JavaScript</h1>
          <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
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
