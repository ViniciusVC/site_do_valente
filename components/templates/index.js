import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import Layout from '../moleculas/layout'
import * as Util from '../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      index                             ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = props.regiao;
  var modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);
  console.log('regiao='+regiao);
  console.log('modo='+modo);
  return (
    <div>
      <Head>
        <title>Home SITE DO VALENTE</title>
        <FavIcon />
        <meta name="description" content="Bem vindo ao SITE DO VALENTE" />
        <link rel="canonical" href="/" />
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>Bem vindo ao Projeto SITE_DO_VALENTE</h1>
          <p>Melhor que jogo do {JsonRegiao.timea} com {JsonRegiao.timeb}.<br />
          Renderização server-side de HTML e AMP (isomorfica ReactJS e NextJS)<br />
            0 - Site pessoal<br />
            1 - Objetivo de compartilhar conhecimento técnico.<br />
            1 - Páginas em html (Next + React)<br />
            2 - Páginas AMP (Next + React + AMP)<br />
            4 - Gerador de captcha interno (Não funciona com balance).<br />
            Repositorio : https://github.com/ViniciusVC/site_do_valente</p>
            <br />
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

export default templateHome
