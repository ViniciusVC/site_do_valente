import React from 'react'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════════╗');
  console.log('║  Tutorial - css - Paragrafo, ID e Class  ║');
  console.log('╚══════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CSS Paragrafo, ID e Class" 
        description="Tutorial 1 - CSS - Paragrafo, ID e Class"
        canonical="/tutorial/css/css01/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
        <h1>CSS Paragrafo, ID e Class</h1>
        A seguir alguns exemplos de HTML com estilização:<br/>
        
        <DivNaveg>
          <p>paragrafo simples.</p>
          <p id="paragrafo2">Paragrafo com id.</p>
          <p className="paragrafo3">Paragrafo com class.</p>
        </DivNaveg>        
        
        <DivCodigo titulo="Codigo HTML">
            {'<p>paragrafo simples.</p>'}
            {'<p id="paragrafo2">Paragrafo com id.</p>'}  
            {'<p className="paragrafo3">Paragrafo com class.</p>'}
        </DivCodigo>
  
        <DivCodigo titulo="CSS">
            {' /*Istó é um comentario no css*/'}<br/>
            {' /* Aplicando CSS ao componente */'}<br/>
            {' p {'}<br/>
            &ensp; {' font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;'}<br/>
            &ensp; {' font-size:12;'}<br/>
            &ensp; {' color:#FF0000;'}<br/>
            {' }'}<br/>
            {'/* Aplicando CSS com ID */ '}<br/>
            {' #paragrafo2 { '}<br/>
            &ensp; {'   color: green; '}<br/>
            {' } '}<br/>
            {' /* Aplicando CSS com CLASS */ '}<br/>
            {' .paragrafo3 { '}<br/>
            &ensp; {'  color: #FFFFFF; '}<br/>
            {' } '}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        p {
            font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
            font-size:12;
            color:#FF0000;
        }
        /* ID */
        #paragrafo2 {
            color: green;
        }

        /* CLASS */
        .paragrafo3 {
            color: #FFFFFF;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
