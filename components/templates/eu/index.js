import React from 'react'
import Head from 'next/head'
import FavIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Eu                                ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao, "MG");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div>
      <Head>
        <title>Vinícius Valente Coutinho</title>
        <FavIcon />
        <meta name="description" content="Vinícius Valente Coutinho" />
        <link rel="canonical" href="/eu/" />
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <p>Meu nome é Vinícius Valente Coutinho, Analista de Sistemas,<br/> 
          com experiencia em configuração de CDN, Apache, AMP, SEO, NodeJS, PHP, Hadoop.<br/> 
          Atualmente liderando equipe de desenvolvimento de projeto de BigData.<br/> 
          Atuei como lider de equipe em projeto AMP com foco em melhoria do SEO.</p>
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
