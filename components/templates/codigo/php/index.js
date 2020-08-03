import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║        codigo - PHP       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="PHP" description="Código PHP" canonical="/codigo/PHP/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="PHP">
        <Div display="justificado">
          <div className="coluna404">
            <h1>PHP</h1>
            <p>
              PHP é uma linguagem de programação.
              Usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na Internet.<br/>
            </p>    
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logophp.png"
                width="323px"
                height="436px"
                alt="Logo PHP"
                title="Logo PHP"
                class="ClassLogoPHP"
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
