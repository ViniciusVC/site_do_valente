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
        <title>HTML Formulario Campos 02</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulario Campos 02" />
        <link rel="canonical" href="/codigo/html/formulario_campos_02/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_02/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formulario Campos 02</h1>
          Segue um exemplo de um formário simples.<br/>
          <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos(file, url, search, tel, textarea)</legend>
                    Enviar arquivo :<br/>
                    <input type="file" name="arquivo"/><br/>
                    Endereço do site :<br/>
                    <input type="url" name="site"/><br/>
                    Busca :<br/>
                    <input type="search" name="pesquisa"/><br/>
                    Telefone :<br/>
                    <input type="tel" name="telefone"/><br/>
                    Mensagem : <br/>
                    <textarea name="mensagem" rows="5" cols="30" spellcheck="false"></textarea><br />
                    <br/>
                    <input type="submit" name="btn-enviar" value="Enviar" /><br />
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
