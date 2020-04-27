import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import MoHead from '../../../moleculas/moHead'

import Div from '../../../atoms/atDiv'

import ListadeRotas from '../../../moleculas/moListadeRotas/index.js'
import HeaderSideDoValente from '../../../moleculas/moHeaderSideDoValente/index.js'

//import HeaderMinhaOi from '../../organisms/codigo/headerCodigo.js/index.js.js'
//import FooterMinhaOi from '../../organisms/codigo/footerCodigo.js/index.js'
//import ContentAtendimento from '../../organisms/codigo/contentAtendimento.js'
//import Line from '../../atoms/atLine';
//import HeaderMenu from "../../moleculas/codigo/headerMenu";
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║    codigo   - css -  Tabelas Style     ║');
  console.log('╚════════════════════════════════════════╝');

  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);
  
  return (
    <div>
      <MoHead modo={modo} title="CSS - Tabelas Style" canonical="/codigo/css/css13/"/>  
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
        <h1>CSS - Tabelas Style</h1>
        <p>
        A tag table define uma tabela HTML.<br/>
        Uma tabela HTML consiste no elemento table e em um ou mais elementos tr , th e td .<br/>
        O elemento tr define uma linha da tabela, o elemento th define um cabeçalho da tabela e o elemento td define uma célula da tabela.<br/>
        Uma tabela HTML mais complexa também pode incluir elementos caption, col, colgroup, thead, tfoot e tbody.<br/>
       </p>
        <DivNaveg>
        <table>
          <caption>Cadastro dos melhores Times</caption>
          <colgroup>
            <col className="time"/>
            <col className="email"/>
            <col className="telefone"/>
            <col className="cidade"/>
          </colgroup>
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
              <td>{JsonRegiao.timea}@gmail.com</td>
              <td>(21)12341234</td>
              <td rowspan="2">{JsonRegiao.capital}</td>
            </tr>
            <tr>
              <td>{JsonRegiao.timeb}</td>
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
        
        <DivCodigo titulo="Codigo HTML da Tabela">
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
          &ensp; &ensp; {'<td>'+JsonRegiao.timea+'@gmail.com</td>'}<br/>
          &ensp; &ensp; {'<td>(21)12341234</td>'}<br/>
          &ensp; &ensp; {'<td rowspan="2">{JsonRegiao.capital}</td>'}<br/>
          &ensp; {'</tr>'}<br/>
          &ensp; {'<tr>'}<br/>
          &ensp; &ensp; {'<td>'+JsonRegiao.timeb+'</td>'}<br/>
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
          
        <DivCodigo titulo="CSS da Tabela">
        {'table, th, td {border: 1px solid #000;}'}<br/>
        {'.time {background-color:red;}'}<br/>
        {'.email {background-color:green;}'}<br/>
        {'.telefone {background-color:blue;}'}<br/>
        {'.cidade {background-color:blue;}'}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        table, th, td {border: 1px solid #000;}
        .time {background-color:red;}
        .email {background-color:green;}
        .telefone {background-color:blue;}
        .cidade {background-color:blue;}
      `}</style>
    </div>
  )
}

export default atendimentoOi
