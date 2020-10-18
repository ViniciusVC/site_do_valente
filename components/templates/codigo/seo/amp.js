import React from 'react'
import Img from '../../../atoms/atImg/index.js'
import Div from '../../../atoms/atDiv/index.js'
//import DivCodigo from '../../../atoms/atDivCodigo'
//import DivNaveg from '../../../atoms/atDivNaveg'
import BtLink from '../../../atoms/atBtLink';
import Layout from '../../../moleculas/layout'
import MoHead from '../../../moleculas/moHead'

import * as Util from '../../../../controller/util.js';

const codigoAMP = function (props) {

  console.log('╔════════════════════════╗');
  console.log('║  Tutorial - seo - AMP  ║');
  console.log('╚════════════════════════╝');

  var regiao = Util.validaProps(props.regiao , "RJ");
  var modo = Util.validaProps(props.modo, "html");
  
  return (
    <div>
      <MoHead 
        modo={modo} 
        title="REDIRECT com AMP" 
        description="Tutorial REDIRECT no AMP" 
        canonical="/tutorial/seo/amp/"
      />
      <Layout regiao={regiao} modo={modo} titulo="Tutoriais" categoria="SEO">
        <Div display="responcivo">
          <div className="coluna404">
          <h1>AMP</h1>
          <p>
            AMP é uma estrutura HTML de código aberto desenvolvida pelo AMP Open Source Project. <br/>
            Foi originalmente criado pelo Google como concorrente do Facebook Instant Articles e Apple News. O AMP é otimizado para navegação online móvel e visa ajudar as páginas da internet a carregar mais rapidamente.</p>
          <p>
            Esta página possui 2 versões, uma em HTML normal e outra em AMP.<br/>
            O link da pagina em HTML:<br/>
            http://www.vvcestudio.com.br/tutorial/seo/amp/<br/>
            <BtLink href="/tutorial/seo/amp/" value="pagina em HTML" estilo="neon"/>
            O link da pagina em AMP:<br/>
            http://www.vvcestudio.com.br/tutorial/seo/amp/?amp=1<br/>
            <BtLink href="/tutorial/seo/amp/?amp=1" value="pagina em AMP" estilo="neon"/>
          </p>
          <p>
            Pagina em costrução...
          </p>
          </div>
          <div>
            <Img 
              src="/static/assetsv5/img/codigo/logoamp.png"
              width="200px"
              height="200px"
              alt="Logo AMP"
              title="Logo AMP"
              class="ClassLogoAMP"
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

export default codigoAMP
