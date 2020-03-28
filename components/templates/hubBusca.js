import React from 'react'
import Head from 'next/head'
import FavIcon from '../atoms/atFavIcon'
import * as Util from '../../controller/util.js';
// import Div from '../atoms/atDiv'
// import ListadeRotas from '../moleculas/moListadeRotas/index.js'
// import HeaderSideDoValente from '../moleculas/moHeaderSideDoValente/index.js'
// import Arrow from '../atoms/atCampoTexto';
// import BtLink from '../atoms/atBtLink';

// ====== copiado de Documentoscopia - Projeto Piloto ======
import Alerta from '../moleculas/moAlerta.js'
//import AtCampotexto from '../atoms/atCampoTexto';
//import EnviaArquivo from '../../moleculas/moBtEnviaArquivo.js';
// import BtSubmit from '../../atoms/atBtSubmit/index.js';
// import AtCampoInvisivel from '../../atoms/atCampoInvisivel/index.js';
// import Captcha from '../../moleculas/moCaptcha.js';
// import ContentCamposDoc from './contentCamposDoc.js'
// import AtLabelCampo from './atLabelCampo.js';
// ==========================================================



const templateHub = function (props) {
  console.log('╔════════════════════════════════════════╗');
  console.log('║      Hub de Contatos Busca             ║');
  console.log('╚════════════════════════════════════════╝');
  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  function enviar(){
    //const compress = new Compress()
    document.getElementById("divAlertaErro").style.display = "block";
    document.getElementById("AlertaErroInf").innerHTML = "Preparando para enviar...";

    var mensagemFinal = "";
    if(document.getElementById("contato").value==""){
      mensagemFinal = "O campo não foi preenchido.";
    }
    
    if (mensagemFinal==""){
      document.getElementById('formHubContato').submit()
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
        <form action="/api1/hubResposta" method="get" id="formHubContato" name="formHubContato" encType="multipart/form-data">
            <div className="grupodecampos">
              <p>Entre com um CPF ou Conta Fatura no campo a baixo.</p>
              <input type="text" id="contato" name="contato" accept="image/*" placeholder="CPF ou Conta Fatura" size="40" required=""></input>
            </div>
            <span id="erro"></span>
            <a onClick={() => {enviar()}} className="btLinklaranja">Buscar contatos</a>
            <p>Use a (,) virgula como separador, para incluir uma lista.</p>
            <input type="radio" name="tipobusca" value="cpf" checked/>Buscar por cpf<br/>
            <input type="radio" name="tipobusca" value="fatura"/>Buscar por conta fatura<br/>
          </form>
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


  
