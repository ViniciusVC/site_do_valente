import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const Knockout = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║      Tutorial   Knockout       ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="KnockoutJS" description="Tutorial Knockout JS" canonical="/tutorial/knockout/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="KnockoutJS">
      <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é Knockout JS?</h1>
            <p>
              Knockout é uma implementação JavaScript independente do padrão Model-View-ViewModel com modelos.<br />
              Os princípios subjacentes são, portanto: uma separação clara entre os dados do domínio, visualize os componentes e os dados a serem exibidos.
            </p>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logoknockout.png"
                width="323px"
                height="436px"
                alt="Logo Knockout JS"
                title="Logo Knockout JS"
                class="ClassKnockoutJS"
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

export default Knockout
