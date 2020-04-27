import React from 'react'
import Img from '../../atoms/atImg/index.js'
import Div from '../../atoms/atDiv/index.js'
import Layout from '../../moleculas/layout'
import MoHead from '../../moleculas/moHead'
import * as Util from '../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║       codigo  ColdFusion       ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="ColdFusion" description="Código ColdFusion" canonical="/codigo/coldfusion/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="ColdFusion"> 
        <Div display="justificado">
          <div className="coluna404">
            <h1>ColdFusion</h1>
            <p>
              ColdFusion é uma plataforma de desenvolvimento Web proprietária da Adobe Systems.<br/>
              O ColdFusion utiliza da linguagem CFML para o desenvolvimento de aplicações e páginas dinâmicas.<br/>
              A plataforma ColdFusion oferece integração nativa com plataforma Adobe Flash e seus derivados Flex e Adobe AIR.
            </p>  
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logocoldfusion.png"
                width="323px"
                height="436px"
                alt="Logo ColdFusion"
                title="Logo ColdFusion"
                class="ClassLogoColdFusion"
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
