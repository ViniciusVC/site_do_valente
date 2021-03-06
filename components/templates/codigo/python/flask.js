import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔════════════════════════════╗');
  console.log('║ Tutorial - Python - Flask  ║');
  console.log('╚════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Flask" 
        description="O que é Flask" 
        canonical="/tutorial/python/flask/"
        keywords="Python, Tutorial, linguagem, programação, codigo, Flask, biblioteca"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Flask?</h1>
            <p>
            Flask (Micro Framework Web para Python)
            veja mais em : https://www.youtube.com/watch?v=e9EPb5AoMf8
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logoflask.png"
                  width="253px"
                  height="188px"
                  alt="Logo Flask"
                  title="Logo Flask"
                  class="ClassLogoFlask"
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
    `}</style>
    </div>
  )
}

export default codigoJava
