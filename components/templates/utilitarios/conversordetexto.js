import React from 'react'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';
import Div from '../../atoms/atDiv'
import BtLink from '../../atoms/atBtLink'


const conversordetexto = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║      conversordetexto         ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  if(modo=="html"||modo=="HTML"){

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
        <MoHead 
          modo={modo} 
          title="Conversor de Textos"
          description="Utilitario - Conversor de Textos (Maiuscula-Minuscula)."  
          canonical="/utilitarios/conversordetexto/"
        />
        <Layout regiao={regiao} modo={modo} titulo="Utilitarios" categoria="Utilitarios">
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
            <Div display="vertical"><br/>
              <a id="btLinkConvertc" className="btLinkNeon" onClick={() => {FuncConverter("c")}}>TUDO MAIUSCULA.</a><br/>
              <a id="btLinkConvertd" className="btLinkNeon" onClick={() => {FuncConverter("d")}}>tudo minuscula.</a><br/>            
              <a id="btLinkConverta" className="btLinkNeon" onClick={() => {FuncConverter("a")}}>Primeira letra da fraze maiuscula.</a><br/>
              <a id="btLinkConverta" className="btLinkNeon" onClick={() => {FuncConverter("f")}}>pRIMEIRA lETRA dA fRAZE mINUSCULA.</a><br/>
              <a id="btLinkConvertb" className="btLinkNeon" onClick={() => {FuncConverter("b")}}>Todas As Primeiras Letras Maiusculas.</a><br/>
              <a id="btLinkConvertb" className="btLinkNeon" onClick={() => {FuncConverter("e")}}>tODAS aS pRIMEIRAS lETRAS mINUSCULAS.</a><br/>
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
          .btLinkNeon {

            border: solid 2px #00ffea;
            border-radius: 5px;
            
            padding: 5px;
            
            transition: all 0.8s;
            font-family: oiTextRegular, sans-serif;
            
            background-color:#00ffea;
            background: rgba(0, 255, 255, 0.2);

            color: #00ffea;
            display: block;
            font-size: 1rem; /*16px*/
            text-align: center;

            text-decoration: none;
            
            cursor: pointer;
            outline: 0;
            margin-right: 5px;
            margin-bottom: 5px; 
            box-sizing: border-box;
            font-style: normal;

            width: 100%;
            max-width: 500px;
          }
            .btLinkNeon:hover {
              transition: all 0.8s;
              -webkit-transition: all 0.8s;
              -moz-transition: all 0.8s;
              -o-transition: all 0.8s;
              /*color: #d82482;*/
              background-color: #4a516b;
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
  }else{
    return (
      <div>
        <MoHead modo={modo} title="Conversor de Textos" canonical="/utilitarios/conversordetexto/"/>
        <Layout regiao={regiao} modo={modo} titulo="Utilitarios" categoria="Utilitarios">
        <h1>Conversor de Texto</h1>
          <Div display="responsivo">
            <Div display="vertical">
                O utilitario para converter texto não funciona no modo AMP.<br/>
                <BtLink href="/utilitarios/conversordetexto/" value="Sair do modo AMP." estilo="neon"/>
                <br/>
            </Div>
            <Div display="vertical"><br/>
              Converter para TUDO MAIUSCULA.<br/>
              Converter para tudo minuscula.<br/>            
              Converter para Primeira letra da fraze maiuscula.<br/>
              Converter para pRIMEIRA lETRA dA fRAZE mINUSCULA.<br/>
              Converter para Todas As Primeiras Letras Maiusculas.<br/>
              Converter para tODAS aS pRIMEIRAS lETRAS mINUSCULAS.<br/>
            </Div>
          </Div>
        </Layout>
      </div>
    )
  }
}

export default conversordetexto

