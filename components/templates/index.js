import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import Layout from '../moleculas/layout'

import Div from '../atoms/atDiv'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div>
      <Head>
        <title>Home</title>
        <FavIcon />
        <meta name="description" content="Portal da Oi." />
        <link rel="canonical" href="https://www.oi.com.br/" />
      </Head>
      <Layout cidade={cidade} modo={modo}>
          <h1>Bem vindo ao Projeto SITE_DO_VALENTE</h1>
          <p>Renderização server-side de HTML e AMP (isomorfica ReactJS e NextJS)<br />
            0 - Site pessoal<br />
            1 - Objetivo de compartilhar conhecimento técnico.<br />
            1 - Páginas em html (Next + React)<br />
            2 - Páginas AMP (Next + React + AMP)<br />
            4 - Gerador de captcha interno (Não funciona com balance).<br />
            Repositorio : https://github.com/ViniciusVC/site_do_valente</p>
        </Layout>
      <style jsx>{`
        .HomeListadeRotas{
         width:25%;
        }
        .HomeIndex{
          width:75%;
        }
      `}</style>
    </div>
  )
}

export default templateHome
