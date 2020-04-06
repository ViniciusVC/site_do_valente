import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═══════════════════════════════════╗');
  console.log('║     codigo - HTML - Lista         ║');
  console.log('╚═══════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML Lista</title>
        <FaviIcon />
        <meta name="description" content="HTML Lista" />
        <link rel="canonical" href="/codigo/html/lista01/" />
        <link rel="amphtml" href="/amp/codigo/html/lista01/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Lista</h1>
          Segue um exemplo de Lista não ordenada<br/>
          <ul>
              <li>Vinicius</li>
              <li>Gabriel</li>
              <li>Filipe</li>
          </ul>
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
