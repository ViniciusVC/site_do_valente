import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import Div from '../atoms/atDiv'
import ListadeRotas from '../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
import * as Util from '../../controller/util.js';
import Arrow from '../atoms/atCampoTexto';
import BtLink from '../atoms/atBtLink';

// ====== copiado de Documentoscopia - Projeto Piloto ======
import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
import Alerta from '../../moleculas/moAlerta.js'
import TextoDestaque from './atTextoDestaque.js';
import AtCampotexto from '../../atoms/atCampoTexto/index.js';
import BtSubmit from '../../atoms/atBtSubmit/index.js';
import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
import Captcha from '../../moleculas/moCaptcha.js';
import ContentCamposDoc from './contentCamposDoc.js'
import AtLabelCampo from './atLabelCampo.js';
// ==========================================================



const templateHub = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos                   ║');
  console.log('╚════════════════════════════════════════╝');
  var cidade = Util.validaProps(props.cidade, "Rio de Janeiro");
  var modo = Util.validaProps(props.modo, "html");

  //const compress = new Compress()
  document.getElementById("divAlertaErro").style.display = "block";
  document.getElementById("AlertaErroInf").innerHTML = "Preparando para enviar...";

  function enviar(){
    var mensagemFinal = "";
    if(document.getElementById("cpf").value==""){
      mensagemFinal = "CPF não foi preenchido"; 
    }
    if (mensagemFinal==""){
      document.getElementById('formdocumentoscopia').submit()
    }else{
      document.getElementById("AlertaErroInf").innerHTML = mensagemFinal;
    }
  }

  return (
    <div>
      <Head>
        <title>Hub de Contato</title>
        <FavIcon />
        <meta name="description" content="Hub de Contato" />
        <link rel="canonical" href="/hub/" />
      </Head>

      <HeaderSideDoValente cidade={cidade} modo={modo} />
      <Div display="justificado">
        <div className="HubListadeRotas">
          <ListadeRotas />
        </div>
        <div className="DivHub">
          <form action="/api1/meusdocumentos/" method="post" id="formdocumentoscopia" name="formdocumentoscopia" encType="multipart/form-data">
            <div className="grupodecampos">
              <TextoDestaque texto="Hub de Contato" />
              <TextoDestaque texto="Está é uma aplicação, para testar a API do Hub de Contatos." />
              <TextoDestaque texto="Entre com um CPF no campo a baixo." />
              <AtCampotexto type="text" id="CPF" name="CPF" autocomplete="off" placeholder="CPF"/>
            </div>
            <span id="erro"></span>
            <a onClick={() => {enviar()}} className="btLinklaranja">Buscar contatos</a>
          </form>
        </div>
      </Div>

      <Alerta modo={modo}/>
      <style jsx>{`
          .btLinklaranja {
            font-family: oiTextRegular, sans-serif;
            background-color: #f8562c;
            background-image: linear-gradient(260deg, #fb851c, #f8562c); 
            border-radius:6px;
            color: #ffffff;
            display: block;
            font-size: 16px;
            height: 3.2rem;
            text-align: center;
            width: 280px;
            text-decoration: none;
            border-bottom: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 0;
            margin: 10px;
            padding: 1.2rem ;
            box-sizing: border-box;
            font-style: normal;
            transition-duration: 1s;
          }
          .btLinklaranja:hover{
            transition-duration: 1s;
            color: #f8562c;
            border: solid 1px #fb851c;
            background-color: #ffffff;
            background-image: none;
          }
      `}</style>
    </div>
  )
}

export default templateHub


  
