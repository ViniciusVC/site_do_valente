import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║ Tutorial - HTML - Formulário - Atributos ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo}
        title="HTML Formulário Atributos" 
        canonical="/tutorial/html/formulario_atributos/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulário simples</h1>
          Segue um exemplo de um formulário simples.<br/>        
        <DivNaveg>
        <form action="cadastro.php" methodo="POST" enctype="epplication/x-www-from-urlencoded" name="formulario-cadastro">
                <fieldset>
                    Formulário simples<br/>
                    Nome :<br/>
                    <input type="text" name="nome" required autofocus maxlength="10"/><br/>
                    Obs.: <br/>
                    O REQUIRED obriga o campo estar preenchido,<br/>
                    O AUTOFOCUS da foco no campo assim que a página abre.  <br/>     
                    maxlength="10" Máximo de 10 caracteres.<br/>
                    Senha :<br/>
                    <input type="password" name="senha" disable/><br/>
                    Obs.: O DISABLE desabilita o campo.<br/>
                    <input type="submit" name="btn-enviar" value="Enviar"/>
                </fieldset>
          </form>
        </DivNaveg>
        Segue o codigo deste formulário.<br/>
        <DivCodigo titulo="codigo">
          {'<form action="cadastro.php" methodo="POST" enctype="epplication/x-www-from-urlencoded" name="formulario-cadastro">'}<br/>
          {'<fieldset>'}<br/>
          {'Formulário simples<br/>'}<br/>
          {'Nome :<br/>'}<br/>
          {'<input type="text" name="nome" required autofocus maxlength="10"/><br/>'}<br/>
          {'<!--'}<br/>
          {'O REQUIRED obriga o campo estar preenchido,'}<br/>
          {'O AUTOFOCUS da foco no campo assim que a página abre.       '}<br/>
          {'maxlength="10" Máximo de 10 caracteres.'}<br/>
          {'-->'}<br/>
          {'Senha :<br/>'}<br/>
          {'<input type="password" name="senha" disable/><br/>'}<br/>
          {'<!--'}<br/>
          {'O DISABLE desabilita o campo.       '}<br/>
          {'-->'}<br/>
          {'<input type="submit" name="btn-enviar" value="Enviar"/>'}<br/>
          {'      </fieldset>'}<br/>
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
