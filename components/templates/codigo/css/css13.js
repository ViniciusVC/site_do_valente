import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'

import Div from '../../../atoms/atDiv'

import ListadeRotas from '../../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../../moleculas/moHeaderSideDoValente/index.js'

//import HeaderMinhaOi from '../../organisms/codigo/headerCodigo.js/index.js.js'
//import FooterMinhaOi from '../../organisms/codigo/footerCodigo.js/index.js'
//import ContentAtendimento from '../../organisms/codigo/contentAtendimento.js'
//import Line from '../../atoms/atLine';
//import HeaderMenu from "../../moleculas/codigo/headerMenu";
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
        <title>CSS 13 - Tabelas Style</title>
        <FaviIcon />
        <meta name="description" content="CSS" />
        <link rel="canonical" href="/codigo/css" />
        <link rel="amphtml" href="/amp/codigo/css" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS 13 - Tabelas Style</h1>
          <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
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