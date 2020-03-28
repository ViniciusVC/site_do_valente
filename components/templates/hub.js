import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import * as Util from '../../controller/util.js';
// import Arrow from '../atoms/atCampoTexto';
// import BtLink from '../atoms/atBtLink';

// ====== copiado de Documentoscopia - Projeto Piloto ======
import Alerta from '../moleculas/moAlerta.js'
import AtCampotexto from '../atoms/atCampoTexto';
//import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
// import BtSubmit from '../../atoms/atBtSubmit/index.js';
// import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
// import Captcha from '../../moleculas/moCaptcha.js';
// import ContentCamposDoc from './contentCamposDoc.js'
// import AtLabelCampo from './atLabelCampo.js';
// ==========================================================



const templateHub = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos                   ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div className="DivHubIndex">
      <Head>
        <title>Hub de Contato</title>
        <FavIcon />
        <meta name="description" content="Hub de Contato" />
        <link rel="canonical" href="/hub/" />
      </Head>
        <h1 className="DivHubTutulo">
          <img src="/static/assetsv5/img/robo.jpg" width="50px" height="50px"/>
          Hub de Contato
        </h1>
        <p>Está é uma aplicação, para testar a API do Hub de Contatos.</p>
        <iframe src="http://localhost:8000/hubbusca/" width="100%" height="700px"></iframe>
      <style jsx>{`
        .DivHubTutulo{
          font-size: 50px;
          margin: 0px;
          margin: 0px;
        }
        .DivHubIndex{
          margin-top: 0px;
          margin: 0px;
          padding: 0px;
          padding-left :10px;
          width:98%;
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

export default templateHub


  
