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
        <title>HTML Formulario Campos 01</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulario Campos 01" />
        <link rel="canonical" href="/codigo/html/formulario_campos_01/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_01/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formulario Campos 01</h1>
          Segue um exemplo de um formário simples.<br/>
          <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos</legend>
                    Campo texto :<br/>
                    <input type="text" name="nome" required maxlength="10"/><br/>
                    Campo email :<br/>
                    <input type="email" name="email" required /><br/>
                    campo password :<br/>
                    <input type="password" name="senha" autocomplete="off"/><br/>
                    Campo radio:<br/>
                    <input type="radio" name="sexo" value="Masculino"/> Masculino<br/>
                    <input type="radio" name="sexo" value="Feminino"/> Feminino<br/>
                    <br/> 
                     Campo checkbox:<br/>
                    <input type="checkbox" name="cor" value="vermelho" checked /> vermelho<br/>
                    <input type="checkbox" name="cor" value="amarelo" /> amarelo<br/>
                    <input type="checkbox" name="cor" value="verde" /> verde<br/>
                    Obs.: O atributo checked abre o item já selecionado<br/>
                    Campo Number : <br/>
                    <input type="number" name="quantidade1" min="0" max="500" step="10"/><br/>
                    Campo Range (slider): <br/>
                    <input type="range" name="quantidade2"/><br/>
                    campo Cor: <br/>
                    <input type="color" name="color"/><br/>
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
