import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║ Tutorial - PHP - procura arquivo ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="Encontrar arquivio no PHP" canonical="/codigo/php/procuraarquivo/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="PHP">
          <h1>Encontrar arquivio no PHP</h1>
          <DivCodigo titulo="Código PHP">
          {'<?php'}<br/>
            {'if(file_exists("CAMINHO/PARA/ARQUIVO.txt")) { '}<br/>
            {'echo "O arquivo já existe"; '}<br/>
            {'} '}<br/>
            {'else { '}<br/>
            {'echo "não foi possível encontrar o arquivo"; '}<br/>
            {'} '}<br/>
            {'?>'}<br/>
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
