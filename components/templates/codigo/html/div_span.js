import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║    Tutorial  - HTML - div e span     ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML - DIV e SPAN" description="Tutorial - HTML - DIV e SPAN" canonical="/codigo/html/div_span/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="html">
        <h1>HTML - DIV e SPAN</h1>
        <p>
          A tag div define uma divisão ou seção em um documento HTML.<br/>
          O elemento div é frequentemente usado como um contêiner para outros elementos HTML para estilizá-los com CSS ou para executar determinadas tarefas com JavaScript.
        </p>
        <p>
          A tag span é usada para agrupar elementos embutidos em um documento.<br/>
          A tag span não fornece nenhuma alteração visual por si só.<br/>
          A tag span fornece uma maneira de adicionar um gancho a uma parte de um texto ou a uma parte de um documento.
        </p>
        <p>Segue exemplos das tags de DIV e SPAN.</p>
        <DivNaveg>
          <div className="div">
            <p>
              Bla bla bla Bla <span>Exmplo de SPAN</span> bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla
            </p>
          </div>
        </DivNaveg>
        <DivCodigo titulo="Codigo HTML com DIV e SPAN">
          {'<div>'}<br/>
          {' <p>'}<br/>
          {'Bla bla bla Bla <span>Exmplo de SPAN</span> bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla'}<br/>
          {' </p>'}<br/>
          {'</div>'}<br/>
        </DivCodigo>
        <DivCodigo titulo="CSS">
          {'.div {'}<br/>
          &ensp; background-color: red;<br/>
          &ensp; padding: 20px;<br/>
          {'}'}<br/>
          {'span {'}<br/>
          &ensp; background-color: blue; <br/>
          &ensp; padding: 10px;<br/>
          {'}'}<br/>
        </DivCodigo>

      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
        .p{
          color : #000000;
        }
        .div {
          background-color: red;
          padding: 20px;
        }
        span {
          background-color: blue; 
          padding: 10px;
        }
      `}</style>
    </div>
  )
}

export default atendimentoOi
