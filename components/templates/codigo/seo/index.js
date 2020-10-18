import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'
import * as Util from '../../../../controller/util.js';

const codigoSEO = function (props) {

  console.log('╔══════════════════════════╗');
  console.log('║  Tutorial - O que é SEO  ║');
  console.log('╚══════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");

  return (
    <div>
      <MoHead 
        modo={modo} 
        title="O que é SEO" 
        description="Tutorial - O que é SEO." 
        canonical="/tutorial/seo/"/>
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="SEO">
        <Div display="responcivo">
          <div className="coluna404">
            <h1>O que é SEO?</h1>
            <p>
              Otimização de Sites é o conjunto de estratégias com o objetivo de potencializar e melhorar o posicionamento de um site nas páginas de resultados naturais nos sites de busca gerando conversões, sejam elas, um lead, uma compra, um envio de formulário, agendamento de consulta e outros.
            </p>
          </div>
          <div>
            <Img 
              src="/static/assetsv5/img/codigo/logoseo.jpg"
              width="200px"
              height="200px"
              alt="Logo SEO"
              title="Logo SEO"
              class="ClassLogoSEO"
              modo={modo}>
            </Img>
          </div>
        </Div>
      </Layout>
      <style jsx>{`
        .h1{
          color : #000000;
        }
    `}</style>
    </div>
  )
}

export default codigoSEO
