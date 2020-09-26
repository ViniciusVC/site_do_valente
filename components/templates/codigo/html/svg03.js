import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import DivCodigo from '../../../atoms/atDivCodigo'
import DivNaveg from '../../../atoms/atDivNaveg'
import * as Util from '../../../../controller/util.js';

const templatesvg = function (props) {

  console.log('╔════════════════════════════════════════╗');
  console.log('║       Tutorial - HTML - SVG 03         ║');
  console.log('╚════════════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="HTML formulario_mark" 
        description="Tutorial HTML formulario_mark" 
        canonical="/tutorial/html/svg03/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="SVG">
        <h1>SVG Line, Polygon e Polyline</h1>
        <p>
          SVG é a abreviatura de Scalable Vector Graphics que pode ser traduzido do inglês como gráficos vetoriais escalonáveis. Trata-se de uma linguagem XML para descrever de forma vetorial desenhos e gráficos bidimensionais, quer de forma estática, quer dinâmica ou animada.  
        </p>
        <p>
        Segue exemplo de SVG com line, polygon, polyline.
        </p>
        <DivNaveg>
        <svg width="300" heigth="165">
            <polygon ponts="34,111 125,14 190, 120"/>
            <polyline ponts="10,78 67,43 148,104 178,47 290,130"/>
            <line x1="18" y1="16" x2="287" y2="138"/>
            <polyline ponts="1,1 67,43 148,104 178,47 290,130"/>
            
        </svg>
        </DivNaveg>
        <DivCodigo titulo="Codigo SVG Line, Polygon e Polyline">
          {'<svg width="300" heigth="165">'}<br/>
          &ensp; {'<polygon ponts="34,111 125,14 190, 120"/>'}<br/>
          &ensp; {'<polyline ponts="10,78 67,43 148,104 178,47 290,130"/>'}<br/>
          &ensp;{'<line x1="18" y1="16" x2="287" y2="138"/>'}<br/>
          {'</svg>'}<br/><br/>
        </DivCodigo>
        <DivCodigo titulo="CSS do SVG">
          {'svg {background-color: blueviolet;}'}<br/>
          {'svg Polygon {fill:coral; stroke:crimson; stroke-width: 3}'}<br/>
          {'svg line { stroke:crimson; stroke-width: 3}'}<br/>
          {'svg polyline { stroke:crimson; stroke-width: 3}'}<br/>
        </DivCodigo>
        </Layout>
      <style jsx>{`
        svg {background-color: blueviolet;}
        svg Polygon {fill:coral; stroke:crimson; stroke-width: 3}
        svg line { stroke:crimson; stroke-width: 3}
        svg polyline { stroke:crimson; stroke-width: 3}
      `}</style>
    </div>
  )
}

export default templatesvg
