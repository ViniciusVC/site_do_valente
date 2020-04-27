import React from 'react'
import MoHead from '../moleculas/moHead'
import * as Util from '../../controller/util.js';

const templateHub = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos                   ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div className="DivHubIndex">
      <MoHead modo={modo} title="Hub de Contato" canonical="/"/>
      
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

  
// <Head>
//         <title>Hub de Contato</title>
//         <FavIcon />
//         <meta name="description" content="Hub de Contato" />
//         <link rel="canonical" href="/hub/" />
//       </Head>
