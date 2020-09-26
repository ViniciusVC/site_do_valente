import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║ Tutorial - Python - Seaborn  ║');
  console.log('╚══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Seaborn" 
        description="O que é Seaborn" 
        canonical="/tutorial/python/seaborn/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Seaborn?</h1>
            <p>
              É a biblioteca para análise de dados simples e uma das mais usadas.<br/>
              Para criar gráficos e tabelas de resposta.
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logoseaborn.png"
                  width="253px"
                  height="188px"
                  alt="Logo Seaborn"
                  title="Logo Seaborn"
                  class="ClassLogoSeaborn"
                  modo={modo}>
            </Img>
          </div>
        </Div>
        <div>
          <p>
              Selecionar Colunas<br/>
              Filtrar Linhas<br/>
              Agregação (Group by)<br/>
              Função Apply Lambida(Equivale ao For)<br/>
              União de Dados (Merge, Concat)<br/>
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
