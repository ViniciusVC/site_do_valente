import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║     Tutorial - HTML - Formulário         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML formulario_mark" description="Tutorial de formulario_mark em HTML" canonical="/codigo/html/formulario_mark/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML MARK</h1>
        <p>
          A tag mark define o texto marcado.<br/>
          Use a tag mark se desejar destacar partes do seu texto.
        </p>
        <p>Segue um exemplo da TAG MARK.</p>
        <DivNaveg>
        <p>Nono no nono <mark>nononon no nono</mark> nono nonono no. Nono no nono nononon no nono nono nonono no , Nono no nono nononon no nono nono nonono no, Nono no nono nononon no nono nono nonono no.</p>
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML MARK">
        {'<p>Nono no nono <mark>nononon no nono</mark> nono nonono no. Nono no nono nononon no nono nono nonono no , Nono no nono nononon no nono nono nonono no, Nono no nono nononon no nono nono nonono no.</p>'} 
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
