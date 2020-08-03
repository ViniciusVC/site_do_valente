import React from 'react'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';

const codigo = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║        codigo   index        ║');
  console.log('╚══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="codigo" description="codigo - Linguagens de programação" canonical="/codigo/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Codigo">
          <h1>Linguagens de programação</h1>
          <p>Podem ser usadas para expressar algoritmos com precisão. <br/>
            O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software. <br/>
            Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
          <p>É um método padronizado, formado por um conjunto de regras sintáticas e semânticas, de implementação de um código fonte - que pode ser compilado e transformado em um programa de computador, ou usado como script interpretado - que informará instruções de processamento ao computador.</p>
         
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

export default codigo
