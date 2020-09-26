import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const codigoRuby = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║     Tutoriais  Ruby       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Ruby On Rails" description="Tutorial - Ruby On Rails" canonical="/tutorial/rubyonrails/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Ruby on Rails">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Ruby on Rails</h1>
            <p>
            Ruby on Rails é um framework livre que promete aumentar velocidade e facilidade no desenvolvimento de sites orientados a banco de dados, uma vez que é possível criar aplicações com base em estruturas pré-definidas.
            </p>            
          </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logorubyonrails.png"
                width="323px"
                height="436px"
                alt="Logo Ruby On Rails"
                title="Logo Ruby On Rails"
                class="ClassLogoRuby"
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

export default codigoRuby
