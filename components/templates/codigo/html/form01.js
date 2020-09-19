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
      <MoHead modo={modo} title="HTML Formulario" description="Tutorial HTML Formulario" canonical="/codigo/html/formulario/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html"> 
        <h1>HTML Formulário</h1>
        Segue um exemplo de um formulário simples.<br/>
        <DivNaveg>
          <form action="cadastro.php" methodo="POST">
              Nome :<br/>
              <input type="text" name="nome"/><br/>
              Senha :<br/>
              <input type="password" name="senha"/><br/>
              <input type="submit" name="btn-enviar" value="Enviar"/>
          </form>
        </DivNaveg>
        Segue o codigo HTML deste formulário:
        <DivCodigo titulo="codigo">
         {' <form action="cadastro.php" methodo="POST">'}<br/>
         &ensp; {' Nome :<br/>'}<br/>
         &ensp; {' <input type="text" name="nome"/><br/>'}<br/>
         &ensp; {' Senha :<br/>'}<br/>
         &ensp; {' <input type="password" name="senha"/><br/>'}<br/>
         &ensp; {' <input type="submit" name="btn-enviar" value="Enviar"/>'}<br/>
         {'</form>'}<br/>
        </DivCodigo>
                    Obs.:<br/>
          O methodo POST esconde as variaveis no envio do formulário,<br/>
          O methodo GET mostra as variaveis na URL de envio.<br/>
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
