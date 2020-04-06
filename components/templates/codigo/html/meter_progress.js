import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════╗');
  console.log('║  codigo  - HTML - Meter e Progress   ║');
  console.log('╚══════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML Meter e Progress</title>
        <FaviIcon />
        <meta name="description" content="HTML Meter e Progress" />
        <link rel="canonical" href="/codigo/html/meter_progress/" />
        <link rel="amphtml" href="/amp/codigo/html/meter_progress/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML Meter e Progress</h1>
          Medidor (Meter) : <br/>
          <meter min="0" optimum="6" high="8" max="10" value="2" ></meter><br />
          <meter min="0" optimum="5" high="8" max="10" value="6" ></meter><br />
          <meter min="0" optimum="6" high="8" max="10" value="9" ></meter><br />
          Barra de Progresso (Progress) : <br />
          <progress max="100" value="80"></progress>
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
