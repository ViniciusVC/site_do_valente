import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║        codigo  Python       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="Python" description="Código Python" canonical="/codigo/python/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="Python">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>Python</h1>
            <p>Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.<br/>
              Foi lançada por Guido van Rossum em 1991.<br/>
            </p>
            <DivCodigo titulo="Exemplo de código Python">
              {'x = 1'}<br/>
              {'if x == 1:'}<br/>
              {'# indented four spaces'}<br/>
              {'print("x is 1.")'}<br/>
            </DivCodigo>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logopython.svg"
                  width="323px"
                  height="436px"
                  alt="Logo Java"
                  title="Logo Java"
                  class="ClassLogoJava"
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

export default codigoJava
