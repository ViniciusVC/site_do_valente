import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║ Tutorial - Python - NumPy ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="NumPy" 
        description="O que é NumPy" 
        canonical="/tutorial/python/numpy/"
        keywords="Python, Tutorial, linguagem, programação, codigo, NumPy, biblioteca, pacote"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div>
            <h1>NumPy</h1>
            <h3>O que é NumPy?</h3>
            <p>
              É um Biblioteca para trabalhar com matrizes e vetores.
              NumPy é um pacote para a linguagem Python que suporta arrays e matrizes multidimensionais, possuindo uma larga coleção de funções matemáticas para trabalhar com estas estruturas.<br/>
            </p>
            <h3>Limitação do NumPy</h3>
            <p>
              As variaveis precisam ter dados de mesmo tipo.<br/>
              E por isso a necessidade de utilizar o Pandas.
            </p>
            <DivCodigo titulo="Exemplo de código com Numpy">
              ## Python comum<br/>
              L = range(1000) <br/>
              %timeit [i** 2 for i in L] ## Mostrar o tempo que demorou para processar<br/>
              <br/>
              # Com Numpy<br/>
              import numpy as np<br/>
              a = np.arange(1000)<br/>
              %timeit a** 2 ## Mostrar o tempo que demorou para processar<br/>
            </DivCodigo>

            <DivCodigo titulo="Calculos com arrays">
              # Criar arrys com Numpy<br/>
              dados01 = np.array([1,2,3,4,5,6,7,8,9])<br/>
              dados02 = np.array([7,4,3,2,4,5,6,7,8])<br/>
              <br/>
              # Somar 2 arrays<br/>
              soma = dados01 + dados02<br/>
              print(soma)<br/>
              <br/>
              # Multiplicar 2 arrays<br/>
              multiplicar = dados01 + dados02<br/>
              print(multiplicar)<br/>
              <br/>
              # Médias<br/>
              media = dados01.mean()<br/>
              print(media)<br/>
              <br/>
              # desvio padrão<br/>
              DesvioPadrão = dados01.std()<br/>
              print(DesvioPadrão)<br/>
              <br/>
              #Valor máximo<br/>
              dados01.max()<br/>
              <br/>
              #Valor minimo<br/>
              dados01.mini()<br/>
            </DivCodigo>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logonumpy.png"
                  width="323px"
                  height="436px"
                  alt="Logo NumPy"
                  title="Logo NumPy"
                  class="ClassLogoNumPy"
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
