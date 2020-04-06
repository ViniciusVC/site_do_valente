import React from 'react'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     codigo - HTML - Formulário         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <Head>
        <title>HTML Formulário Atributos</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulário Atributos" />
        <link rel="canonical" href="/codigo/html/formulario_atributos/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_atributos/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formulário simples</h1>
          Segue um exemplo de um formário simples.<br/>
          <form action="cadastro.php" methodo="POST" enctype="epplication/x-www-from-urlencoded" name="formulario-cadastro">
                <fieldset>
                    Formulário simples<br/>
                    Nome :<br/>
                    <input type="text" name="nome" required autofocus maxlength="10"/><br/>
                    Obs.: <br/>
                    O REQUIRED obriga o campo estar preenchido,<br/>
                    O AUTOFOCUS da foco no campo assim que a página abre.  <br/>     
                    maxlength="10" Máximo de 10 caracteres.<br/>
                    Senha :<br/>
                    <input type="password" name="senha" disable/><br/>
                    Obs.: O DISABLE desabilita o campo.       <br/>
                    <input type="submit" name="btn-enviar" value="Enviar"/>
                </fieldset>
          </form>

          Segue o codigo deste formário.<br/>
          {'<form action="cadastro.php" methodo="POST" enctype="epplication/x-www-from-urlencoded" name="formulario-cadastro">'}<br/>
          {'<fieldset>'}<br/>
          {'Formulário simples<br/>'}<br/>
          {'Nome :<br/>'}<br/>
          {'<input type="text" name="nome" required autofocus maxlength="10"/><br/>'}<br/>
          {'<!--'}<br/>
          {'O REQUIRED obriga o campo estar preenchido,'}<br/>
          {'O AUTOFOCUS da foco no campo assim que a página abre.       '}<br/>
          {'maxlength="10" Máximo de 10 caracteres.'}<br/>
          {'-->'}<br/>
          {'Senha :<br/>'}<br/>
          {'<input type="password" name="senha" disable/><br/>'}<br/>
          {'<!--'}<br/>
          {'O DISABLE desabilita o campo.       '}<br/>
          {'-->'}<br/>
          {'<input type="submit" name="btn-enviar" value="Enviar"/>'}<br/>
          {'      </fieldset>'}<br/>
          {'</form>'}<br/>
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
