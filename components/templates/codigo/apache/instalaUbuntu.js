import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'

import Div from '../../../atoms/atDiv'
import ListadeRotas from '../../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║        codigo   Apache       ║');
  console.log('╚════════════════════════════════╝');

  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <Head>
        <title>Instalação o Apache no Ubuntu</title>
        <FaviIcon />
        <meta name="description" content="Apache Instalar Ubuntu" />
        <link rel="canonical" href="/codigo/apache/instalaubuntu" />
        <link rel="amphtml" href="/amp/codigo/apache/instalaubuntu" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout cidade={cidade} modo={modo}>
        <h1>Instalação o Apache no Ubuntu</h1>
          <p>
          <br/>Resumo
          <br/>
          <br/>Logar como administrador:
          <br/>$ sudo su
          <br/>
          <br/>Atualizar o Ubuntu:
          <br/>$ apt-get update 
          <br/>
          <br/>Instalar o Apache v2: 
          <br/>$ apt-get install apache2
          <br/>
          <br/>Reinicie o Apache: 
          <br/>$ /etc/init.d/apache2 restart
          <br/>
          <br/>Permissão de escrita no diretório padrão do Apache: 
          <br/>$ chmod 777 /var/www 
          <br/>
          <br/>Teste usando
          <br/>http://localhost
          <br/>http://127.0.0.1/
          <br/>http://localhost:80
          <br/>http://127.0.0.1:80
          <br/>
          </p>
        </Layout>
      <style jsx>{`
      .codigoApacheListadeRotas{
        width:25%;
      }
      .codigoApache{
        width:75%;
        /* 
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; */
      }
    `}</style>
    </div>
  )
}

export default atendimentoOi
