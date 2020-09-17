import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';
import Icon from '../../../atoms/atIcon/index.js'


const codigoJavaRedirect = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║  Tutorial - Java - Redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="REDIRECT com Java" description="Tutorial REDIRECT no Java" canonical="/codigo/java/redirect/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="Java">
          <h1>Redirect Java</h1>
          <p>Java...</p>
          <p>Pagina em costrução.</p>
          <Icon type="suporte" color="#fff" width="30px"/>
          <DivCodigo titulo="Código JAVA">
            <p>Pagina em costrução.</p>
          </DivCodigo>
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

export default codigoJavaRedirect
