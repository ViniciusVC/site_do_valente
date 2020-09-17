import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║  Tutorial - HTML - Formulário Complexo   ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML formulario_submit" description="HTML formulario_submit" canonical="/codigo/html/formulario_submit/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML - Formulário - Submit</h1>
        Segue um exemplo de um formário com submit externo.<br/>
        
        <DivNaveg>
        <form id="form-cadastro" name="formulario-cadastro">
                <fieldset>
                    Formulário Complexo<br/>
                    Nome :<br/>
                    <input type="text" name="nome" required autofocus maxlength="10"/><br/>
                    Senha :<br/>
                    <input type="password" name="senha"/><br/>
                    <input type="submit" name="btn-cadastrar" formaction="cadastro.php" formmethod="GET" formenctype="application/x-www-form-urlencoded" value="cadastrar"/>
                    <input type="submit" name="btn-enviar-email" formaction="email.php" formmethod="POST" formenctype="application/x-www-form-urlencoded" value="Enviar para email"/>
                </fieldset>
             </form>
             Campo externo ao formulário : <br/>
            <input type="text" name="fora-do-form" form="form-cadastro" /><br/>
        </DivNaveg>
        Segue o codigo HTML deste formulário:<br/>

        <DivCodigo titulo="codigo">
        {'<form id="form-cadastro" name="formulario-cadastro">'}<br/>
        {'      <fieldset>'}<br/>
        {'        Formulário Complexo<br/>'}<br/>
        {'        Nome :<br/>'}<br/>
        {'        <input type="text" name="nome" required autofocus maxlength="10"/><br/>'}<br/>
        {'        Senha :<br/>'}<br/>
        {'        <input type="password" name="senha"/><br/>'}<br/>
        {'        <input type="submit" name="btn-cadastrar" formaction="cadastro.php" formmethod="GET" formenctype="application/x-www-form-urlencoded" value="cadastrar"/>'}<br/>
        {'        <input type="submit" name="btn-enviar-email" formaction="email.php" formmethod="POST" formenctype="application/x-www-form-urlencoded" value="Enviar para email"/>'}<br/>
        {'    </fieldset>'}<br/>
        {' </form>'}<br/>
        {'Campo externo ao formulário : <br/>'}<br/>
        {'<input type="text" name="fora-do-form" form="form-cadastro" /><br/>'}<br/>

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
