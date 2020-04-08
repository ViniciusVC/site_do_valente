import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../atoms/atFavIcon'
import Layout from '../../moleculas/layout'
import * as Util from '../../../controller/util.js';
import Div from '../../atoms/atDiv'

const conversordetexto = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║      conversordetexto         ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  function FuncConverter(varOpt){
    var saida = "";
    var textooriginal = document.getElementById('textareaoriginal').value;
    if(varOpt=="a"){
      //Primeira letra da fraze maiuscula.
      textooriginal = "@. " + textooriginal;
      textooriginal = textooriginal.toLowerCase().replace(/(?:^|\.|\!|\?)\s\S/g, function(a) { return a.toUpperCase(); });
      textooriginal = textooriginal.replace(/\@\./g, function(a) { return "" });
      saida = textooriginal
    } else if(varOpt=="b"){
      //Todas As Primeiras Letras Maiusculas. 
      saida = textooriginal.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    } else if(varOpt=="c"){
      //TUDO MAIUSCULA.
      saida = textooriginal.toUpperCase()
    } else if(varOpt=="d"){
      //tudo minuscula. 
      saida = textooriginal.toLowerCase()
    } else if(varOpt=="e"){
      //tODAS aS pRIMEIRAS lETRAS mINUSCULAS.
      saida = textooriginal.toUpperCase().replace(/(?:^|\s)\S/g, function(a) { return a.toLowerCase(); });
    } else if(varOpt=="f"){
      //pRIMEIRA lETRA dA fRAZE mINUSCULA.
      textooriginal = "@. " + textooriginal;
      textooriginal = textooriginal.toUpperCase().replace(/(?:^|\.|\!|\?)\s\S/g, function(a) { return a.toLowerCase(); });
      textooriginal = textooriginal.replace(/\@\./g, function(a) { return "" });
      saida = textooriginal
    } 
    document.getElementById('textareaconvertido').value=saida;
  }



  return (
    <div>
      <Head>
        <title>Conversor de Texto</title>
        <FaviIcon />
        <meta name="description" content="Conversor de Texto" />
        <link rel="canonical" href="/game/conversordetexto/" />
        <link rel="amphtml" href="/amp/game/conversordetexto/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
      <h1>Conversor de Texto</h1>
        <Div display="responsivo">
        
          <Div display="vertical">
          
            <div>
              Digite ou cole o texto aqui:<br/>
              <textarea className="DesenhoSombra" id="textareaoriginal" name="textareaoriginal" rows="6" cols="40">Digite ou cole seu texto aqui.</textarea><br />
            </div>
            <div>
              Texto convertido:<br/>
              <textarea className="DesenhoSombra" id="textareaconvertido" name="textareaconvertido" rows="6" cols="45" spellcheck="false"></textarea><br />
            </div>
          </Div>
          <Div display="vertical">
            <a id="btLinkConvertc" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("c")}}>TUDO MAIUSCULA.</a>
            <a id="btLinkConvertd" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("d")}}>tudo minuscula.</a>
            <a id="btLinkConverta" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("a")}}>Primeira letra da fraze maiuscula.</a>
            <a id="btLinkConverta" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("f")}}>pRIMEIRA lETRA dA fRAZE mINUSCULA.</a>
            <a id="btLinkConvertb" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("b")}}>Todas As Primeiras Letras Maiusculas.</a>
            <a id="btLinkConvertb" className="btLinkBranco DesenhoSombra" onClick={() => {FuncConverter("e")}}>tODAS aS pRIMEIRAS lETRAS mINUSCULAS.</a>
          </Div>
        </Div>
      </Layout>
      <style jsx>{`
        .textarea {
          width: 100%;
        }
        .btLinkBranco {
          height: 3.42857143rem;
        }
        .DesenhoSombra {
            font-family: oiTextRegular, sans-serif;
            background-color: #ffffff;
            border-radius: 8px;
            color: #222222;
            display: block;
            font-size: 1rem; /*16px*/
            
            text-align: center;
            width: 90%;
            text-decoration: none;
            border: solid 1px #dbdbdb;
            cursor: pointer;
            outline: 0;
            margin: 10px;
            padding: 1.2rem;
            box-sizing: border-box;
            font-style: normal;
            transition: 0.5s;
            -webkit-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            -moz-box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.47);
            
          }
          .btLinkBranco:hover {
            -webkit-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            -moz-box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
            box-shadow: 2px 2px 20px rgba(1, 1, 1, 0.17);
          }
      `}</style>

    </div>
  )
}

export default conversordetexto

