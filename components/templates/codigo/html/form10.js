import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║  Tutorial - HTML - Formulário - Keygen   ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Formulario Keygen" description="HTML Formulario Keygen" canonical="/codigo/html/formulario_Keygen/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulário com Keygen</h1>
        A tag {'<keygen>'} é utilizada para entrada de senhas.<br/>
        Segue um exemplo de um formulário com Keygen.<br/>

        <DivNaveg>
        <form action="logar.php" methodo="GET" name="formulario-login">
           <fieldset>
            <legend>Formulário com chave de criptografada (Keygen)</legend>
            <label for="chave">Segurança :</label>
            <keygen id="chave" name="chave" />
            Obs.: Não funcina no Chrome.
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
        </DivNaveg>
        Segue o HTML do formulário com keygen:
        <DivCodigo titulo="codigo">
        {'<form action="logar.php" methodo="GET" name="formulario-login">'}<br/>
        {'<fieldset>'}<br/>
        {' <legend>Formulário com chave de criptografada (Keygen)</legend>'}<br/>
        {' <label for="chave">Segurança :</label>'}<br/>
        {' <keygen id="chave" name="chave" />'}<br/>
        {' Obs.: Não funcina no Chrome.'}<br/>
        {' <input type="submit" value="Enviar" />'}<br/>
        {'</fieldset>'}<br/>
        {'</form>'}<br/>
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
