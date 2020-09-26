import React from 'react'
import Img from '../../atoms/atImg/index.js'
import Div from '../../atoms/atDiv/index.js'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';

const codhtml5 = function (props) {

  console.log('╔═══════════════════════════════╗');
  console.log('║      tutorial - HTML5         ║');
  console.log('╚═══════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao, "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML5" 
        description="Tutorial Código HTML5" 
        canonical="/tutorial/html5/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <Div display="justificado">
          <div>
            <h1>HTML5</h1>
            <p>Linguagens de programação podem ser usadas para expressar algoritmos com precisão. O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software. Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
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

export default codhtml5
