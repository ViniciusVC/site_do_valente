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
        title="Sklearn Python" 
        description="O que é Sklearn como instalar e usar" 
        canonical="/tutorial/python/sklearn/"
        keywords="sklearn, python, tutorial, linguagem, programação, codigo, instalando, instalar, PIP3"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é SKLEARN?</h1>
            <p>
              Você pode usar a biblioteca SKLEARN para aplicar a Regressão Linear no Python.
              SKLEARN é uma biblioteca pra Python. 
            </p>
            <DivCodigo titulo="Exemplo de codigo SKLEARN:">
              sklearn<br/>
            </DivCodigo>
            Como instalando o SKLEARN no UBUNTU?
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
            <DivCodigo titulo="Para instalar o SKLEARN para Python 2:">
              $ sudo apt-get install python-sklearn<br/>
            </DivCodigo>
            <DivCodigo titulo="Para instalar o SKLEARN para Python 3:">
              $ sudo apt install python3-sklearn<br/>
            </DivCodigo>
            <DivCodigo titulo="Para instalar o SKLEARN no Win use:">
              $ pip install -U scikit-learn<br/>
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
