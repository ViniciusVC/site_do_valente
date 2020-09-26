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
      <MoHead 
        modo={modo} 
        title="HTML Formulario Campos 01" 
        canonical="/tutorial/html/formulario_campos_01/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulario Campos 01</h1>
          Segue um exemplo de um formulário simples.<br/>        
        <DivNaveg>
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
        </DivNaveg>
        Segue o codigo HTML deste formulário:<br/>
        <DivCodigo titulo="codigo">
        {'<form action="cadastro.php" methodo="POST">'}<br/>
            {'<fieldset>'}<br/>
            {'<legend>Exemplos de Campos</legend>'}<br/>
            {'Campo texto :<br/>'}<br/>
            {'<input type="text" name="nome" required maxlength="10"/><br/>'}<br/>
            {'Campo email :<br/>'}<br/>
            {'<input type="email" name="email" required /><br/>'}<br/>
            {'campo password :<br/>'}<br/>
            {'<input type="password" name="senha" autocomplete="off"/><br/>'}<br/>
            {'Campo radio:<br/>'}<br/>
            {'<input type="radio" name="sexo" value="Masculino"/> Masculino<br/>'}<br/>
            {'<input type="radio" name="sexo" value="Feminino"/> Feminino<br/>'}<br/>
            {'<br/> '}<br/>
            {'Campo checkbox:<br/>'}<br/>
            {'<input type="checkbox" name="cor" value="vermelho" checked /> vermelho<br/>'}<br/>
            {'<input type="checkbox" name="cor" value="amarelo" /> amarelo<br/>'}<br/>
            {'<input type="checkbox" name="cor" value="verde" /> verde<br/>'}<br/>
            {'Obs.: O atributo checked abre o item já selecionado<br/>'}<br/>
            {'Campo Number : <br/>'}<br/>
            {'<input type="number" name="quantidade1" min="0" max="500" step="10"/><br/>'}<br/>
            {'Campo Range (slider): <br/>'}<br/>
            {'<input type="range" name="quantidade2"/><br/>'}<br/>
            {'campo Cor: <br/>'}<br/>
            {'<input type="color" name="color"/><br/>'}<br/>
            {'<br/>'}<br/>
            {'<input type="submit" name="btn-enviar" value="Enviar" /><br />'}<br/>
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
