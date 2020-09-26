import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═════════════════════════════╗');
  console.log('║ Tutorial - Python - Pandas  ║');
  console.log('╚═════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Pandas" 
        description="O que é Pandas" 
        canonical="/tutorial/python/pandas/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Pandas?</h1>
            <p>
              Pandas é uma biblioteca de software criada para a linguagem Python, para manipulação e análise de dados.<br/>
              É atualmente a biblioteca mais usada para <strong>MANIPULAÇÃO DE DADOS</strong> no Pyton.<br/>
              Oferece estruturas e operações para manipular tabelas numéricas e séries temporais.<br/>
              Pandas é um software livre, sob a licença BSD.<br/>
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logopandas.png"
                  width="253px"
                  height="188px"
                  alt="Logo Pandas"
                  title="Logo Pandas"
                  class="ClassLogoPandas"
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
