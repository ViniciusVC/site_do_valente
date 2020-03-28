import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     odigo - PHP - redirect     ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>REDIRECIONAMENTOS NO PHP</title>
        <FaviIcon />
        <meta name="description" content="REDIRECT NO PHP" />
        <link rel="canonical" href="/codigo/php/redirect" />
        <link rel="amphtml" href="/amp/codigo/php/redirect" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CRIANDO REDIRECIONAMENTOS NO PHP</h1>
          <p>
            Para criar um REDIRECT 301 no PHP use o código a seguir:<br/>
            {'<?php'}<br/>
            Header( "HTTP/1.1 301 Moved Permanently" );<br/>
            Header( "Location: http://www.seu-novo-site.com.br" );<br/>
            {'?>'}<br/>
          </p>

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
