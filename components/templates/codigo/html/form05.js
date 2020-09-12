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
      <MoHead modo={modo} title="HTML Formulario Campos 02" description="HTML Formulario Campos 02" canonical="/amp/codigo/html/formulario_campos_02/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
      <h1>HTML Formulario Campos 02</h1>
          Segue um exemplo de um formário simples.<br/>        
        <DivNaveg>

        <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos(file, url, search, tel, textarea)</legend>
                    Enviar arquivo :<br/>
                    <input type="file" name="arquivo"/><br/>
                    Endereço do site :<br/>
                    <input type="url" name="site"/><br/>
                    Busca :<br/>
                    <input type="search" name="pesquisa"/><br/>
                    Telefone :<br/>
                    <input type="tel" name="telefone"/><br/>
                    Mensagem : <br/>
                    <textarea name="mensagem" rows="5" cols="30" spellcheck="false"></textarea><br />
                    <br/>
                    <input type="submit" name="btn-enviar" value="Enviar" /><br />
                </fieldset>
            </form>
        </DivNaveg>
        Segue o codigo HTML deste fomulário:<br/>
        <DivCodigo titulo="codigo">

        {'<form action="cadastro.php" methodo="POST">'}<br/>
            {'<fieldset>'}<br/>
            {' <legend>Exemplos de Campos(file, url, search, tel, textarea)</legend>'}<br/>
            {' Enviar arquivo :<br/>'}<br/>
            {' <input type="file" name="arquivo"/><br/>'}<br/>
            {' Endereço do site :<br/>'}<br/>
            {' <input type="url" name="site"/><br/>'}<br/>
            {' Busca :<br/>'}<br/>
            {' <input type="search" name="pesquisa"/><br/>'}<br/>
            {' Telefone :<br/>'}<br/>
            {' <input type="tel" name="telefone"/><br/>'}<br/>
            {' Mensagem : <br/>'}<br/>
            {' <textarea name="mensagem" rows="5" cols="30" spellcheck="false"></textarea><br />'}<br/>
            {' <br/>'}<br/>
            {' <input type="submit" name="btn-enviar" value="Enviar" /><br />'}<br/>
            {' </fieldset>'}<br/>
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
