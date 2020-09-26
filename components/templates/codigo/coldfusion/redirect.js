import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import OQueERedirect from '../../../moleculas/moOQueERedirect'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial - ColdFusion      ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="ColdFusion" description="Tutorial ColdFusion Redirect" canonical="/codigo/coldfusion/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="ColdFusion">
            <h1>ColdFusion - Redirect</h1>
            <p>Pagina em cosntrução</p>
            <p>
              ColdFusion é uma plataforma de desenvolvimento Web proprietária da Adobe Systems.<br/>
              O ColdFusion utiliza da linguagem CFML para o desenvolvimento de aplicações e páginas dinâmicas.<br/>
              A plataforma ColdFusion oferece integração nativa com plataforma Adobe Flash e seus derivados Flex e Adobe AIR.
            </p>
            <DivCodigo titulo="Exemplo de código ColdFusion:">
              >em construção
            </DivCodigo>  
            <OQueERedirect/>
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
