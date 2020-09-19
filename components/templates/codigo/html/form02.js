import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     Tutorial - HTML - Formulário         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Formario Legenda" description="Tutorial HTML Formario Legenda" canonical="/codigo/html/formulario_Legenda/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formário com Legenda</h1>
          Tag {'<legend>Aqui dentro entra o texto da legenda</legend>'}.<br/>
          Segue um exemplo de um formulário com Legenda.<br/>
        <DivNaveg>
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
        </DivNaveg>
        Segue o código do formulário com legenda: 
        <DivCodigo titulo="codigo">

        {'<form action="cadastro.php" methodo="POST">'}<br/>
        &ensp; {'<fieldset>'}<br/>
        &ensp; &ensp; {'<legend>Exemplo de formulário com legend</legend>'}<br/>
        &ensp; &ensp; {'Nome :<br/>'}<br/>
        &ensp; &ensp; {'<input type="text" name="nome" /><br/>'}<br/>
        &ensp; &ensp; {'Senha :<br/>'}<br/>
        &ensp; &ensp; {'<input type="password" name="senha" /><br/>'}<br/>
        &ensp; &ensp; {'<input type="submit" name="btn-enviar" value="Enviar" />'}<br/>
        &ensp; {'</fieldset>'}<br/>
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
