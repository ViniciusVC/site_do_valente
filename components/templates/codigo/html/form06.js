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
        title="HTML Formulario Campos Datas" 
        canonical="/tutorial/html/formulario_campos_03_datas/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Formulário Campos Datas</h1>
        Segue um exemplo de um formulário com os campos date, time, month, week e datetime-local.<br/>
        <DivNaveg>
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

        </DivNaveg>
        Segue o codigo HTML deste formulário:<br/>
        <DivCodigo titulo="codigo">
          {'<form action="cadastro.php" methodo="POST">'}<br/>
            {'<fieldset>'}<br/>
            {' <legend>Exemplos de Campos (date, time, month, week, datetime-local)</legend>'}<br/>
            {' Data de nascimento :<br/>'}<br/>
            {' <input type="date" name="nascimento" min="1900-12-31" max="2015-12-31"/><br/>'}<br/>
            {' Hora :<br/>'}<br/>
            {' <input type="time" name="hora"/><br/>'}<br/>
            {' Mês e ano :<br/>'}<br/>
            {' <input type="month" name="mes-ano"/><br/>'}<br/>
            {' Semana :<br/>'}<br/>
            {' <input type="week" name="semana"/><br/>'}<br/>
            {' Data e hora :<br/>'}<br/>
            {' <input type="datetime-local" name="data-e-hora"/><br/>'}<br/>
            {' <br/>'}<br/>
            {' <input type="submit" name="btn-enviar" value="Enviar"/><br/>'}<br/>
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
