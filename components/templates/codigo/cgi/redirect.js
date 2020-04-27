import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'

const codigoAspRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     codigo - CGI - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>REDIRECT com CGI PERL</title>
        <FaviIcon />
        <meta name="description" content="REDIRECT com CGI PERL" />
        <link rel="canonical" href="/codigo/cgi/redirect/" />
        <link rel="amphtml" href="/amp/codigo/cgi/redirect/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CGI">
        <h1>REDIRECT com CGI PERL</h1>
          <p>Como fazer redirect 301 no codigo com CGI PERL</p>
          <DivCodigo titulo="Codigo redirect CGI PERL">
            <xmp>
              {'$q = new CGI;'}<br/>
              {'print $q->redirect("http://www.seu-novo-site.com.br/");'}<br/>
            </xmp>
          </DivCodigo> 
          <Link href={"/codigo/cgi?regiao="+regiao}>O que é CGI?</Link>
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
