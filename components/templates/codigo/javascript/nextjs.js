import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'

import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutoriais - JavaScript - NextJS ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="NextJS" 
        description="O que é NextJS" 
        canonical="/codigo/javascript/nextjs/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="JavaScript">
        <Div display="responcivo">
          <div>
            <h1>NextJS</h1>
            <p>O que é NextJS?</p>
            <p>NextJS é um framework amplamente utilizado pela comunidade do ReactJS.</p>
            <p>Pode ser usado para construir sites estáticos e dinâmicos e aplicativos da web.</p>
            <p>Possui muitos recursos integrados. Uma amostra deles são: Um sistema de roteamento baseado em página intuitivo (com suporte para rotas dinâmicas) ... Suporte embutido de CSS e Sass e suporte para qualquer biblioteca CSS-in-JS. Ambiente de desenvolvimento com suporte Fast Refresh.</p>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logonextjs.jpg"
                width="300px"
                height="160px"
                alt="Logo Next JS"
                title="Logo Next JS"
                class="ClassLogoNextJS"
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
