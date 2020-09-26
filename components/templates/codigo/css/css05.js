import React from 'react'
import Layout from '../../../moleculas/layout'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead'

const atendimentoOi = function (props) {

  console.log('╔════════════════════════════════════╗');
  console.log('║ Tutorial - css 5 - Classe, ID e Span ║');
  console.log('╚════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead 
        modo={modo} 
        title="CSS - Classe, ID e Span" 
        description="Tutorial 5 - CSS - Classe, ID e Span"
        canonical="/tutorial/css/css05/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="CSS">
        <h1>CSS - Classe, ID e Span</h1>
        <p>
          Qual a diferença entre CLASS e ID?<br/>
          Em HTML e CSS, há a possibilidade de aplicar estilos através de 'class' e 'id' e, em JavaScript é possível indentificar algum elemento de uma página por sua classe, id ou tag. Mas qual a diferença entre 'class' e 'id'?<br/>
        </p>
        <p>
          Classe : são uma forma de identificar um grupo de elementos. Através delas, pode-se atribuir formatação a VÁRIOS elementos de uma vez.<br/> 
          ID : As ids são uma forma de identificar um elemento, e devem ser ÚNICAS para cada elemento. É como se fossem impressões digitais de nossos dedos ou RGs. Através delas, pode-se atribuir formatação a um elemento em especial.<br/>
          Span :<br/>
          A seguir alguns exemplos de estilização de HTML: 
        </p>
        <DivNaveg>
          <div id="div1">div1</div>
          <div className="classdivs">div2</div>
          <span>Paragrafo simples.</span>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<span>Paragrafo simples.</span>'}
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {"#div1{"}<br/>
          color : #fff000;<br/>
          {"}"}<br/>
          {".classdivs{"}<br/>
          color : #000000;<br/>
          {"}"}<br/>
        </DivCodigo>

      </Layout >
      <style jsx>{`
        #div1{
          color : #fff000;
        }
        .classdivs{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default atendimentoOi
