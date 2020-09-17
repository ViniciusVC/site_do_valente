import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║    Tutorial - HTML - Time e Datetime     ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Time e Datetime" description="Tutorial HTML Time e Datetime" canonical="/codigo/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Time e Datetime</h1>
      <p>
      O elemento HTML time (time) representa o tempo tanto no formato de 24 horas ou como uma data precisa no calendário Gregoriano (com informações opcionais de tempo e fuso horário)<br/>
      Este elemento é destinado a apresentar datas e horas no dispositivo em um formato legível. Isto pode ser útil aos agentes do usuário em oferecer qualquer programação de eventos ao calendário do utilizador.<br/>
      </p>
        <p>Segue exemplo de tag TIME com propriedade Datetime.</p>        
        <DivNaveg>
          Nascimento <time datetime="1979-10-30 12:35">30 de outubro de 1979</time>.
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML com Time e Datetime">
          {'Nascimento <time datetime="1979-10-30 12:35">30 de outubro de 1979</time>.'}
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
