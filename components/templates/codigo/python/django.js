import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔══════════════════════════════╗');
  console.log('║ Tutorial - Python - Django   ║');
  console.log('╚══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Django " 
        description="O que é Django " 
        canonical="/tutorial/python/django /"
        keywords="Python, Tutorial, linguagem, programação, codigo, Django , biblioteca"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Django ?</h1>
            <p>
              Django é um Framework para Python. 
              Saiba mais em : https://youtu.be/ao8pCrRqKOs
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logoDjango .png"
                  width="253px"
                  height="188px"
                  alt="Logo Django "
                  title="Logo Django "
                  class="ClassLogoDjango "
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
        .p{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default codigoJava
