import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo  - HTML - Tag link       ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML Tag link</title>
        <FaviIcon />
        <meta name="description" content="HTML Tag link" />
        <link rel="canonical" href="/codigo/html/tag_link/" />
        <link rel="amphtml" href="/amp/codigo/html/tag_link/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML Tag link</h1>
        <p>A tag LINK é uma META TAG.</p>
        {'<head>'}<br/>
        {'<title>Meta tags</title>'}<br/>
        {'<meta charset="utf-8">'}<br/>
        {'<link rel="icone" href="logo.gif">'}<br/>
        {'<link rel="stylesheet" href="style.css">'}<br/>
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
