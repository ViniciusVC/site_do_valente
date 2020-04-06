import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo  - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML Semantica</title>
        <FaviIcon />
        <meta name="description" content="HTML Semantica" />
        <link rel="canonical" href="/codigo/html/semantica/" />
        <link rel="amphtml" href="/amp/codigo/html/semantica/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML Semantica</h1>
        Obs.: para expor o codigo basta trocar {'<>'} por {'&lt;'} e {'&gt;'} 
        <br/>&lt;section&gt;
        <br/>&lt;article&gt;
        <br/>&lt;nav&gt;
        <br/>&lt;aside&gt;
        <br/>&lt;main&gt;
        <br/>&lt;figure&gt;
        <br/>&lt;footer&gt;
        <br/>&lt;a&gt;
        <br/>&lt;em&gt;
        <br/>&lt;strong&gt;
        <br/>&lt;cite&gt;
        <br/>&lt;q&gt;
        <br/>&lt;time&gt;
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
