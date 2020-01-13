import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Div from '../../atoms/atDiv'
import ListadeRotas from '../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Knockout       ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>codigo Index</title>
        <FaviIcon />
        <meta name="description" content="Knockout JS" />
        <link rel="canonical" href="/codigo/knockout" />
        <link rel="amphtml" href="/amp/codigo/knockout" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo}/>
      <Div display="justificado">
        <div className="codigoIndexListadeRotas">
          <ListadeRotas/>
        </div>
        <div className="codigoIndex">
          <h1>Knockout JS</h1>
          <p>Aqui entrara a descrição...</p>
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
