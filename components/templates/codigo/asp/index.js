import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import Layout from '../../../moleculas/layout'
import MoHead from '../../..//moleculas/moHead'

//import Head from 'next/head'
//import FaviIcon from '../../../atoms/atFavIcon'
import * as Util from '../../../../controller/util.js';

const codigoAsp = function (props) {

  console.log('╔═══════════════════════════╗');
  console.log('║      Tutorial - ASP       ║');
  console.log('╚═══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="ASP" 
        description="O que é ASP" 
        canonical="/codigo/asp/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="ASP">
      <Div display="responsivo">
          <div className="coluna404">
          <h1>ASP</h1>
          <p>O ASP, também conhecido como ASP Clássico hoje em dia, é uma estrutura de bibliotecas básicas para processamento de linguagens de script no lado servidor para geração de conteúdo dinâmico na Web.</p>         </div>
          <div>
            <Img 
                src="/static/assetsv5/img/codigo/logoasp.png"
                width="323px"
                height="136px"
                alt="Logo ASP"
                title="Logo ASP"
                class="ClassLogoASP"
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

export default codigoAsp
