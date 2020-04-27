import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     codigo - HTML - Formulário         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Fornulário Campos button" description="HTML Fornulário Campos button" canonical="/codigo/html/formulario_campos_04_boton/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
      <h1>HTML Fornulário Campo button</h1>
          Segue um exemplo de um formário com Campo button.<br/>
        
        <DivNaveg>
        <form action="cadastro.php" methodo="POST">
                <fieldset>
                    <legend>Exemplos de Campos (button)</legend>
                    Botão com texto : <br />
                    <button name="btn-texto">Ok</button><br />
                    Botão com imagem : <br />
                    <button name="btn-imagem">
                      <img title="botao" alt="botao" width="10px" heigth="10px" src="http://www.clker.com/cliparts/9/1/5/2/119498475589498995button-red_benji_park_01.svg.med.png"/>
                    </button><br />
                    <br />
                    <input type="submit" name="btn-enviar" value="Enviar" /><br />
                </fieldset>
          </form>
        </DivNaveg>
        Segue o codigo HTML deste fomulário:<br/>
        <DivCodigo titulo="codigo">
          {'<form action="cadastro.php" methodo="POST">'}<br/>
          {'<fieldset>'}<br/>
          {'<legend>Exemplos de Campos (button)</legend>'}<br/>
          {'Botão com texto : <br />'}<br/>
          {'<button name="btn-texto">Ok</button><br />'}<br/>
          {'Botão com imagem : <br />'}<br/>
          {'<button name="btn-imagem">'}<br/>
          {'<img title=”botao” alt=”botao” width=”10px” heigth=”10px”'}<br/>
          {'src="http://www.clker.com/cliparts/9/1/5/2/119498475589498995button-red_benji_park_01.svg.med.png">'}<br/>
          {'</button><br />'}<br/>
          {'<br />'}<br/>
          {'<input type="submit" name="btn-enviar" value="Enviar" /><br />'}<br/>
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
