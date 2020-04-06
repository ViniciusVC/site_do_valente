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
        <title>HTML Fornulário Campos button</title>
        <FaviIcon />
        <meta name="description" content="HTML Fornulário Campos button" />
        <link rel="canonical" href="/codigo/html/formulario_campos_04_boton/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_04_boton/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Fornulário Campo button</h1>
          Segue um exemplo de um formário com Campo button.<br/>
          <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos (button)</legend>
                    Botão com texto : <br />
                    <button name="btn-texto">Ok</button><br />
                    Botão com imagem : <br />
                    <button name="btn-imagem">
                      <img title=”botao” alt=”botao” width=”10px” heigth=”10px”
                        src="http://www.clker.com/cliparts/9/1/5/2/119498475589498995button-red_benji_park_01.svg.med.png">
                    </button><br />
                    <br />
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
