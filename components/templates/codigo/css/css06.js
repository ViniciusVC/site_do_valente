import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════════╗');
  console.log('║ Tutorial - css 6 - Margin, padding e float ║');
  console.log('╚══════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS - Margin, padding e floatAula" canonical="/codigo/css/css06/"/> 
      
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
      
        <h1>CSS - Margin, padding e float</h1>
        A seguir alguns exemplos de estilização de HTML: 

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
