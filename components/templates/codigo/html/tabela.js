import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial - HTML - Tabela     ║');
  console.log('╚════════════════════════════════╝');
  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);
  
  return (
    <div>
      <MoHead modo={modo} title="HTML Table" description="Tutorial HTML Table" canonical="/codigo/html/tabela"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
       <h1>HTML - Tabelas</h1>
       <p>
        A tag table define uma tabela HTML.<br/>
        Uma tabela HTML consiste no elemento table e em um ou mais elementos tr , th e td .<br/>
        O elemento tr define uma linha da tabela, o elemento th define um cabeçalho da tabela e o elemento td define uma célula da tabela.<br/>
        Uma tabela HTML mais complexa também pode incluir elementos caption, col, colgroup, thead, tfoot e tbody.<br/>
       </p>
       <p>
        As tabelas não devem ser usadas para o layout da página! Historicamente, alguns autores da Web usaram mal as tabelas em HTML como uma maneira de controlar o layout da página. No entanto, existem várias alternativas ao uso de tabelas HTML para layout, principalmente usando CSS.<br/>
       </p> 
       <DivNaveg>
        <table>
          <caption>Cadastro dos melhores Times</caption>
          <thead>
            <tr>
              <th>Time:</th>
              <th>e-mail:</th>
              <th>Telefone:</th>
              <th>Cidade:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{JsonRegiao.timea}</td>
              <td>{JsonRegiao.timeb}@gmail.com</td>
              <td>(21)12341234</td>
              <td rowspan="2">{JsonRegiao.capital}</td>
            </tr>
            <tr>
              <td>{JsonRegiao.timea}</td>
              <td>{JsonRegiao.timeb}@gmail.com</td>
              <td>(21)12341234</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total : 2</td>
            </tr>
          </tfoot>
        </table>
       </DivNaveg>
       <DivCodigo titulo="codigo">
          {'<table>'}<br/>
          {'<caption>Cadastro dos melhores Times</caption>'}<br/>
          {'<thead>'}<br/>
          &ensp; {'<tr>'}<br/>
          &ensp; &ensp; {'<th>Time:</th>'}<br/>
          &ensp; &ensp; {'<th>e-mail:</th>'}<br/>
          &ensp; &ensp; {'<th>Telefone:</th>'}<br/>
          &ensp; &ensp; {'<th>Cidade:</th>'}<br/>
          &ensp; {'</tr>'}<br/>
          {'</thead>'}<br/>
          {'<tbody>'}<br/>
          &ensp; {'<tr>'}<br/>
          &ensp; &ensp; {'<td>'+JsonRegiao.timea+'</td>'}<br/>
          &ensp; &ensp; {'<td>'+JsonRegiao.timeb+'@gmail.com</td>'}<br/>
          &ensp; &ensp; {'<td>(21)12341234</td>'}<br/>
          &ensp; &ensp; {'<td rowspan="2">{JsonRegiao.capital}</td>'}<br/>
          &ensp; {'</tr>'}<br/>
          &ensp; {'<tr>'}<br/>
          &ensp; &ensp; {'<td>'+JsonRegiao.timea+'</td>'}<br/>
          &ensp; &ensp; {'<td>'+JsonRegiao.timeb+'@gmail.com</td>'}<br/>
          &ensp; &ensp; {'<td>(21)12341234</td>'}<br/>
          &ensp; {'</tr>'}<br/>
          {'</tbody>'}<br/>
          {'<tfoot>'}<br/>
          &ensp; {'<tr>'}<br/>
          &ensp; &ensp; {'<td colspan="3">Total : 2</td>'}<br/>
          &ensp; {'</tr>'}<br/>
          {'</tfoot>'}<br/>
          {'</table>'}<br/>
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
