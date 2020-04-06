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
        <title>CSS - Links e Divs</title>
        <FaviIcon />
        <meta name="description" content="CSS - Links e Divs" />
        <link rel="canonical" href="/codigo/css/css04/" />
        <link rel="amphtml" href="/amp/codigo/css/css04/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS - Links e Divs</h1>
          A seguir alguns exemploes de estilisação de HTML: 
          <div className="top_div">
          {' *{ '}<br/>
          {'     margin: 0; '}<br/>
          {'     padding: 0; '}<br/>
          {'   } '}<br/>
          {'   .top_div { '}<br/>
          {'       position: relative; '}<br/>
          {'       width: 100%; '}<br/>
          {'       height: 80px; '}<br/>
          {'       background-color: #FF0000; '}<br/>
          {' } '}<br/>     
          </div>
          <a href="css_04.html">
            {' a { '}<br/>
            {'   font-family: Arial, Helvetica, sans-serif; '}<br/>
            {'   color: #FF0000; '}<br/>
            {'   /*Para retirar o sublinhado*/ '}<br/>
            {'   text-decoration: none; '}<br/>
            {' } '}<br/>  
          </a><br />
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
