import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const codigoJava = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║ Tutorial - Python - NumPy ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="NumPy" 
        description="O que é NumPy" 
        canonical="/tutorial/python/numpy/"
        keywords="Python, Tutorial, linguagem, programação, codigo, NumPy, biblioteca, pacote"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Python">
        <Div display="responcivo">
          <div>
            <h1>O que é NumPy?</h1>
            <p>
              NumPy é um pacote para a linguagem Python que suporta arrays e matrizes multidimensionais, possuindo uma larga coleção de funções matemáticas para trabalhar com estas estruturas.<br/>
            </p>
          </div>
          <div>
            <Img 
                  src="/static/assetsv5/img/codigo/logonumpy.png"
                  width="323px"
                  height="436px"
                  alt="Logo NumPy"
                  title="Logo NumPy"
                  class="ClassLogoNumPy"
                  modo={modo}>
            </Img>
          </div>
        </Div>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default codigoJava
