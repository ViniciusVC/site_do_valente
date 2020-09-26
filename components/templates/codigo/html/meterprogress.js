import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════╗');
  console.log('║  Tutorial  - HTML - Meter e Progress   ║');
  console.log('╚══════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Meter e Progress" 
        description="Tutorial HTML Meter e Progress" 
        canonical="/tutorial/html/meter_progress/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML Meter e Progress</h1>
        <p>
          Medidor (Meter) : <br/>        
          A tag meter define uma medida escalar dentro de um intervalo conhecido ou de um valor fracionário. Isso também é conhecido como medidor.<br/>
          Exemplos: uso do disco, relevância de um resultado da consulta etc.<br/>
          Nota: A tag meter não deve ser usada para indicar progresso (como em uma barra de progresso). Para barras de progresso, use a tag progress.<br/>
          Dica: sempre adicione a tag label para obter as melhores práticas de acessibilidade!<br/>
        </p>
        <p>
          Progresso (Progress) :<br/> 
          O elemento HTML progress progress é usado para visualizar o progresso de uma tarefa.<br/>
          Embora as especifidades de como é mostrado ficam a cargo do desenvolvedor, tipicamente, é mostrado como uma barra de progresso.<br/>
        </p>
        <p>
          Segue exmplos de Meter e Progress
        </p>
        <DivNaveg>
          <label for="visitm">Visitas no mês:</label>
          <meter id="visitm" min="0" optimum="6" high="8" max="10" value="2" ></meter><br />
          <label for="visitd">Visitas por dia:</label>
          <meter id="visitd"min="0" optimum="5" high="8" max="10" value="6" ></meter><br />
          <label for="visita">Visitas no ano:</label>
          <meter id="visita"min="0" optimum="6" high="8" max="10" value="9" ></meter><br />
          Barra de Progresso (Progress) : <br />
          <progress max="100" value="80"></progress>
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML com Meter e Progress">
        {'<label for="visitm">Visitas no mês:</label>'}<br/>
          {'<meter id="visitm" min="0" optimum="6" high="8" max="10" value="2" ></meter><br />'}<br/>
          {'<label for="visitd">Visitas por dia:</label>'}<br/>
          {'<meter id="visitd" min="0" optimum="5" high="8" max="10" value="6" ></meter><br />'}<br/>
          {'<label for="visita">Visitas no ano:</label>'}<br/>
          {'<meter id="visita" min="0" optimum="6" high="8" max="10" value="9" ></meter><br />'}<br/>
          {'Barra de Progresso (Progress) : <br />'}<br/>
          {'<progress max="100" value="80"></progress>'}<br/>
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
