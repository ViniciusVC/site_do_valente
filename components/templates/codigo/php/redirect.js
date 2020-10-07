import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import OQueERedirect from '../../../moleculas/moOQueERedirect'
import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║   Tutorial - PHP - redirect    ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="Redirect PHP" 
        description="Tutorial REDIRECIONAMENTOS 301 com PHP." 
        canonical="/tutorial/php"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="PHP">
          <h1>CRIANDO REDIRECIONAMENTOS NO PHP</h1>
          <p>Para criar um REDIRECT 301 no PHP use o código a seguir:</p>
          <DivCodigo titulo="Código redirect em PHP">
            {'<?php'}<br/>
            Header( "HTTP/1.1 301 Moved Permanently" );<br/>
            Header( "Location: http://www.seu-novo-site.com.br" );<br/>
            {'?>'}<br/>
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
