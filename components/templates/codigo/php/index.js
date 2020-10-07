// Rotas 
// http://www.vvcestudio.com.br/tutorial/PHP/
// http://www.vvcestudio.com.br/amp/tutorial/PHP/

import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'

import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║      Tutorial - PHP       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="PHP" 
        description="O que é PHP" 
        canonical="/tutorial/PHP/"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="PHP">
        <Div display="justificado">
          <div className="coluna404">
            <h1>O que é PHP?</h1>
            <p>
              PHP é uma linguagem de programação.
              Usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na Internet.<br/>
            </p> 
            <DivCodigo titulo="Exemplo de codigo PHP">
              {'<html>'}<br/>
              {'<head>'}<br/>
              {'<title>Teste PHP</title>'}<br/>
              {'</head>'}<br/>
              &nbsp;{'<body>'}<br/>
              &nbsp;&nbsp;{'<?php echo "<p>Olá Mundo</p>"; ?>'}<br/>
              &nbsp;{'</body>'}<br/>
              {'</html>'}<br/>
            </DivCodigo>

            <DivCodigo titulo="Comentario em PHP">
              /* Comentário 1 */
            </DivCodigo>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logophp.png"
                width="200px"
                height="200px"
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
