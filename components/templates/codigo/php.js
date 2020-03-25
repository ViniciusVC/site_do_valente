import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   PHP       ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>PHP</title>
        <FaviIcon />
        <meta name="description" content="PHP" />
        <link rel="canonical" href="/codigo/PHP" />
        <link rel="amphtml" href="/amp/codigo/PHP" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout cidade={cidade} modo={modo}>
          <h1>PHP</h1>
          <p>Aqui entrara a descrição...</p>
      </Layout>
      <style jsx>{`
      .codigoPHPListadeRotas{
        width:25%;
      }
      .codigoPHP{
        width:75%;
        /* 
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; */
      }
    `}</style>

    </div>
  )
}

export default atendimentoOi
