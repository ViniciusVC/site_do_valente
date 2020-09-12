import React from 'react'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const Knockout = function (props) {

  console.log('╔════════════════════════════════╗');
  console.log('║     Tutorial   Knockout  2     ║');
  console.log('╚════════════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead modo={modo} title="KnockoutJS" description="Tutorial Knockout JS" canonical="/codigo/knockout/knockout2"/>
      <Layout regiao={regiao} modo={modo}>
          <h1>Knockout JS - 2</h1>
          <p>Knockout é uma implementação JavaScript independente do padrão Model-View-ViewModel com modelos.<br />
            Os princípios subjacentes são, portanto: uma separação clara entre os dados do domínio, visualize os componentes e os dados a serem exibidos.</p>
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

export default Knockout
