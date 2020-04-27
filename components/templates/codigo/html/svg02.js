import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const templatesvg = function (props) {

  console.log('╔══════════════════════════════════════════╗');
  console.log('║ codigo - HTML - SVG 02 - Ellipse e Text  ║');
  console.log('╚══════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="HTML formulario_mark" description="codigo HTML formulario_mark" canonical="/codigo/html/formulario_mark/"/>
      <Layout regiao={regiao} modo={modo} titulo="Codigo" categoria="SVG">
        <h1>SVG Ellipse e Text</h1>
        <p>
          SVG é a abreviatura de Scalable Vector Graphics que pode ser traduzido do inglês como gráficos vetoriais escalonáveis. Trata-se de uma linguagem XML para descrever de forma vetorial desenhos e gráficos bidimensionais, quer de forma estática, quer dinâmica ou animada.  
        </p>
        <p>
          Segue exemplo de SVG com ellipse e text.<br/>        
        </p>
        <DivNaveg>
          <svg width="300" heigth="165">
            <ellipse cx="150" cy="80" rx="110" ry="45"/>
            <text x="10" y="10">Texto</text>
          </svg>
        </DivNaveg>
        <DivCodigo titulo="codigo">
          {'<svg width="300" heigth="165">'}<br/>
          &ensp; {'<ellipse cx="150" cy="80" rx="110" ry="45"/>'}<br/>
          &ensp; {'<text x="10" y="10">Texto</text>'}<br/>
          {'</svg>'}<br/>
        </DivCodigo>
        <DivCodigo titulo="CSS do SVG">
          {'svg {background-color: blueviolet;}'}<br/>
          {'svg rect {fill:coral; stroke:crimson; stroke-width: 3}'}<br/>
        </DivCodigo>
        </Layout>
      <style jsx>{`
        svg {background-color: blueviolet;}
        svg rect {fill:coral; stroke:crimson; stroke-width: 3}
      `}</style>
    </div>
  )
}

export default templatesvg
