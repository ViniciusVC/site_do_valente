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
    <div className="Body">
      <Head>
        <title>CSS - img, text</title>
        <FaviIcon />
        <meta name="description" content="CSS - img, text" />
        <link rel="canonical" href="/codigo/css/css02/" />
        <link rel="amphtml" href="/amp/codigo/css/css02/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
      <h1>CSS - img, text</h1>
      A seguir alguns exemploes de estilisação de HTML:
      {' /*Istó é um comentario no css*/ '}<br/>
      <p>
      {'<p></p>'}
      {'        /* Aplicando CSS ao componente */'}<br/>
      {'        p { '}<br/>
      {'            text-align: right; '}<br/>
      {'            text-decoration: line-through; '}<br/>
      {'            text-indent: 4px; '}<br/>
      {'            font-family:"Trebuchet MS", Arial, Helvetica, sans-serif; '}<br/>
      {'            font-size:12; '}<br/>
      {'            color:#FF0000; '}<br/>
      {'        } '}<br/>
      </p>
      <p id="paragrafo2">        
      {'<p id="paragrafo2"></p>'}
      {'        /* Aplicando CSS com ID */'}<br/>
      {'       #paragrafo2 {'}<br/>
      {'            text-align: center;'}<br/>
      {'            text-decoration: blink;'}<br/>
      {'            color: green;'}<br/>
      {'        }'}<br/>
      </p>
      <p class="paragrafo3">
      {'<p class="paragrafo3"></p>'}
      {'        /* Aplicando CSS com CLASS */'}<br/>
      {'        .paragrafo3 { '}<br/>
      {'            color: #FFFFFF;'}<br/>
      {'       }'}<br/>
      </p>      
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        p {
            text-align: right;
            text-decoration: line-through;
            text-indent: 4px;
            font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
            font-size:12;
            color:#FF0000;
        }
        /* ID */
        #paragrafo2 {
            text-align: center;
            text-decoration: blink;
            color: green;
        }
        /* CLASS */
        .paragrafo3 { 
            color: #FFFFFF;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
