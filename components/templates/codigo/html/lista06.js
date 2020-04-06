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
        <title>HTML Lista com Descrição</title>
        <FaviIcon />
        <meta name="description" content="HTML Lista com Descrição" />
        <link rel="canonical" href="/codigo/html/lista06/" />
        <link rel="amphtml" href="/amp/codigo/html/lista06/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Lista com Descrição</h1>
          Segue um exemplo de Lista com descrição<br/>
          <dl> 
              <dt>Titulo(dt)</dt>
              <dd>descrição(dd)</dd>
              <dt>Titulo(dt)</dt>
              <dd>descrição(dd)</dd>
              <dt>Titulo(dt)</dt>
              <dd>descrição(dd)</dd>
          </dl>
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