import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const codigoAsp = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║        codigo  CGI        ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>CGI PERL</title>
        <FaviIcon />
        <meta name="description" content="CGI PERL" />
        <link rel="canonical" href="/codigo/cgi/" />
        <link rel="amphtml" href="/amp/codigo/cgi/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CGI">
          <h1>CGI PERL</h1>
          <p>CGI é um protocolo de comunicação (um código) através do qual o servidor HTTP (ou servidor web) intermedia a transferência de informações entre um programa (no mesmo computador que o servidor) e um cliente HTTP (o seu browser).</p>
          <p>Perl é uma linguagem de programação.</p>
          <Link href={"/codigo/cgi/redirect?regiao="+regiao}>Como fazer um redirect 301 em CGI</Link>
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

export default codigoAsp
