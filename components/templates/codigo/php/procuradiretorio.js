import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════╗');
  console.log('║ codigo - PHP - procura diretorio ║');
  console.log('╚══════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>Encontrar diretorio no PHP</title>
        <FaviIcon />
        <meta name="description" content="Encontrar diretorio no PHP" />
        <link rel="canonical" href="/codigo/php/procuradiretorio" />
        <link rel="amphtml" href="/amp/codigo/php/procuradiretorio" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Encontrar diretorio no PHP</h1>
          <p>
            {'<?php'}<br/>
            {'if(is_dir(" C:/Server/htdocs/teste")) { '}<br/>
            {'  echo "diretório encontrádo"; '}<br/>
            {'} '}<br/>
            {'else { '}<br/>
            {'  echo "não foi possível encontrar o diretório ou este é um arquivo"; '}<br/>
            {'} '}<br/>
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
