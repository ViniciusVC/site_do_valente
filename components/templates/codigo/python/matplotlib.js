import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutorial - Python - Matplotlib  ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Matplotlib" 
        description="O que é Matplotlib" 
        canonical="/tutorial/python/matplotlib/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Matplotlib?</h1>
            <p>
              É a biblioteca para análise de dados simples e uma das mais usadas.<br/>
              Para criar gráficos e tabelas de resposta.
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logomatplotlib.png"
                  width="253px"
                  height="188px"
                  alt="Logo Matplotlib"
                  title="Logo Matplotlib"
                  class="ClassLogoMatplotlib"
                  modo={modo}>
            </Img>
          </div>
        </Div>
        <div>
          <p>
            Graficos (barras, linhas, empilhado …)<br/>
            Correlações<br/>
            Validação de hipoteses.<br/>
          </p>
        </div>
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

export default codigoJava
