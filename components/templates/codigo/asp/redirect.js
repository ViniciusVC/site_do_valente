import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'

import Div from '../../atoms/atDiv'
import ListadeRotas from '../../moleculas/moListadeRotas/ASP.js'
import HeaderSideDoValente from '../../moleculas/moHeaderSideDoValente/ASP.js'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo  ASP       ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>REDIRECT com ASP</title>
        <FaviIcon />
        <meta name="description" content="REDIRECT com ASP" />
        <link rel="canonical" href="/codigo/asp/redirect" />
        <link rel="amphtml" href="/amp/codigo/asp/redirect" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo}/>
      <Div display="justificado">
        <div className="codigoASPListadeRotas">
          <ListadeRotas/>
        </div>
        <div className="codigoASP">
        <h1>REDIRECT com ASP</h1>
          <p>
          <xmp>
          {'<%@ Language=VBScript %>'}<br/>
          {'<%'}<br/>
          {'Response.Status="301 Moved Permanently"'}<br/>
          {'Response.AddHeader "Location","http://www.seu-novo-site.com.br/"'}<br/>
          {'%>'}<br/>
          </xmp>
          </p>
        </div>
      </Div>
      <style jsx>{`
      .codigoASPListadeRotas{
        width:25%;
      }
      .codigoASP{
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
