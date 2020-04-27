import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        codigo  - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="codigo HTML hgrup" description="codigo HTML hgrup" canonical="/codigo/html/hgrup/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML hgrup</h1>
        <p>
          O elemento HTML hgroup destina-se a agrupar cabeçalhos de diferentes níveis para uma seção do documento.<br/>
          Ele agrupa (é um container para) um conjunto de elementos H1, H2, H3...
        </p>
        <p>Segue exemplo da tag hgrup.</p>
        <DivNaveg>
        <hgrup>
          <h1>Titulo 1</h1>
          <h2>Titulo 2</h2>
          <h3>Titulo 3</h3>
        </hgrup>
        </DivNaveg>
        <p>Usado para agrupar titulos próximos.</p>

        <DivCodigo titulo="Codigo HTML com hgrup">
          {'<hgrup>'}<br/>
          &ensp; {'<h1>Titulo 1</h1>'}<br/>
          &ensp; {'<h2>Titulo 2</h2>'}<br/>
          &ensp; {'<h3>Titulo 3</h3>'}<br/>
          {'</hgrup>'}<br/>
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
