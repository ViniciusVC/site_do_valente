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
        <link rel="canonical" href="/Eu/" />
      </Head>
      <HeaderSideDoValente cidade={cidade} modo={modo} />
      <Div display="justificado">
        <div className="HomeListadeRotas">
          <ListadeRotas />
        </div>
        <div className="HomeIndex">
          <h1>Vinícius Valente Coutinho</h1>
          <p>Aqui entrará uma carta de apresentação.</p>
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
