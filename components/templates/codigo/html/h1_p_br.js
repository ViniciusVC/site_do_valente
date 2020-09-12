import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║    Tutorial - HTML - H1 H2 H3 P e BR     ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="codigo HTML H1 H2 H3 P" description="codigo HTML H1 H2 H3 P" canonical="/codigo/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML - H1, H2, H3, P e BR </h1>
        <p>
        As Heading Tags (H1, H2, H3, ...) são recursos de programação HTML utilizados para destacar títulos e sub-títulos de uma página. H1 é a abreviação do inglês para Header 1, ou Cabeçalho 1, logo, o mais importante dos Headers.
        </p>
        <p>
        O h1 é um sumário do conteúdo do texto (é como um título de livro ou título de artigo no jornal).<br/>
        Possui um destaque maior, uma fonte maior, e é geralmente o elemento de texto mais visível da página.<br/>
        Em cada página, deve haver uma única tag h1.<br/>
        Em termos de atratividade para o usuário, é de primordial importância. Mas para a promoção de SEO, a meta tag do título é mais importante.<br/>
        </p>
        <p>
        É importante entender que o H1 e o título são títulos diferentes.<br/>
        Eles devem ser habilmente combinados.<br/>
        Ao desconsiderar as regras de singularidade e relevância dos títulos devemos levar e consideração o fato de que o site está sob filtro. Recentemente, os mecanismos de busca começaram a prestar especial atenção à qualidade do conteúdo e suas configurações de SEO. Duplicidade, oversampling, distribuição irregular de cabeçalhos e sua inconsistência em relação ao conteúdo é punida.<br/>
        </p>
        <p>
        A tag P é o parágrafo.<br/>
        O parágrafo é o elemento base no texto editado.<br/>
        Ele coloca uma linha vazia acima e uma abaixo do texto para fazè-lo evidente.<br/>
        </p>
        <p>A tag BR insere uma única quebra de linha</p>
        <p>Segue exemplos das tags H1 H2 H3 P e BR.</p>
        <DivNaveg>
        <h1>Título</h1>
        <h2>Título2</h2>
	      <h3>Título3</h3>
	      <p>Paragrafo</p>
        <br/>

        </DivNaveg>
        Segue este código em HTML

        <DivCodigo titulo="codigo">
        {'<h1>Título</h1>'}<br/>
        {'<h2>Título2</h2>'}<br/>
	      {'<h3>Título3</h3>'}<br/>
	      {'<p>Paragrafo</p>'}<br/>
        {'<br/>'}<br/>
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
