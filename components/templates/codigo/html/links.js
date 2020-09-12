import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔══════════════════════════════════════╗');
  console.log('║        Tutorial - HTML - Links         ║');
  console.log('╚══════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  const JsonRegiao = Util.regiao(regiao);

  return (
    <div>
      <MoHead modo={modo} title="codigo HTML Link" description="Tutorial de Link no HTML" canonical="/codigo/html/links/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
      <h1>HTML - Links</h1>
        <p>
          A tag a define um hiperlink, usado para vincular de uma página para outra.<br/>
          O atributo mais importante do elemento a é o atributo href, que indica o destino do link.<br/>
          Por padrão, os links aparecerão da seguinte forma em todos os navegadores:<br/>
          Um link não visitado está sublinhado e azul<br/>
          Um link visitado está sublinhado e roxo<br/>
          Um link ativo está sublinhado e vermelho<br/>
        </p>
        <p>Segue 3 exemplos de Links.</p>
        <DivNaveg>
        <a href={JsonRegiao.timea + ".html"}>link para {JsonRegiao.timea}</a><br/>    
        <a href={"http://www." + JsonRegiao.timeb + ".com.br"}>Link para {JsonRegiao.timeb}</a><br/>
        <a href={"http://www." + JsonRegiao.timeb + ".com.br"} target="_blank">Outro link com target</a><br/>
        <br />
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML dos links">
        {'<a href="'+ JsonRegiao.timea + '.html">link para '+JsonRegiao.timea+'</a><br/>'}<br/>
        {'<a href="http://www.' + JsonRegiao.timeb + '.com.br">Link para '+JsonRegiao.timeb+'</a><br/>'}<br/>
        {'<a href="http://www.' + JsonRegiao.timeb + '.com.br" target="_blank">Outro link com target</a><br/>'}<br/>
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
