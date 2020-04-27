import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const codigoAspRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     codigo - ASP - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>REDIRECT com ASP</title>
        <FaviIcon />
        <meta name="description" content="REDIRECT com ASP" />
        <link rel="canonical" href="/codigo/asp/redirect/" />
        <link rel="amphtml" href="/amp/codigo/asp/redirect/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="ASP">
        <h1>REDIRECT com ASP</h1>
          <DivCodigo titulo="REDIRECT com ASP">
            <xmp>
              {'<%@ Language=VBScript %>'}<br/>
              {'<%'}<br/>
              {'Response.Status="301 Moved Permanently"'}<br/>
              {'Response.AddHeader "Location","http://www.seu-novo-site.com.br/"'}<br/>
              {'%>'}<br/>
            </xmp>
          </DivCodigo> 
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

export default codigoAspRedirect
