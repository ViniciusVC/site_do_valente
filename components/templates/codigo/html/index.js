import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import ListadeRotasHTML from '../../../moleculas/moListadeRotas/listaHTML.js'

const html = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - HTML                ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="tutorial HTML" 
        description="tutorial Codigo HTML" canonical="/tutorial/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <Div display="responsivo">
          <div className="coluna404">
            <h1>O que é HTML 5</h1>
            <p>Linguagens de programação podem ser usadas para expressar algoritmos com precisão. <br/>
              O conjunto de palavras (lexemas classificados em tokens), compostos de acordo com essas regras, constituem o código fonte de um software.<br/> 
              Esse código fonte é depois traduzido para código de máquina, que é executado pelo microprocessador.</p>
              <p>
                Veja mais:
              </p>
              <ListadeRotasHTML modo={modo} regiao={regiao}/>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logohtml.png"
                width="323px"
                height="390px"
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
