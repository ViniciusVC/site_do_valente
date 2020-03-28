import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const codhtml5 = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║        codigo   HTML5         ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao, "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML5</title>
        <FaviIcon />
        <meta name="description" content="HTML5" />
        <link rel="canonical" href="/codigo/html5" />
        <link rel="amphtml" href="/amp/codigo/html5" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML5</h1>
          <p>Linguagens de programação podem ser usadas para expressar algoritmos com precisão. O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software. Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
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

export default codhtml5
