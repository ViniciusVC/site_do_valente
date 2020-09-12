import React from 'react'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║      Tutorial   - css 2 - img, text    ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div className="Body">
      <MoHead modo={modo} title="CSS - img, text" canonical="/codigo/css/css02/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
      <h1>CSS - img, text</h1>
      <h1>CSS Paragrafo, ID e Class</h1>
        A seguir alguns exemploes de HTML com estilisação:<br/>
        
        <DivNaveg>
          <p>paragrafo simples.</p>
          <p id="paragrafo2">Paragrafo com id.</p>
          <p className="paragrafo3">Paragrafo com class.</p>
        </DivNaveg>

        <DivCodigo titulo="Codigo HTML">
          {'<p>paragrafo simples.</p>'}<br/>
          {'<p id="paragrafo2">Paragrafo com id.</p>'}<br/>  
          {'<p className="paragrafo3">Paragrafo com class.</p>'}<br/>
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
          &ensp; {' color: green; '}<br/>
          {' } '}<br/>
          {' /* Aplicando CSS com CLASS */ '}<br/>
          {' .paragrafo3 { '}<br/>
          &ensp; {' color: #000000; '}<br/>
          {' } '}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        p {
            text-align: right;
            text-decoration: line-through;
            text-indent: 4px;
            font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
            font-size:12;
            color:#FF0000;
        }
        /* ID */
        #paragrafo2 {
            text-align: center;
            text-decoration: blink;
            color: green;
        }
        /* CLASS */
        .paragrafo3 { 
            color: #000000;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
