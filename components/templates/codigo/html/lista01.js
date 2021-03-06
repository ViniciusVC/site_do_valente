import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║ Template - Tutorial - HTML - Lista01 ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Lista" 
        description="Tutorial de Lista no HTML" 
        canonical="/tutorial/html/lista01/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML Listas não ordenadas</h1>
        <p>
          A tag ul define uma listas não ordenadas.<br/>
          A tag li define um item da lista.
        </p>
        <p>
          Segue um exemplo de Lista não ordenada<br/>
        </p>
        <DivNaveg>
          <ul>
              <li>Carolina</li>
              <li>Gabriel</li>
              <li>Filipe</li>
              <li>{JsonRegiao.timea}</li>
              <li>{JsonRegiao.timeb}</li>
          </ul>
        </DivNaveg>
        <DivCodigo titulo="codigo HTML da Lista">
          {'<ul>'}<br/>
          &ensp; {'<li>Carolina</li>'}<br/>
          &ensp; {'<li>Gabriel</li>'}<br/>
          &ensp; {'<li>Filipe</li>'}<br/>
          &ensp; {'<li>'+JsonRegiao.timea+'</li>'}<br/>
          &ensp; {'<li>'+JsonRegiao.timeb+'</li>'}<br/>
          {'</ul>'}<br/>
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
