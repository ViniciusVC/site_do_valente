import React from 'react'
//import Head from 'next/head'
//import FaviIcon from '../../../atoms/atFavIcon'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║    Tutorial  - HTML - div e span     ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML - CANVAS" description="Tutorial de CANVAS HTML" canonical="/tutorial/html/canvas/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML - CANVAS</h1>
        <p>
          Canvas é um elemento da HTML5 destinado a delimitar uma área para renderização dinâmica de gráficos. Todo o trabalho de criação e animação é realizado através de linguagens de programação dinâmica. O elemento foi originalmente introduzido pela Apple Inc. para o navegador Safari.
        </p>
        <p>Segue um exemplos das tags CANVAS:</p>
        <DivNaveg>
          <canvas width="400" heigth="400"></canvas>
        </DivNaveg>
        <p>Segue o codigo HTML deste CANVAS:</p>
        <DivCodigo titulo="codigo">
          {'<canvas width="400" heigth="400"></canvas>'}
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        canvas {
          background-color: red;
          padding: 20px;
        }
        span {
          background-color: blue; 
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
