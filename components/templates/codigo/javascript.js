import React from 'react'
import Img from '../../atoms/atImg/index.js'
import Div from '../../atoms/atDiv/index.js'

import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║       codigo  JavaScript       ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="JavaScript" description="O que é JavaScript" canonical="/codigo/javascript/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="JavaScript">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>JavaScript</h1>
            <p>O que é JavaScript?</p>
            <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logojs.png"
                width="323px"
                height="436px"
                alt="Logo JavaScript"
                title="Logo JavaScript"
                class="ClassLogoJavaScript"
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

export default atendimentoOi
