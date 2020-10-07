import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║ Tutorial - Cientista de Dados ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Cientista de Dados" 
        description="O que é um Cientista de Dados" 
        canonical="/tutorial/bancodedados/datascience/"
        keywords="data science, cientista de dados, Modelos Machine Learning, Estatística Frequentista, Estatística Bayesiana, Storyteller"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Banco de Dados">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>DATA SCIENCE</h1>
            <h3>O que é Cientista de dados.</h3>
            <p>
              Ciência de dados é uma área interdisciplinar voltada para o estudo e a análise de dados econômicos, financeiros e sociais, estruturados e não-estruturados, que visa a extração de conhecimento, detecção de padrões e/ou obtenção de variáveis para possíveis tomadas de decisão.<br/>
              Responder perguntas baseados em dados.<br/>
            </p>
            <h3>Dados e Linguagem de programação</h3>
            <p>
              Um cientista de dados precisa trabalhar com grande volume de dados.<br/>
              Com grande volume de dados o Excel não é mais suficiente.<br/>
              Para consultas e extrações de dados o SQL é fundamental.<br/>
              Para manipular os dados é necessária uma linguagem de programação como o Python.<br/>
            </p>
            <h3>Modelos Machine Learning</h3>
            <p>
              Machine learning é projetado para resolver 3 problemas : Regreção, Classificação e Clusterização.<br/>
              <br/>
              Os Principais Algoritmos de Machine Learning são:<br/>
              Regreção linear (Veja SKLEARN);<br/>  
              Decision Tree;<br/>
              Random Forest;<br/>
              Extra trees;<br/>
              K-Means;<br/>
              Cluster Hierárquico;<br/> 
              ARIMA;<br/>
            </p>
            <h3>Estatistica</h3>
            <p> 
              Estatística é a área da Matemática que estuda a coleta, registro, organização e análise dos dados de uma pesquisa.<br/>
              - Parâmetros Desconhecidos<br/>
              - Dados Observados<br/>
              - Modelo (Dados - Parâmetros)<br/>
              </p>
            <p>
              Estatística Frequentista<br/>
                Na abordagem Frequentista (ou inferência estatística) a probabilidade é a repetição de eventos.<br/>
                Quanto mais testes mais próximo da probabilidade real.<br/>
                Quantas vezes cairá “cara”, ao se joga uma moeda (experimento) <br/>
              - Parâmetros Desconhecidos são fixos<br/>
              - Dados Observados são aleatorios (ex.: cara, coroa, cara)<br/>
              - Modelo (Dados -> Parâmetros) Inúmeros modelos, decididos por critérios ótimos.<br/>
              O critério ótimo é o que melhor atende o que foi definido.<br/>
            </p>
            <p>
              Estatística Bayesiana <br/>
                Na abordagem Bayesiana a probabilidade usa o termo probabilidade, da mesma forma que usamos esse termo diariamente, como uma medida condicional da incerteza P(E/D) associada com a ocorrência de um evento E, dada a informação disponível D. <br/>
                Defini-se um valor inicial (que é chamado de Viés) e cruza com o experimento.<br/>
                Com menos dados chega-se a um resultado mais rápido.<br/>
              - Parâmetros do modelo são Aleatórios.<br/>
              - Dados são fixo.<br/>
              - Modelo único.<br/>
            </p>
            <h3>As tarefas de um Data Scientist são:</h3>
            <p> 
              Questão de negócio<br/>
              Entendimento do Negocio<br/>
              Coleta de dados<br/>
              Limpeza de dados<br/>
              Exploração dos Dados<br/>
              Modelagem de dados<br/>
              Algoritmos de machine learning<br/>
              Avaliação do Algoritmo<br/>
              Modelo em Produção<br/>
            </p>
            <h3>Visualização de Dados e Storyteller</h3>
            <p> 
              O que é Storytelling?<br/>
              Storytelling é a arte de contar histórias usando técnicas inspiradas em roteiristas e escritores para transmitir uma mensagem de forma inesquecível.<br/>
              <br/>
              Storytelling de Resultados. <br/>
              Apresentação dos Resultados. <br/>
              Estratégia para apresentar resultados de forma que qualquer pessoa entenda. <br/>
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logobancodedados.svg"
                  width="200px"
                  height="200px"
                  alt="Logo bancodedados"
                  title="Logo bancodedados"
                  class="ClassLogobancodedados"
                  modo={modo}>
            </Img>
          </div>
        </Div>
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
