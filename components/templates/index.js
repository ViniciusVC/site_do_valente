import React from 'react'
import Layout from '../moleculas/layout'
import MoHead from '../moleculas/moHead'
import BtLink from '../atoms/atBtLink'
import * as Util from '../../controller/util.js';

//import Head from 'next/head'
//import FavIcon from '../atoms/atFavIcon'

const templateHome = function (props) {
  console.log('╔══════════════════════════════════════╗');
  console.log('║      index Home                      ║');
  console.log('╚══════════════════════════════════════╝');
  var regiao = props.regiao;
  var modo = props.modo;
  const JsonRegiao = Util.regiao(regiao);
  //{JsonRegiao.timea}
  console.log('regiao='+regiao);
  console.log('modo='+modo);
  return (
    <div>
      <MoHead modo={modo} title="Home SITE DO VALENTE" description="Bem vindo ao SITE DO VALENTE" canonical="/"/>
      <Layout regiao={regiao} modo={modo} titulo="Home" categoria="Home">
          <h1>Bem vindo ao Projeto SITE_DO_VALENTE</h1>
          <p>Melhor que jogo do {JsonRegiao.timea} com {JsonRegiao.timeb}.<br />
          Renderização server-side de HTML e AMP (isomorfica ReactJS e NextJS)<br />
            0 - Site pessoal<br />
            1 - Objetivo de compartilhar conhecimento técnico.<br />
            1 - Páginas em html (Next + React)<br />
            2 - Páginas AMP (Next + React + AMP)<br />
            4 - Gerador de captcha interno (Não funciona com balance).<br />
            Repositorio : https://github.com/ViniciusVC/site_do_valente</p>
            <BtLink href={"/eu/?regiao="+regiao} value="Quem sou eu." estilo="cinza"/>
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


//<Head>
//<title>Home SITE DO VALENTE</title>
//<FavIcon />
//<meta name="description" content="Bem vindo ao SITE DO VALENTE" />
//<link rel="canonical" href="/" />
//<link rel="canonical" href="https://www.oi.com.br/"/>
//<link rel="amphtml" href="https://www.oi.com.br/amp/"/>
//<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
//<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
//</Head>