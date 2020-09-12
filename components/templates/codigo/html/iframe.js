import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'

function funIframe(varmodo){
  if(varmodo=="html"){
    return(<iframe src="/eu" width="100%" height="480" title="Exemplo Iframe"></iframe>)
  }else{
    return(<amp-iframe width="200" height="200" title="Exemplo Iframe" frameborder="0" src="/eu"></amp-iframe>)
  }
}

const htmliframe = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - HTML - iframe         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML iframe" description="Tutorial HTML Iframe" canonical="/codigo/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>Iframe</h1>
        <p>
          A tag iframe especifica um quadro embutido.<br/>
          Um quadro embutido é usado para incorporar outro documento no documento HTML atual.<br/>
        </p>
        <DivNaveg>
          {funIframe(modo)}
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML iframe">
          {'<iframe src="/eu" width="100%" height="480" title="Exemplo Iframe"></iframe>'}
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

export default htmliframe
