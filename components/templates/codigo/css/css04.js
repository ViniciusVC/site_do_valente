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
        <title>CSS 4 - Links e Divs</title>
        <FaviIcon />
        <meta name="description" content="CSS" />
        <link rel="canonical" href="/codigo/css" />
        <link rel="amphtml" href="/amp/codigo/css" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS 4 - Links e Divs</h1>
          <div className="top_div">
          Div   
          </div>
          <a href="css_04.html">CSS 04 Links</a><br />
      </Layout>
      <style jsx>{`
        /*Divis e Links*/
        *{
            margin: 0;
            padding: 0;
        }
        .top_div {
            position: relative;
            width: 100%;
            height: 80px;
            background-color: #FF0000;
            border-right: black;
        }
        a {
            font-family: Arial, Helvetica, sans-serif;
            color: #FF0000;
            /*Para retirar o sublinhado*/
            text-decoration: none;
        }

        a:hover{
            color: #0000FF;
            font-weight: bold;
        }

        a:active {
            color: #000000;
            font-weight: inherit;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
