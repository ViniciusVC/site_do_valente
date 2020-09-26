import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import MoHead from '../../../moleculas/moHead'
import Layout from '../../../moleculas/layout'

import * as Util from '../../../../controller/util.js';

const codigoCSS = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial - css                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="O que é CSS" 
        description="tutorial CSS" 
        canonical="/tutorial/css/"/>  
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>CSS</h1>
            <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
          </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logocss.png"
                width="200px"
                height="280px"
                alt="Logo CSS"
                title="Logo CSS"
                class="ClassLogoCSS"
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

export default codigoCSS
