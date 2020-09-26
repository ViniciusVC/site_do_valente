import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║       Tutorial - HTML - script         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Script" 
        description="Tutorial Script no HTML" 
        canonical="/tutorial/html/script/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Script</h1>
        <p>Segue exemplo de aplicação de script no html.</p>
        
        <DivNaveg>

        </DivNaveg>
        <DivCodigo titulo="codigo">
        {'<script>'}<br/>
        {'alert("Ola")'}<br/>
        {'</script>'}<br/>
        {'<script src="alerta.js"></script>'}<br/>
        {'<noscript>Você está com o script desabilitado.</noscript>'}<br/>

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

export default atendimentoOi
