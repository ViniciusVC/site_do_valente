import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════╗');
  console.log('║ codigo - PHP - procura diretorio ║');
  console.log('╚══════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="Encontrar diretorio no PHP" canonical="/codigo/php/procuradiretorio/"/>
      <Layout regiao={regiao} modo={modo}>
          <h1>Encontrar diretorio no PHP</h1>
          <DivCodigo titulo="Código PHP">
            {'<?php'}<br/>
            {'if(is_dir(" C:/Server/htdocs/teste")) { '}<br/>
            {'  echo "diretório encontrádo"; '}<br/>
            {'} '}<br/>
            {'else { '}<br/>
            {'  echo "não foi possível encontrar o diretório ou este é um arquivo"; '}<br/>
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
