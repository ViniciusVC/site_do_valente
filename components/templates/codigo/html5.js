import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Div from '../../atoms/atDiv'

import ListadeRotas from '../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../moleculas/moHeaderSideDoValente/index.js'

//import HeaderMinhaOi from '../../organisms/codigo/headerCodigo.js/index.js.js'
//import FooterMinhaOi from '../../organisms/codigo/footerCodigo.js/index.js'
//import ContentAtendimento from '../../organisms/codigo/contentAtendimento.js'
//import Line from '../../atoms/atLine';
//import HeaderMenu from "../../moleculas/codigo/headerMenu";
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   HTML5         ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>codigo Index</title>
        <FaviIcon />
        <meta name="description" content="HTML5" />
        <link rel="canonical" href="/codigo/html5" />
        <link rel="amphtml" href="/amp/codigo/html5" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo}/>
      <Div display="justificado">
        <div className="codigoIndexListadeRotas">
          <ListadeRotas/>
        </div>
        <div className="codigoIndex">
          <h1>HTML5</h1>
          <p>Linguagens de programação podem ser usadas para expressar algoritmos com precisão. O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software. Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
        </div>
      </Div>
      <style jsx>{`
      .codigoIndexListadeRotas{
        width:25%;
      }
      .codigoIndex{
        width:75%;
        /* 
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; */
      }
    `}</style>
      <style jsx global>{`
        ${Util.fontesCSS1()}
        ${Util.fontesCSS2()}
        ${Util.fontesCSS3()}
        ${Util.fontesCSS4()}
        ${Util.fontesCSS5()}
        body{
          margin: 0px;
          padding: 0px;
          background-color: #ffffff;
          font-family: SimplonBP-Regular, sans-serif;        
        }
    `}</style>
    </div>
  )
}

export default atendimentoOi
