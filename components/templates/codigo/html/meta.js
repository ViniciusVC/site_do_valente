import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     codigo  - HTML - meta tags         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML META TAGS</title>
        <FaviIcon />
        <meta name="description" content="HTML META TAGS" />
        <link rel="canonical" href="/codigo/html/meta/" />
        <link rel="amphtml" href="/amp/codigo/html/meta/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML META TAGS</h1>
        <p>Segue exemplo de meta tags.</p>
        {'<head>'}<br/>
        {'<title>Meta tags</title>'}<br/>
        {'<meta charset="utf-8">'}<br/>
        {'<meta name="description" content="exmplo de pagina">'}<br/>
        {'<meta name="keywords" content="meta, html, valente, palavra, chave">'}<br/>
        {'<meta name="author" content="Vinícius Valente">'}<br/>
        {'<meta http-equiv="refresh" content="10">'}<br/>
        {'</head>'}<br/>
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
