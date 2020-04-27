import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║ codigo - css 5 - Classe, ID e Span ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS - Classe, ID e Span" canonical="/codigo/css/css05/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
          <h1>CSS - Classe, ID e Span</h1>
          A seguir alguns exemploes de estilisação de HTML: 
          <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
          <DivNaveg>
          <p>Paragrafo simples.</p>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<p>Paragrafo simples.</p>'}
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {'p{color : #000000;}'}
        </DivCodigo>

      </Layout >
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
