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
        <title>HTML formulario_submit</title>
        <FaviIcon />
        <meta name="description" content="HTML formulario_submit" />
        <link rel="canonical" href="/codigo/html/formulario_submit/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_submit/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML</h1>
        Segue um exemplo de um formário com submit.<br/>
        <form id="form-cadastro" name="formulario-cadastro">
                <fieldset>
                    Formulário Complexo<br/>
                    Nome :<br/>
                    <input type="text" name="nome" required autofocus maxlength="10"/><br/>
                    Senha :<br/>
                    <input type="password" name="senha"/><br/>
                    <input type="submit" name="btn-cadastrar" formaction="cadastro.php" formmethod="GET" formenctype="application/x-www-form-urlencoded" value="cadastrar"/>
                    <input type="submit" name="btn-enviar-email" formaction="email.php" formmethod="POST" formenctype="application/x-www-form-urlencoded" value="Enviar para email"/>
                </fieldset>
             </form>
        Campo externo ao formulário : <br/>
        <input type="text" name="fora-do-form" form="form-cadastro" /><br/>
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
