import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const conversordetexto = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║      conversordetexto         ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>Conversor de Texto</title>
        <FaviIcon />
        <meta name="description" content="Conversor de Texto" />
        <link rel="canonical" href="/game/conversordetexto/" />
        <link rel="amphtml" href="/amp/game/conversordetexto/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Conversor de Texto</h1>
          <div>
            Digite ou cole o texto aqui:<br/>
            <textarea name="mensagem" rows="5" cols="30" spellcheck="false"></textarea><br />
          </div>
          <p>Primeira letra da fraze maiuscula.</p>
          <p>Todas as Primeiras Letra Maiusculas.</p>
          <p>TUDO MAIUSCULA.</p>
          <p>tudo minuscula.</p>
      </Layout>
      <style jsx>{`
        .Godzilla {
          position: absolute;
        }
      `}</style>

    </div>
  )
}

export default conversordetexto

