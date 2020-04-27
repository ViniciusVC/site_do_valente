import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'


const html = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo  - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="codigo HTML" description="codigo HTML" canonical="/codigo/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <Div display="justificado">
          <div className="coluna404">
            <h1>HTML 5</h1>
            <p>Linguagens de programação podem ser usadas para expressar algoritmos com precisão. <br/>
              O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software.<br/> 
              Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logohtml.png"
                width="323px"
                height="436px"
                alt="Logo HTML5"
                title="Logo HTML5"
                class="ClassLogoHTML5"
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

export default html
