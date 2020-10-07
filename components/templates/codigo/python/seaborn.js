import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
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
        canonical="/tutorial/python/seaborn/"
        keywords="Python, Tutorial, linguagem, programação, codigo, Seaborn, biblioteca, Dados"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div>
            <h1>O que é Seaborn?</h1>
            <p>
              É a biblioteca para análise de dados.
              É uma das mais usadas para criar(plotar) gráficos, 
              Possue mais opções do que o Pandas dispõe.
            </p>
            <DivCodigo titulo="Exemplo de codigo Python com seaborn">
              # Importar seaborn <br/>
              import seaborn as sns <br/>
              # Plotar grafico box <br/>
              sns.boxplot(notas.nota) <br/>
            </DivCodigo>
          </div>
          <div>
          <Img 
                  src="/static/assetsv5/img/codigo/logopython.svg"
                  width="200px"
                  height="200px"
                  alt="Logo python"
                  title="Logo Python"
                  class="ClassLogoPython"
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
    `}</style>
    </div>
  )
}

export default codigoJava
