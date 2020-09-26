import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'

import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutoriais - JavaScript - NodeJS ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="NodeJS" description="O que é NodeJS" canonical="/codigo/javascript/nodejs"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="JavaScript">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>NodeJS</h1>
            <p>O que é NodeJS?</p>
            <p>Node.js trata-se de um software open-source, cross-platform, e de um runtime de JavaScript que execute código de JavaScript a nível backend e frontend. O runtime de JavaScript é constituído pelos seguintes commandos - node package manage, e npx.</p>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logonodejs.png"
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
