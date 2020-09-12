import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Semantica" description="Tutorial Semantica HTML" canonical="/codigo/html/semantica/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML Semantica</h1>
        <p>
        HTML semântico é o uso da marcação HTML para reforçar a semântica, ou significado, das informações em páginas da Web e aplicativos da Web, em vez de apenas definir sua apresentação ou aparência.<br/>
        O HTML semântico é processado pelos navegadores da web tradicionais.
        </p>

        <DivCodigo titulo="codigo">
          
          <br/>&lt;section&gt;
          <br/>&lt;article&gt;
          <br/>&lt;nav&gt;
          <br/>&lt;aside&gt;
          <br/>&lt;main&gt;
          <br/>&lt;figure&gt;
          <br/>&lt;footer&gt;
          <br/>&lt;a&gt;
          <br/>&lt;em&gt;
          <br/>&lt;strong&gt;
          <br/>&lt;cite&gt;
          <br/>&lt;q&gt;
          <br/>&lt;time&gt;
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

// Obs.: para expor o codigo basta trocar '<>' por '&lt;' e '&gt;' 
