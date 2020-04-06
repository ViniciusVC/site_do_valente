import React from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import FaviIcon from '../../../atoms/atFavIcon'
import Layout from '../../../moleculas/layout'

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
  console.log('║        codigo   - css                  ║');
  console.log('╚════════════════════════════════════════╝');

  const regiao = Util.validaProps(props.regiao , "RJ");
  const modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);
  
  return (
    <div>
      <Head>
        <title>CSS - Tabelas Style</title>
        <FaviIcon />
        <meta name="description" content="CSS - Tabelas Style" />
        <link rel="canonical" href="/codigo/css/css13/" />
        <link rel="amphtml" href="/amp/codigo/css/css13/" />
        <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
        <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
      </Head>
      <Layout regiao={regiao} modo={modo}>
        <h1>CSS - Tabelas Style</h1>
        <p>Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</p>
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
        {'<style>'}<br/>
        {'table, th, td {border: 1px solid #000;}'}<br/>
        {'.time {background-color:red;}'}<br/>
        {'.email {background-color:green;}'}<br/>
        {'.telefone {background-color:blue;}'}<br/>
        {'.cidade {background-color:blue;}'}<br/>
        {'</style>'}<br/>
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
