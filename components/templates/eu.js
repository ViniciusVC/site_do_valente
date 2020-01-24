import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import Div from '../atoms/atDiv'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../controller/util.js';

const templateHome = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Eu                                ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");
  return (
    <div>
      <Head>
        <title>Vinícius Valente Coutinho</title>
        <FavIcon />
        <meta name="description" content="Vinícius Valente Coutinho" />
        <link rel="canonical" href="/eu/" />
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo} />

      <Div display="justificado">
        <div className="HomeListadeRotas">
          <ListadeRotas />
        </div>
        <div className="HomeIndex">
          <p>Meu nome é Vinícius Valente Coutinho, Analista de Sistemas,<br/> 
          com experiencia em configuração de CDN, Apache, AMP, SEO, NodeJS, PHP, Hadoop.<br/> 
          Atualmente liderando equipe de desenvolvimento de projeto de BigData.<br/> 
          Atuei como lider de equipe em projeto AMP com foco em melhoria do SEO.</p>
        </div>
      </Div>
      <style jsx>{`
        .HomeListadeRotas{
         width:25%;
        }
        .HomeIndex{
          width:75%;
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

export default templateHome
