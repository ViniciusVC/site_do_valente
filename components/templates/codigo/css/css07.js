import React from 'react';
import Layout from '../../../moleculas/layout';
import DivCodigo from '../../../atoms/atDivCodigo';
import DivNaveg from '../../../atoms/atDivNaveg';
import * as Util from '../../../../controller/util.js';
import MoHead from '../../../moleculas/moHead';

const atendimentoOi = function (props) {

  console.log('╔═════════════════════════════════════════╗');
  console.log('║ codigo - css 7 - Posição bordas z-index ║');
  console.log('╚═════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");


  return (
    <div>
      <MoHead modo={modo} title="CSS 07 - Posicionamento de elementos, bordas e z-index" canonical="/codigo/css/css07/"/> 
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="CSS">
          <h1>CSS 7 - Posicionamento de elementos, bordas e z-index</h1>
          
          <DivNaveg>
          <div id="div1">Texto Div1</div>
          <div id="div2">Texto Div2</div>
        </DivNaveg>
        
        <DivCodigo titulo="Codigo HTML">
          {'<div id="div1">Texto Div1</div>'}<br/>
          {'<div id="div2">Texto Div2</div>'}<br/>
        </DivCodigo>
          
        <DivCodigo titulo="CSS">
          {' #div1{ '}<br/>
          &ensp; position: absolute;<br/>
          &ensp; top:200px;<br/>
          &ensp; left: 200px;<br/>
          &ensp; width: 300px;<br/>
          &ensp; height: 180px;<br/>
          &ensp; background-color: brown;<br/>
          &ensp; border-radius: 4px;<br/>
          &ensp; -moz-border-radius: 4px;<br/>
          &ensp; -webkit-border-radius: 4px;<br/>
          &ensp; box-shadow: 2px 2px 2px #000000;<br/>
          &ensp; z-index: 2;<br/>
          {' } '}<br/>
          {' #div2{ '}<br/>
          &ensp; position: relative;<br/>
          &ensp; width: 300px;<br/>
          &ensp; height: 180px;<br/>
          &ensp; background-color:green;<br/>
          &ensp; border-radius: 4px;<br/>
          &ensp; -moz-border-radius: 4px;<br/>
          &ensp; -webkit-border-radius: 4px;<br/>
          &ensp; box-shadow: 4px 4px 4px #000000;<br/>
          &ensp; z-index: 1;<br/>
          {' } '}<br/>
        </DivCodigo>
      </Layout>
      <style jsx>{`
      /* Posicionamento de elementos, bordas e z-index */
      *{
          margin: 0;
          padding: 0;
      }

      #div1{
          position: absolute;
          top:300px;
          left: 300px;
          width: 300px;
          height: 180px;
          background-color: brown;
          border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          box-shadow: 2px 2px 2px #000000;
          z-index: 2;
      }

      #div2{
          position: relative;
          width: 300px;
          height: 180px;
          background-color:green;
          border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          box-shadow: 4px 4px 4px #000000;
          z-index: 1;
      }
    `}</style>

    </div>
  )
}

export default atendimentoOi
