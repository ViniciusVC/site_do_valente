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
        <title>CSS 3 - Imagens de fundo e atributo text</title>
        <FaviIcon />
        <meta name="description" content="CSS" />
        <link rel="canonical" href="/codigo/css" />
        <link rel="amphtml" href="/amp/codigo/css" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS 3 - Imagens de fundo e atributo text</h1>
          <p>
            {' /*Istó é um comentario no css*/ '}
            {'    body { '}
            {'          background-image: URL("https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/39e4bf80c3864fdb71f236f79ee8fc10.jpg"); '}
            {'      } '}
            {'      p { '}
            {'          text-align: right; '}
            {'          text-decoration: line-through; '}
            {'          text-indent: 4px; '}
            {'          font-family:"Trebuchet MS", Arial, Helvetica, sans-serif; '}
            {'          font-size:12; '}
            {'          color:#FF0000; '}
            {'      } '}
          </p>
          <p id="paragrafo2">        
                  /* ID */
                  {' #paragrafo2 { '}
                      text-align: center;
                      text-decoration: blink;
                      color: green;
                  {' } '}
          </p>
          <p className="paragrafo3">
                  /* CLASS */
                  {' .paragrafo3 { '}
                      color: #FFFFFF; '}
                  {' } '}
          </p>
      </Layout>
      <style jsx>{`
      .divCss{
        width:75%;
        background-image: URL("https://mundoeducacao.bol.uol.com.br/upload/conteudo_legenda/39e4bf80c3864fdb71f236f79ee8fc10.jpg");
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
