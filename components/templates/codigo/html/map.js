import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="codigo HTMl MAP" description="Tutorial de MAP no HTML." canonical="/codigo/html/map"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        
      <h1>HTML MAP</h1>
        O map serve para criar areas clicaveis em uma imagem.<br/>
        <DivNaveg>

        <img src="imagem.jpg" alt="imagem mapeada" usermap="#imagem-mapeada"/>
        <map name="imagem-mapeada">
            <area shape="rect" coords="141,91,316,354" href="0"/>
            <area shape="circle" coords="485,82,35" href="0"/>
            <area shape="poly" coords="150,382,316,380,231,448" href="0"/>
        </map>
        </DivNaveg>
        <DivCodigo titulo="codigo">

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
