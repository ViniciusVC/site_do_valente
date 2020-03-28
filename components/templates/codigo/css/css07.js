import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo   - css                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>CSS 07 - Posicionamento de elementos, bordas e z-index</title>
        <FaviIcon />
        <meta name="description" content="CSS" />
        <link rel="canonical" href="/codigo/css" />
        <link rel="amphtml" href="/amp/codigo/css" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS 7 - Posicionamento de elementos, bordas e z-index</h1>
          <div id="div1">
                {' #div1{ '}
                position: absolute;
                top:200px;
                left: 200px;
                width: 300px;
                height: 180px;
                background-color: brown;
                border-radius: 4px;
                -moz-border-radius: 4px;
                -webkit-border-radius: 4px;
                box-shadow: 2px 2px 2px #000000;
                z-index: 2;
                {' } '}
          </div>
          <div id="div2">
                  {' #div2{ '}
                  position: relative;
                  width: 300px;
                  height: 180px;
                  background-color:green;
                  border-radius: 4px;
                  -moz-border-radius: 4px;
                  -webkit-border-radius: 4px;
                  box-shadow: 4px 4px 4px #000000;
                  z-index: 1;
                  {' } '}
          </div>
      </Layout>
      <style jsx>{`
      /* Posicionamento de elementos, bordas e z-index */
      *{
          margin: 0;
          padding: 0;
      }

      #div1{
          position: absolute;
          top:200px;
          left: 200px;
          width: 300px;
          height: 180px;
          background-color: brown;
          border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          box-shadow: 2px 2px 2px #000000;
          z-index: 2;
      }

      #div2{
          position: relative;
          width: 300px;
          height: 180px;
          background-color:green;
          border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          box-shadow: 4px 4px 4px #000000;
          z-index: 1;
      }
    `}</style>

    </div>
  )
}

export default atendimentoOi
