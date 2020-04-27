import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     codigo  - HTML - meta tags         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
     <MoHead modo={modo} title="HTML META TAGS" description="Codigo HTML META TAGS" canonical="/codigo/html/meta/"/>
     <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
      <h1>HTML META TAGS</h1>
      <p>
        Metadados são dados (informações) sobre dados.<br/>
        A tag meta fornece metadados sobre o documento HTML.<br/>
        Os metadados não serão exibidos na página, mas serão analisáveis ​​por máquina.<br/>
        Os meta-elementos geralmente são usados ​​para especificar a descrição da página, as palavras-chave, o autor do documento, a última modificação e outros metadados.<br/>
        Os metadados podem ser usados ​​por navegadores (como exibir conteúdo ou recarregar página), mecanismos de pesquisa (palavras-chave) ou outros serviços da web.<br/>
        O HTML5 introduziu um método para permitir que os web designers assumam o controle sobre a janela de exibição (a área visível do usuário de uma página da web), por meio da tag meta.<br/>
      </p>
      <p>Segue exemplo de meta tags.</p>        
      <DivCodigo titulo="codigo HTML Meta">
          {'<head>'}<br/>
          {'<title>Meta tags</title>'}<br/>
          {'<meta charset="utf-8">'}<br/>
          {'<meta name="description" content="exmplo de pagina">'}<br/>
          {'<meta name="keywords" content="meta, html, valente, palavra, chave">'}<br/>
          {'<meta name="author" content="Vinícius Valente">'}<br/>
          {'<meta http-equiv="refresh" content="10">'}<br/>
          {'</head>'}<br/>
      </DivCodigo>


     </Layout>
     <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
     `}</style>
    </div>
  )
}

export default atendimentoOi
