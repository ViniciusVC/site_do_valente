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
        <title>HTML Formulario Campos Datas</title>
        <FaviIcon />
        <meta name="description" content="HTML Formulario Campos Datas" />
        <link rel="canonical" href="/codigo/html/formulario_campos_03_datas/" />
        <link rel="amphtml" href="/amp/codigo/html/formulario_campos_03_datas/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>HTML Formulário Campos Datas</h1>
        Segue um exemplo de um formário com os campos date, time, month, week e datetime-local.<br/>
        <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos (date, time, month, week, datetime-local)</legend>
                    Data de nascimento :<br/>
                    <input type="date" name="nascimento" min="1900-12-31" max="2015-12-31"/><br/>
                    Hora :<br/>
                    <input type="time" name="hora"/><br/>
                    Mês e ano :<br/>
                    <input type="month" name="mes-ano"/><br/>
                    Semana :<br/>
                    <input type="week" name="semana"/><br/>
                    Data e hora :<br/>
                    <input type="datetime-local" name="data-e-hora"/><br/>
                    <br/>
                    <input type="submit" name="btn-enviar" value="Enviar"/><br/>
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
