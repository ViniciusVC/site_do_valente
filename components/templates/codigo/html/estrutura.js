import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║    Tutorial  - HTML - estrutura        ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead
        modo={modo}
        title="HTML Estrutura"
        description="Tutorial - Estrutura de uma página HTML."
        canonical="/tutorial/html/estrutura/"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>Estrutura de uma página HTML</h1>
        <p>
          O documento HTML sempre inicia com o que chamamos de estrutura básica.  
        </p>
        <DivCodigo titulo="Exemplo estrutura básica HTML">
          {'<!DOCTYPE html>'}<br/>
          {'<html lang="pt-br">'}<br/>
          &ensp;{'<head>'}<br/>
          &ensp; &ensp;{'<title>Título da página</title>'}<br/>
          &ensp; &ensp;{'<meta charset="utf-8">'}<br/>
          &ensp;{'</head>'}<br/>
          &ensp;{'<body>'}<br/>
          &ensp; &ensp;  Conteúdo da pagina<br/>
          &ensp;{'</body>'}<br/>
          {'</html>'}<br/>
        </DivCodigo>
        <p>
          Esta estrutura é quase que imutável.<br/>
          Sempre será dessa forma e você sempre, sempre começará seu HTML começando por esse código.<br/> 
          Geralmente os editores como o VSCode ou Sublime Text já tem atalhos para iniciar os documentos HTMLs com essa estrutura.<br/>
        </p>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi

// Obs.: para expor o codigo basta trocar '<>' por '&lt;' e '&gt;' 
