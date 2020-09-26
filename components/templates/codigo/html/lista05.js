import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║ Template - Tutorial - HTML - Lista05 ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);
  
  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Lista Ordenada" 
        description="Tutorial HTML Lista Ordenada" 
        canonical="/tutorial/html/lista05/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML Lista Ordenada</h1>
        <p>
          A tag ol define uma listas não ordenadas.<br/>
          A tag li define um item da lista.
        </p>
          Segue um exemplo de Lista Ordenada (type=I)<br/>        
        <DivNaveg>
          <ol type="I">
              <li>Carolina</li>
              <li>Filipe</li>
              <li>Gabriel</li>
              <li>{JsonRegiao.timea}</li>
              <li>{JsonRegiao.timeb}</li>
          </ol>
        </DivNaveg>
        <DivCodigo titulo="codigo HTML da Lista">
        {'<ol type="I">'}<br/>
          &ensp; {'<li>Carolina</li>'}<br/>
          &ensp; {'<li>Gabriel</li>'}<br/>
          &ensp; {'<li>Filipe</li>'}<br/>
          &ensp; {'<li>'+JsonRegiao.timea+'</li>'}<br/>
          &ensp; {'<li>'+JsonRegiao.timeb+'</li>'}<br/>
          {'</ol>'}<br/>
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
