import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═════════════════════════════════╗');
  console.log('║ Tutoriais - JavaScript - ReactJS ║');
  console.log('╚═════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="ReactJS" 
        description="O que é ReactJS" 
        canonical="/tutorial/javascript/Reactjs"
        keywords="React, ReactJS, tutorial, js, codigo, html5, javascript, programação, vvc estudio"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="JavaScript">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>React.JS</h1>
            <h3>O que é ReactJS?</h3>
            <p>
              O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.<br/> 
              É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.
            </p>
            <DivCodigo titulo="Exemplo de código ReactJS">
              ReactDOM.render(<br/>
              {'<h1>Titulo</h1>,'}<br/>
              document.getElementById('root')<br/>
              );<br/>
            </DivCodigo>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logoreactjs.jpg"
                width="200px"
                height="237px"
                alt="Logo JavaScript"
                title="Logo JavaScript"
                class="ClassLogoJavaScript"
                modo={modo}>
              </Img>
          </div>
      </Div>
      <div>
       É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.<br/>
        Este projeto utiliza React.JS, para a criação de componentes.
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

export default atendimentoOi
