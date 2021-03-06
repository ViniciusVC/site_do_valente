import React from 'react';
import Img from '../../../atoms/atImg/index.js';
import Div from '../../../atoms/atDiv/index.js';
import DivCodigo from '../../../atoms/atDivCodigo';
import Layout from '../../../moleculas/layout';
import MoHead from '../../../moleculas/moHead';
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial - ColdFusion      ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="ColdFusion" 
        description="O que é ColdFusion" 
        canonical="/codigo/coldfusion/"
        keywords="ColdFusion, Script, plataforma, tutorial, desenvolvimento, Adobe, Ola Mundo"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="ColdFusion">
        <Div display="responsivo">
          <div className="coluna404">
            <h1>O que é ColdFusion?</h1>
            <p>
              ColdFusion é uma plataforma de desenvolvimento Web proprietária da Adobe Systems.<br/>
              O ColdFusion utiliza da linguagem CFML para o desenvolvimento de aplicações e páginas dinâmicas.<br/>
              A plataforma ColdFusion oferece integração nativa com plataforma Adobe Flash e seus derivados Flex e Adobe AIR.
            </p>
            <DivCodigo titulo="exemplo de Tag em ColdFusion:">
              {'<cfoutput>Olá mundo!!</cfoutput>'}
            </DivCodigo>
            <DivCodigo titulo="exemplo de Script ColdFusion">
              {'<cfscript>'}<br/>
              {'writeOutput("Olá mundo!");'}<br/>
              {'</cfscript>'}<br/>
            </DivCodigo>
          </div>
          <div>
              <Img 
                src="/static/assetsv5/img/codigo/logocoldfusion.png"
                width="200px"
                height="200px"
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
