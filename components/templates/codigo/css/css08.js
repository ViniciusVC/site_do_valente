import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial   - css 8 - hover      ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CSS 8 - Efeitos com o atributo hover"
        description = "Tutorial CSS - efeitos com o atributo hover"
        canonical="/tutorial/css/css08/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
        <h1>CSS 8 - Efeitos com o atributo hover</h1>
        <p>O hover aplica uma alteração no estilo de um objeto, quando clicado pelo usuário, sem a necessidade de JavaScript.</p>
        
        <DivNaveg>
          <a className="cssLinkHover" href="/eu/curriculo">Este é um link</a>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<a class="cssLinkHover" href="/eu/curriculo">Este é um link</a>'}
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {'.cssLinkHover{color : #000000;}'}<br/>
          {'.cssLinkHover:hover{color : red;}'}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .cssLinkHover{
          color : #000000;
        }
        .cssLinkHover:hover{
          color : red;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
