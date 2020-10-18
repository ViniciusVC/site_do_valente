import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'

//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═════════════════════════════╗');
  console.log('║ Tutorial - Python - sklearn ║');
  console.log('╚═════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Scikit-learn Python" 
        description="O que é Scikit-learn como instalar e usar." 
        canonical="/tutorial/python/sklearn/"
        keywords="Scikit-learn, sklearn, python, tutorial, linguagem, programação, codigo, instalando, instalar, PIP3"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Scikit-learn</h1>
            <h3>que é Scikit-learn?</h3>
            <p>
              Scikit-learn é uma biblioteca de aprendisado de máquina para Python.<br/>
              Já contem varios algoritimos de Machine Learn.<br/>
              Não sendo necessário escrever os algoritimos de IA.<br/>
              É totalmente integrado com Numpy e Pandas.<br/>
            </p>
            <DivCodigo titulo="Exemplo de codigo Scikit-learn"> 
              import numpy as np<br/>
              import pandas as pd<br/>
              <br/>
              # Usando classificador KNN<br/>
              from sklern.neighbors import KneighborsClassifier<br/>
              knn = KneighborsClassifier(n_neighbors=3)<br/>
              <br/>
              #importando os dados para a classificação<br/>
              df=pd.read_csv("valente.csv")<br/>
              <br/>
              # dados de treinamento<br/>
              X = df.ix[:,0:4].values<br/>
              <br/>
              # classes alvo<br/>
              y=df[['target']].values.ravel()<br/>
              <br/>
              # ensinando a maquina.<br/>
              knn.fit(X,y)<br/>
              <br/>
              # Classificar um item<br/>
              knn.predict([[6.5, 5.5, 4.5, 1.3]])<br/>
              <br/>
              # Classificar outro item<br/>
              knn.predict([[1.5, 2.5, 2.0, 0.3]])<br/>            
            </DivCodigo>

            <h3>Como instalando o SKLEARN no UBUNTU?</h3>
            <DivCodigo titulo="Para instalar o SKLEARN no PIP3:">
              $ sudo pip3 install scikit-learn<br/>
              # ou<br/>
              $ pip3 install -U scikit-learn<br/>
              # ou<br/>
              $ pip3 install sklearn<br/>
            </DivCodigo>
            PIP3 é a linha de comando do Python 3.
            <DivCodigo titulo="Para instalar o SKLEARN no PIP:">
              $ sudo pip install scikit-learn<br/>
            </DivCodigo>
            PIP é a linha de comando do Python 2.
            <DivCodigo titulo="Instalar SKLern no Python 2 no Linux:">
              $ sudo apt-get install python-sklearn<br/>
            </DivCodigo>
            <DivCodigo titulo="Instalar SKLern no Python 3 no Linux">
              $ sudo apt install python3-sklearn<br/>
            </DivCodigo>
            <DivCodigo titulo="Para instalar o SKLern no Win use:">
              $ pip install -U scikit-learn<br/>
            </DivCodigo>
            <p>
              SKLern é uma abreviação para scikit-learn.
            </p>
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
