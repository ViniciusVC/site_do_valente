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
        <title>CSS - Exemplos Anima But</title>
        <FaviIcon />
        <meta name="description" content="CSS - Exemplos Anima But" />
        <link rel="canonical" href="/codigo/css/css14" />
        <link rel="amphtml" href="/amp/codigo/css/css14" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>CSS - Exemplos Anima But</h1>
          <p>Veja o conteudo em /css/anima_but/.</p>
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
