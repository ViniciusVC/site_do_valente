import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
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
        canonical="/tutorial/python/pandas/"
        keywords="Python, Tutorial, linguagem, programação, codigo, Pandas, biblioteca, Dados"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div>
            <h1>O que é Pandas?</h1>
            <p>
              Pandas é uma biblioteca de software criada para a linguagem Python, para manipulação e análise de dados.<br/>
              É atualmente a biblioteca mais usada para <strong>MANIPULAÇÃO DE DADOS</strong> no Pyton.<br/>
              Oferece estruturas e operações para manipular tabelas numéricas e séries temporais.<br/>
              Pandas é um software livre, sob a licença BSD.<br/>
            </p>
            <DivCodigo titulo="Exemplo de codigo Python com PANDAS">
              import pandas as pd #Importando biblioteca Pandas.<br/>
              dados01 = pd.read_csv("dadosExemploGui.csv") # Ler um arquivo CSV e atribuir os dados a uma variavel.<br/>
              print(dados01.head()) # Mostra conteudo da tabela.<br/>
            </DivCodigo>
            
            <DivCodigo titulo="Ler um JSON com PANDAS">
              # Ler o arquivo de Dados JSON e atribuir os dados a uma variavel.<br/>
              dados02 = pd.read_json("valente.json)
              print(dados02.head()) # Mostra conteudo da tabela.<br/>
            </DivCodigo>
            


            
            <DivCodigo titulo="Usando o Pandas para plotar graficos simples">
              # Mostar um historiograma (Grafico de barras).<br/>
              notas.nota.plot(kind='hist')<br/>
            </DivCodigo>

            <DivCodigo titulo="Instalar o PANDAS no Python2 no Linux:">
              $ sudo apt-get install python-pandas<br/>
            </DivCodigo>
            <DivCodigo titulo="Instalar o PANDAS np Python3 no Linux:">
              $ sudo apt install python3-pandas<br/>
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
