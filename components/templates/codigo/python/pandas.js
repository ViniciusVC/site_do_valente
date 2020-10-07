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
              uri = "dadosExemploGui.csv" # Instanciar caminho do arquivo csv.<br/>
              dados = pd.read_csv(uri) # Ler o arquivo e atribuir os dados a uma variavel.<br/>
              print(dados.head()) # Mostra conteudo da tabela.<br/>
            </DivCodigo>
            <DivCodigo titulo="Usando o Pandas para plotar graficos simples">
              # Mostar um historiograma (Grafico de barras).<br/>
              notas.nota.plot(kind='hist')<br/>
            </DivCodigo>
            <DivCodigo titulo="Para instalar o PANDAS para Python 2:">
              $ sudo apt-get install python-pandas<br/>
            </DivCodigo>
            <DivCodigo titulo="Para instalar o PANDAS para Python 3:">
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
