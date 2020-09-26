import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - css 9 - Herança       ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CSS 9 - Herança"
        description ="CSS 9 - Herança"
        canonical="/tutorial/css/css09/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
          <h1>CSS 9 - Herança</h1>
          <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
        
          <p>Está página está em construção.</p>

        <DivNaveg>
          <p>Paragrafo simples.</p>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<p>Paragrafo simples.</p>'}
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {'p{color : #000000;}'}
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
