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
        <title>HTML Formario Legenda</title>
        <FaviIcon />
        <meta name="description" content="HTML Formario Legenda" />
        <link rel="canonical" href="/codigo/html/formulario_Legenda/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_Legenda/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formário com Legenda</h1>
          Segue um exemplo de um formário com Legenda.<br/>
          <form action="cadastro.php" methodo="POST">
            <fieldset>
                <legend>Exemplo de Formulário com legend</legend>
                Nome :<br/>
                <input type="text" name="nome" /><br/>
                Senha :<br/>
                <input type="password" name="senha" /><br/>
                <input type="submit" name="btn-enviar" value="Enviar" />
            </fieldset>
        </form>
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
