import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo   - css 8 - hover        ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS 8 - Efeitos com o atributo hover" canonical="/codigo/css/css08/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
        <h1>CSS 8 - Efeitos com o atributo hover</h1>
        <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
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
