import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║ Template - Tutorial - HTML - Lista06 ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML Lista com Descrição" 
        description="Tutorial HTML Lista com Descrição" 
        canonical="/tutorial/html/lista06/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
        <h1>HTML Lista com Descrição</h1>
        <p>
          A tag dl define uma listas com descrição.<br/>
          A tag dt define um item da lista.<br/>
          A tag dd define a descrição do item.<br/>
        </p>
          Segue um exemplo de Lista com descrição<br/>        
        <DivNaveg>
        <dl> 
              <dt>Titulo(dt)</dt>
              <dd>descrição(dd)</dd>
              <dt>Titulo(dt){JsonRegiao.timea}</dt>
              <dd>descrição(dd)</dd>
              <dt>Titulo(dt){JsonRegiao.timeb}</dt>
              <dd>descrição(dd)</dd>
          </dl>
        </DivNaveg>
        <DivCodigo titulo="codigo HTML da Lista">
          {'<dl>'}<br/>
          &ensp; {'<dt>Titulo(dt)</dt>'}<br/>
          &ensp; {'<dd>descrição(dd)</dd>'}<br/>
          &ensp; {'<dt>Titulo(dt)'+JsonRegiao.timea+'</dt>'}<br/>
          &ensp; {'<dd>descrição(dd)</dd>'}<br/>
          &ensp; {'<dt>Titulo(dt)'+JsonRegiao.timeb+'</dt>'}<br/>
          &ensp; {'descrição(dd)'}<br/>
          {'</dl>'}<br/>
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
