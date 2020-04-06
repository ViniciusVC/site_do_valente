import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║    codigo  - HTML - div e span     ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML - CANVAS</title>
        <FaviIcon />
        <meta name="description" content="HTML - CANVAS" />
        <link rel="canonical" href="/codigo/html/canvas/" />
        <link rel="amphtml" href="/amp/codigo/html/div_span/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML - CANVAS</h1>
        <p>
          Canvas é um elemento da HTML5 destinado a delimitar uma área para renderização dinâmica de gráficos. Todo o trabalho de criação e animação é realizado através de linguagens de programação dinâmica. O elemento foi originalmente introduzido pela Apple Inc. para o navegador Safari.
        </p>
        <p>Segue um exemplos das tags CANVAS.</p>
        <canvas width="400" heigth="400">
        </canvas>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        canvas {
          background-color: red;
          padding: 20px;
        }
        span {
          background-color: blue; 
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
