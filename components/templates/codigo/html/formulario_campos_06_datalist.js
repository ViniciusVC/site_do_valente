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
        <title>HTML Formulario Campo Datalist</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulario Campo Datalist" />
        <link rel="canonical" href="/codigo/html/formulario_campos_06_datalist/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_06_datalist/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formulario Campo Datalist</h1>
          Segue um exemplo de um formário com campos imput e datalist.<br/>
          <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos 04 (input, datalist)</legend>
                    Escolha o curso : <br />
                    <input name="cursos" list="lista-cursos" />
                    <datalist id="lista-cursos">
                        <option value="HTML5">HTML5</option>
                        <option value="CSS">CSS</option>
                        <option value="PHP">PHP</option>
                    </datalist>
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
