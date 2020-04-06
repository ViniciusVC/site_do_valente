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
        <title>HTML Formulario Campo Select</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulario Campo Select" />
        <link rel="canonical" href="/codigo/html/formulario_campos_05_select/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_05_select/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
          <h1>HTML Formulário Campo Select</h1>
          Segue um exemplo de um formário com campo select.<br />
          <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos (select, optgroup, option)</legend>
                    Escolha um veiculo:<br />
                    <select name="Veiculo">
                        <optgroup label="Carro">
                            <option val0ue="brasilha"> brasilha </option>
                            <option value="Uno" selected> Uno </option>
                            <option value="Camaro"> Camaro </option>
                            <option value="Fusca"> Fusca </option>
                        </optgroup>
                        <optgroup label="Motos">
                            <option value="Pop100"> Pop 1000 </option>
                            <option value="Zig-50"> Zig-50 </option>
                            <option value="Bereta"> bereta </option>
                            <option value="38"> 38 </option>
                        </optgroup>
                    </select><br />
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
