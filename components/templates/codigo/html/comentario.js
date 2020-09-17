import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║        Tutorial  - HTML                  ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML Comentario" description="Tutorial de comentario em HTML" canonical="/codigo/html/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="html">
      <h1>HTML Comentario</h1>
        <p>
          Todo o texto que colocar dentro está comentado, ou seja, não aparecerá na página. <br/>
          Dentro de um comentário pode colocar o texto ou código HTML, como etiquetas. <br/>
          O comentário começa por {'<'}! -- e finaliza por --{'>'} Tudo o que colocar entre essas etiquetas está comentado.</p>
        <p>Segue um exemplo de comentario em HTML.</p>        
        <DivNaveg>
          <br/>
        </DivNaveg>
        <DivCodigo titulo="codigo">
          {'<!-- Tudo aqui dentro é um comentário -->'}
        </DivCodigo>
        <p>Comentários ajudão a organizar o código e não são visiveis para o navegador.</p>
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
